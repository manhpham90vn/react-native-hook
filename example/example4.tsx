import {Button, Text, View} from "react-native";
import {useEffect, useRef, useState} from "react";

const Example4 = () => {

    const [count, setCount] = useState(0)
    const preCount = useRef<number | null>(0)
    const timer = useRef<ReturnType<typeof setInterval> | null>(null)

    // get last value of state with useRef
    useEffect(() => {
        preCount.current = count
    }, [count]);

    const handleStart = () => {
        timer.current = setInterval(() => {
            setCount(prevState => prevState - 1)
        }, 1000)
    }

    const handleStop = () => {
        timer.current && clearInterval(timer.current)
    }

    console.log(count, preCount)

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{count}</Text>
            <Button title='Start' onPress={handleStart}/>
            <Button title='Stop' onPress={handleStop}/>
        </View>
    )
}

export default Example4
