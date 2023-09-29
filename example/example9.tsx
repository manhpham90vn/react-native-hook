import {Button, Text, View} from "react-native";
import {createContext, useContext} from "react";

export const ThemeContext = createContext('')

type Example9Props = {
    onChangeTheme: () => void
}

const Example9 = ({onChangeTheme}: Example9Props) => {

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
    const theme = useContext(ThemeContext)

    console.log('render Example')

    return (
        <View>
            <Text style={{textAlign: 'center'}}>{theme}</Text>
        </View>
    )
}

export default Example9
