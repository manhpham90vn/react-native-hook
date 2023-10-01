import * as SecureStore from 'expo-secure-store';
import * as React from 'react';
import {Reducer, useReducer} from 'react';

interface State<T> {
    isLoading: boolean,
    data: T | null
}

const initState: State<any> = {
    isLoading: true,
    data: null
}

interface Action<T> {
    data: T | null
}

type UseStateHook<T> = [State<T>, (value: T | null) => void];

const useAsyncState = <T,>(): UseStateHook<T> => {
    const reducer = <T,>(state: State<T>, action: Action<T>) => {
        return {
            ...state,
            isLoading: false,
            data: action.data
        }
    }
    const [state, dispatch] = useReducer<Reducer<State<T>, Action<T>>>(reducer, initState)

    const payload = (data: T | null): Action<T> => {
        return {
            data: data
        }
    }

    const update = (data: T | null) => {
        dispatch(payload(data))
    }

    return [state, update]
}

export const setStorageItemAsync = async (key: string, value: string | null) => {
    if (value == null) {
        await SecureStore.deleteItemAsync(key);
    } else {
        await SecureStore.setItemAsync(key, value);
    }
}

export const useStorageState = (key: string): UseStateHook<string> => {
    // Public
    const [state, setState] = useAsyncState<string>();

    // Get
    React.useEffect(() => {
        SecureStore.getItemAsync(key).then(value => {
            setState(value);
        });
    }, [key]);

    // Set
    const setValue = React.useCallback(
        (value: string | null) => {
            setStorageItemAsync(key, value).then(() => {
                setState(value);
            });
        },
        [key]
    );

    return [state, setValue];
}
