import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image 
} from 'react-native'
const styles = StyleSheet.create({
    wrapper:{
        height:250,
        width:"100%"
    },
})

export default class Knowledge extends Component {
    render() {
        return (
            <View>
                <View style={styles.wrapper}>
                    <Image source={require('../../images/knowledge.jpg')} style={{width:"100%",height:"100%"}}/>
                </View>
            </View>
        )
    }
}
