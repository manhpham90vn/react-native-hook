import {Text, TouchableOpacity, View} from "react-native";
import {memo, useCallback, useState} from "react";

const Example6 = () => {

    const [count, setCount] = useState(0)

    // sử dụng useCallback và memo để chặn việc render không cần thiết ở Example
    // do Example chỉ sử dụng props là function mà không có bất cứ props nào cần thay đổi
    const handle = useCallback(()=> {
        setCount(prevState => prevState + 1)
    }, [])

    console.log('render Example6')

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{count}</Text>
            <Example onPress={handle} />
        </View>
    )
}

type ExampleProps = {
    onPress: () => void
}

const Example = memo((props: ExampleProps) => {

    console.log('render Example')

    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text>Update</Text>
            </TouchableOpacity>
        </View>
    )
})

export default Example6
