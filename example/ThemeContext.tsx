import React, {createContext, FC, ReactNode, useState} from "react";

export type ThemeType = {
    theme: string,
    setTheme: () => void
}

export const ThemeContext = createContext<ThemeType | null>(null)

type Props = {
    children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => {

    const [theme, setTheme] = useState('light')

    const onChangeTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{theme: theme, setTheme: onChangeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
