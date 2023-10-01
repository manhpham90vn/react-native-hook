import {createContext, FC, ReactNode, useContext} from "react";
import {useStorageState} from "./useStorageState";

export interface SessionType {
    signIn: () => void,
    signOut: () => void,
    data: string | null,
    isLoading: boolean
}

const SessionContext = createContext<SessionType | null>(null)

export const useSession = () => {
    return useContext(SessionContext);
}

type Props = {
    children: ReactNode
}

export const SessionProvider: FC<Props> = ({children}) => {
    const [{isLoading, data}, setSession] = useStorageState('session');

    return (
        <SessionContext.Provider
            value={{
                signIn: () => {
                    setSession('user data login');
                },
                signOut: () => {
                    setSession(null);
                },
                data,
                isLoading,
            }}>
            {children}
        </SessionContext.Provider>
    );
}