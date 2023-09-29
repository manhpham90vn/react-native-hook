import {Button, Text, TextInput, View} from "react-native";
import {useMemo, useState} from "react";

const Example7 = () => {

    const [input, setInput] = useState('')
    const [data, setData] = useState<string[]>([])

    // dùng useMemo để chặn tính toán lại không cần thiết hàm getCount
    const getCount = useMemo((): number => {
        console.log('getCount')
        return data.length
    }, [data])

    const handle = () => {
        setData([
            ...data,
            input
        ])
        setInput('')
    }

    console.log('render')

  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', marginLeft: 20, marginRight: 20}}>
          <Text style={{textAlign: 'center'}}>Total: {getCount}</Text>
          <TextInput placeholder='Input here' onChangeText={setInput} value={input} />
          <Button title='Tap' onPress={handle}/>
      </View>
  )
}

export default Example7
