import {AppState, Button, Text, View} from "react-native";
import {useEffect, useState} from "react";

const Example2 = () => {

    const [loading, setLoading] = useState(false)

    // useEffect thường dùng để call api, update ui, listener
    // nguyên tắc là phải update ui, call api, listener (side effect) bên trong useEffect

    // case 1: chỉ có callback
    // trong trường hợp này thì callback luôn được gọi khi component mount hoặc component re-render
    useEffect(() => {
        console.log('case 1')
    });

    // case 2: empty dependency
    // được gọi 1 lần sau khi component mount
    useEffect(() => {
        console.log('case 2')
    }, []);

    // case 3: có dependency
    // được gọi nếu component mount và dependency thay đổi (so sánh === để kiểm tra)
    useEffect(() => {
        console.log('case 3')
    }, [loading]);

    useEffect(() => {
        const sub = AppState.addEventListener('change', (state) => {
            console.log(state)
        })
        // clean up khi component un-mount
        return () => sub.remove()
    }, []);

    // case 4: cleanup func
    // cleanup func luôn được gọi trước khi component unmounted
    // cleanup func luôn được gọi trước khi callback được gọi

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('setInterval', Date())
        }, 1000)
        // clean up khi component un-mount
        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        console.log('Mounted hoặc re-render')
        return () => {
            console.log('Clean up')
        }
    }, [loading]);

    console.log('render')

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{loading.toString()}</Text>
            <Button title='Submit' onPress={() => {
                setLoading(!loading)
            }} />
        </View>
    )
}

export default Example2
