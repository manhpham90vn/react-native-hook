import {Text, TouchableOpacity, View} from "react-native";
import {useEffect, useLayoutEffect, useState} from "react";

const Example3 = () => {

    const [count, setCount] = useState(0)

    // useEffect chạy sau khi trình duyệt đã cập nhật dom và người dùng đã nhìn thấy các thay đổi trên giao diện
    // useLayoutEffect chạy đồng bộ ngay sau khi trình duyệt đã cập nhật dom, trước khi người dùng nhìn thấy các thay đổi trên giao diện
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count]);

    const handleUpdate = () => {
        setCount(count + 1)
    }

    console.log('render', count)

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{count}</Text>
            <TouchableOpacity onPress={handleUpdate}>
                <Text>Update</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Example3;
