import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class Block extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>{Actions.send()}}>
                    <Text>发帖子</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Actions.sended()}}>
                    <Text>我发出的</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
