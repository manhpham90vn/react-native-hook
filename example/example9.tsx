import {Button, Text, View} from "react-native";
import {useContext} from "react";
import {ThemeContext, ThemeType} from "./Context/ThemeContext";

const Example9 = () => {

    const {setTheme} = useContext(ThemeContext) as ThemeType

    const onChangeTheme = () => {
        setTheme()
    }

    console.log('render Example9')

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Example />
            <Button title='Toggle' onPress={onChangeTheme} />
        </View>
    )
}

type ExampleProps = {
    theme: string
}

const Example = () => {

    // lấy ra data từ Context
    const { theme } = useContext(ThemeContext) as ThemeType

    console.log('render Example')

    return (
        <View>
            <Text style={{textAlign: 'center'}}>{theme}</Text>
        </View>
    )
}

export default Example9
