import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ToastAndroid,
    Alert,
    FlatList,
    Image 
} from 'react-native'
const styles = StyleSheet.create({
    line:{
        height:1,
        backgroundColor:'white',
        width:'100%'
    },
    top:{
        fontWeight:'bold',
        color:'white',
        width:'100%',
        textAlign:"center",
        marginTop:10,
        fontSize:36,
        lineHeight:50
    },
    question:{
        height :200,
        marginLeft:'15%',
        width:'70%',
        marginTop:40,
        borderRadius:15,
        backgroundColor:'rgba(0,0,0,0.4)'
    },
    questiontext:{
        fontWeight:'bold',
        color:'white',
        width:'100%',
        textAlign:"center",
        marginTop:20,
        fontSize:30,
        lineHeight:50
    },
    option:{
        marginTop:40,
        backgroundColor:'white',
        height:50,
        width:'70%',
        marginLeft:'15%',
        borderRadius:45,
    },
    optiontxt:{
        textAlign:'center',
        fontSize:30,
        color:'black'
    },
    ans:{
        width:'50%',
        height:50,
        color:'white',
        borderRadius:15,
        marginLeft:'5%',
        marginRight:'10%',
        textAlign:'center',
        marginTop:20,
        fontSize:24,
        lineHeight:45
    },
    next:{
        width:'25%',
        height:50,
        backgroundColor:'white',
        borderRadius:15,
        marginTop:20,

    }
})
const data = [
    {
        question:'海绵宝宝的口头禅是？',
        choice:['怎么回事啊','非常谢谢你','我准备好了','为啥会这样'],
        answer:'我准备好了',
    },
    {
        question:'C语言中输出函数的函数名是？',
        choice:['cin','scanf','printf','count'],
        answer:'printf',
    },
    {
        question:'抗生素的作用不包括？',
        choice:['抗病毒作用','免疫抑制作用','抗细菌感染','抗肿瘤作用'],
        answer:'抗病毒作用',
    },
    {
        question:'以下武侠小说中，不是金庸先生作品的是',
        choice:['越女剑','寻秦记','鸳鸯刀','白马啸西风'],
        answer:'寻秦记',
    },
    {
        question:'以下哪部音乐不是芭蕾舞剧？',
        choice:['蝴蝶夫人','天鹅湖','胡桃夹子','吉赛尔'],
        answer:'蝴蝶夫人',
    },
    {
        question:'贾斯汀·比伯（Justin Bieber）是哪个国家的流行歌手？',
        choice:['美国','加拿大','西班牙','英国'],
        answer:'加拿大',
    },
    {
        question:'混凝土在荷载保持不变的情况下随时间而增长的变形是？',
        choice:['扭曲','弯曲变形','徐变','开裂'],
        answer:'徐变',
    },
    {
        question:'“江南好，风景旧曾谙”出自下列哪位的作品？',
        choice:['白居易','李白','李商隐','杜甫'],
        answer:'白居易',
    },
    {
        question:'中国历史上第一位独揽国家大权的女性是',
        choice:['武则天','冯太后','吕雉','孝庄太后'],
        answer:'吕雉',
    },
    {
        question:'发行欧元的欧洲中央银行总部位于？',
        choice:['柏林','法兰克福','布鲁塞尔','巴黎'],
        answer:'法兰克福',
    }
]
export default class Answer extends Component {
    constructor(){
        super();
        this.state={
            num:0,
            ans:'',
            score:0
        }
    }
    changenum = () =>{
        if(this.state.num == 9){
            Actions.score({score:this.state.score});
        }
        else{
            this.setState({
                num: this.state.num +1
            })
        }
    }
    check = (test) =>{
        this.setState({
            ans:'正确答案是：'+data [this.state.num ].answer
        })
        console.log(test);
        if(test == data [this.state.num ].answer){
            this.setState({
                score:this.state.score+10
            })
            ToastAndroid.showWithGravity('答案正确', 2000, ToastAndroid.CENTER);
        }
        else{
            Alert.alert("答案错误");
        }
    }
    render() {
        return (
            <View style={{height:'100%',width:'100%',backgroundColor:'rgba(121,190,59,0.8)'}}>
                <View style={styles.line}></View>
                <Text style={styles.top}>第{this.state.num+1}题</Text>
                <View style={styles.question}>
                    <Text style={styles.questiontext}>{data[this.state.num].question}</Text>
                </View>
                <View>
                    {
                        data[this.state.num].choice.map((item)=>(
                            <TouchableOpacity style={styles.option} onPress={()=>this.check(item)} >
                                <Text style={styles.optiontxt}>{item}</Text>
                            </TouchableOpacity>
                        ))
                        
                    }
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.ans}>{this.state.ans}</Text>
                    <TouchableOpacity  style={styles.next} onPress={this.changenum}>
                        <Text style={{fontSize:20,lineHeight:45,textAlign:'center'}}>下一题</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        )
    }
}
