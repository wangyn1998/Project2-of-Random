import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
const styles = StyleSheet.create({
    wrapper:{
        height:250,
        width:"100%",
    }
})
export default class Everyday extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                <View style={styles.wrapper}>
                        <Image source={require('../../images/recommend.png')} style={{width:"100%",height:"100%"}}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
