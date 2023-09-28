import {Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";

const Example1 = () => {

    // khai báo state thông thường
    const [state, setState] = useState(0)

    // khai báo state với callback - chỉ run 1 lần để tính init state
    const [state2, setState2] = useState(() => {
        return [1, 2, 3].reduce((previousValue, currentValue) => previousValue + currentValue)
    })

    console.log('render')

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{state}</Text>
            <Text>{state2}</Text>
            <TouchableOpacity onPress={() => {
                // set state thông thường
                setState(state + 1)
            }}>
                <Text>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                // set state với callback
                setState(prevState => prevState + 1)
            }}>
                <Text>Update with setState</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setState2(prevState => prevState + 1)
            }}>
                <Text>Update with setState2</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Example1
