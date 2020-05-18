import React, { Component } from 'react'
import { Text, View } from 'react-native'
import WebView from 'react-native-webview'

export default class Word extends Component {
    render() {
        return (
            <View style={{weight:'100%',height:1000}}>
               <WebView style={{weight:'100%',height:1000}} source={{ uri: 'http://www.4399.com/flash/200761_2.htm' }} /> 
            </View>
        )
    }
}
