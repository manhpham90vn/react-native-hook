import {Button, Text, TextInput, View} from "react-native";
import {login, logout, useAuth} from "./Context/AuthContext";
import {useState} from "react";

const Example10 = () => {

    const {state} = useAuth()

    return (
        <View style={{flex: 1}}>
            {!state.isLogin && <Login />}
            {state.isLogin && <Home />}
        </View>
    )
}

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {dispatch} = useAuth()

    const onLogin = () => {
        dispatch(login({email: email, password: password}))
    }

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>Login screen</Text>
            <TextInput placeholder='Email' value={email} onChangeText={text => setEmail(text)} />
            <TextInput placeholder='Password' value={password} onChangeText={text => setPassword(text)} />
            <Button title='Login' onPress={onLogin} />
        </View>
    )
}

const Home = () => {

    const {dispatch} = useAuth()

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>Home screen</Text>
            <Button title='Logout' onPress={onLogout} />
        </View>
    )
}

export default Example10