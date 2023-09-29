import {Button, TextInput, View} from "react-native";
import {Reducer, useCallback, useReducer} from "react";

interface Data {
    email: string,
    password: string
}

enum ActionKind {
    SET_EMAIL = 'SET_EMAIL',
    SET_PASSWORD = 'SET_PASSWORD',
    RESET = 'RESET',
}

interface Action {
    type: ActionKind,
    payload: string
}

const initState: Data = {
    email: '',
    password: ''
}

const reducer = (state: Data, action: Action) => {
    switch (action.type) {
        case ActionKind.RESET:
            return { ...initState }
        case ActionKind.SET_EMAIL:
            return { ...state, email: action.payload }
        case ActionKind.SET_PASSWORD:
            return { ...state, password: action.payload }
        default:
            throw Error('Invalid action')
    }
}

// @ts-ignore
const logger = (reducer) => {

    const getCurrentTimeFormatted = () => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        const milliseconds = currentTime.getMilliseconds();
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    // @ts-ignore
    return (prevState, action) => {
        const next = reducer(prevState, action);
        console.group(`%cAction: %c${action.type} %cat ${getCurrentTimeFormatted()}`, "color: lightgreen; font-weight: bold;", "color: white; font-weight: bold;", "color: lightblue; font-weight: lighter;");
        console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", prevState);
        console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
        console.log("%cNext State:", "color: #47B04B; font-weight: 700;", next);
        console.groupEnd();
        return next
    }
}

const Example8 = () => {

    const [data, dispatch] = useReducer(logger(reducer), initState)
    const { email, password } = data

    const onChangeMail = (value: string) => {
        dispatch({type: ActionKind.SET_EMAIL, payload: value})
        console.log('dispatch ActionKind.SET_EMAIL', data)
    }

    const onChangePass = (value: string) => {
        dispatch({type: ActionKind.SET_PASSWORD, payload: value})
        console.log('dispatch ActionKind.SET_PASSWORD', data)
    }

    const handleSubmit = () => {
        console.log('handleSubmit', data)
    }

    const handleReset = () => {
        dispatch({type: ActionKind.RESET, payload: ''})
        console.log('dispatch ActionKind.RESET', data)
    }

    console.log('render')

  return (
      <View style={{flex: 1, justifyContent: 'center', marginLeft: 20, marginRight: 20}}>
          <TextInput placeholder='Email' value={email} onChangeText={onChangeMail} />
          <TextInput placeholder='Password' value={password} onChangeText={onChangePass} />
          <View style={{paddingTop: 20}}>
              <Button title='Submit' onPress={handleSubmit} />
          </View>
          <View style={{paddingTop: 20}}>
              <Button title='Reset' onPress={handleReset}/>
          </View>
      </View>
  )
}

export default Example8
