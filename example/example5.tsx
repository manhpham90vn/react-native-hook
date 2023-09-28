import {Button, Text, View} from "react-native";
import {memo, useState} from "react";

const Example5 = () => {
    const [count, setCount] = useState(0)

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{count}</Text>
            <Button title='Update' onPress={() => {
                setCount(prevState => prevState + 1)
            }}/>
        </View>
      )
}

// trong react nếu component cha render thì component con cũng render theo
// sử dụng memo để hạn chế việc này
export default memo(Example5)
