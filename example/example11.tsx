import {Button, Text, View} from "react-native";
import {SessionType, useSession} from "./SessionContext";

const Example11 = () => {
    const {signIn, signOut, data, isLoading} = useSession() as SessionType

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>{isLoading.toString()}</Text>
            <Text style={{textAlign: 'center'}}>{data ?? 'user not login'}</Text>
            <Button title='Login' onPress={signIn} />
            <Button title='Logout' onPress={signOut} />
        </View>
    )
}

export default Example11