import React, { Component } from 'react'
import { Text, View } from 'react-native'
import WebView from 'react-native-webview'

export default class Phrase extends Component {
    render() {
        return (
            <View style={{width:'100%',height:1000}}>
               <WebView style={{width:'100%',height:1000}} source={{ uri: 'http://www.4399.com/flash/212075_1.htm' }} /> 
            </View>
        )
    }
}
