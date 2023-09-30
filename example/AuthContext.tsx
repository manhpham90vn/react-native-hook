import React, {createContext, Dispatch, FC, ReactNode, useContext, useReducer, useState} from "react";

interface AuthState {
    isLogin: boolean
}

const initState: AuthState = {
    isLogin: false
}

enum AuthActionKind {
    LoginAction = 'LoginAction',
    LogoutAction = 'LogoutAction'
}

interface LoginPayload {
    email: string,
    password: string
}

interface LoginAction {
    type: AuthActionKind.LoginAction,
    payload: LoginPayload
}

interface LogoutAction {
    type: AuthActionKind.LogoutAction
}

type AuthAction = LoginAction | LogoutAction

export const login = (payload: LoginPayload): LoginAction => {
    return {type: AuthActionKind.LoginAction, payload: payload}
}

export const logout = (): LogoutAction => {
    return {type: AuthActionKind.LogoutAction}
}

interface ContextType {
    state: AuthState,
    dispatch: Dispatch<AuthAction>
}

const AuthContext = createContext<ContextType>({
    state: initState,
    dispatch: () => undefined
})

type Props = {
    children: ReactNode
}

const reducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionKind.LoginAction:
            return { ...state, isLogin: true }
        case AuthActionKind.LogoutAction:
            return { ...state, isLogin: false }
        default:
            throw Error('Invalid action')
    }
}

export const AuthProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const {state, dispatch} = useContext(AuthContext)
    return {state, dispatch}
}