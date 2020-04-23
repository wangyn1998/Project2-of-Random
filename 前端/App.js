import React,{useState,useEffect} from 'react';
import {Icon} from '@ant-design/react-native';
import {Router, Overlay, Scene, Tabs, Lightbox, Modal, Actions} from "react-native-router-flux";
import SplashScreen from 'react-native-splash-screen'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  AsyncStorage,
  ToastAndroid,
  BackHandler
} from 'react-native';

import Box from './src/box/Box';
import Block from './src/block/Block';
import Discover from './src/discover/Discover';
import Game from './src/discover/Game';
import Exam from './src/discover/Exam';
import Knowledge from './src/discover/Knowledge';
import Everyday from './src/discover/Everyday';
import My from './src/my/My';
import Login from './src/common/Login';
import Register from './src/common/Register';
import Personal from './src/my/Personal';
import Signin from './src/my/Signin';
import Xian from './src/my/Xian';
import Bing from './src/my/Bing';
import Set from './src/my/Set';
import About from './src/my/About';
import Help from './src/my/Help';
import Rank from './src/my/Rank';
import Selection from './src/box/Selection';
import Test from './src/box/Test';
import Learn from './src/box/Learn';
import Alterpwd from './src/my/Alterpwd';
import Findpwd from './src/my/Findpwd';
import Hand from './src/my/Hand';
const styles = StyleSheet.create({

})

console.disableYellowBox = true;

const App = () => {
  let now = 0;
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Router
      // backAndroidHandler={()=>{
      //   if(Actions.currentScene != 'home'){
      //     Actions.pop();
      //     return true;
      //   }else{
      //     if(new Date().getTime()-now<2000){
      //       BackHandler.exitApp();
      //     }else{
      //       ToastAndroid.show('确定要退出吗',100);
      //       now = new Date().getTime();
      //       return true;
      //     }
      //   }
        
      // }}
    >
      <Overlay>
      <Modal key="modal" hideNavBar>
        <Lightbox key="lightbox">
            <Scene key="root">
              <Tabs
                key='tabbar'
                hideNavBar
                activeTintColor='#79be3b'
                inactiveTintColor='#949494'
                tabBarStyle={{backgroundColor:'#fffff'}}
              >
                <Scene key='boxPage'
                  title='学习盒'
                  titleStyle={{color:'#ffffff',textAlign:'center',flex:1}}
                  navigationBarStyle={{backgroundColor:'#79be3b'}}
                  icon={
                    ({focused})=><Icon
                    color={focused?'#79be3b':'#949494'}
                    name="code-sandbox"
                  />
                  }
                >
                  <Scene key='box' component={Box}/>
                </Scene>
                <Scene  
                  key='blockPage'
                  title='盒塘'
                  hideNavBar
                  icon={
                    ({focused}) =>  <Icon
                    name={"home"} 
                    color={focused?'#79be3b':'#949494'}
                    />
                  }
                >
                  <Scene key="block" component={Block}/>
                </Scene>
                <Scene 
                  key='discoverPage'
                  title='发现'
                  icon={
                    ({focused}) =>  <Icon
                    name={"global"}
                    color={focused?'#79be3b':'#949494'}
                    />
                  }
                  navigationBarStyle={{backgroundColor:'#79be3b'}}
                  titleStyle={{color:'white',marginLeft:'48%'}}
                  >
                    <Scene key="discover" component={Discover}/>
                    <Scene 
                      title='游戏'
                      key="game" 
                      component={Game} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                    <Scene 
                      title='知识'
                      key="knowledge" 
                      component={Knowledge} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                    <Scene 
                      title='每日推荐'
                      key="everyday" 
                      component={Everyday} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                    <Scene 
                      title='考试信息'
                      key="exam" 
                      component={Exam} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                  </Scene>
                  <Scene key='myPage'
                    title='我的'
                    navigationBarStyle={{backgroundColor:'#79be3b'}}
                    titleStyle={{flex:1,textAlign:'center',color:'white'}}
                    icon={
                      ({focused})=><Icon
                      color={focused?'#79be3b':'#949494'}
                      name="user"
                      />
                      }
                  >
                    <Scene key='my' component={My}/>
                    <Scene 
                      title='编辑资料'
                      key="personal" 
                      component={Personal} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                    <Scene 
                      title='签到领积分'
                      key="signin" 
                      component={Signin} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                    <Scene 
                      title='线性图'
                      key="xian" 
                      component={Xian} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                    <Scene 
                      title='饼状图'
                      key="bing" 
                      component={Bing} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                    <Scene 
                      title='设置'
                      key="set" 
                      component={Set} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                    <Scene 
                      title='帮助反馈'
                      key="hand" 
                      component={Hand} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#fff'}}
                      titleStyle={{flex:1,textAlign:'center'}}
                      backButtonImage={require('./images/my-cuo.png')}
                      renderRightButton={<Text style={{marginRight:20,color:'#79be3b'}}>提交</Text>}
                    />
                    <Scene 
                      title='关于我们'
                      key="about" 
                      component={About} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                    <Scene 
                      title='积分排行榜'
                      key="rank" 
                      component={Rank} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                    <Scene 
                      title='修改密码'
                      key="alterpwd" 
                      component={Alterpwd} 
                      hideTabBar
                      navigationBarStyle={{backgroundColor:'#79be3b'}}
                      titleStyle={{flex:1,textAlign:'center',color:'white'}}
                      backButtonImage={require('./images/return.png')}
                      renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'white'}}/>}
                    />
                </Scene>
              </Tabs>
              <Scene key='test' component={Test} title='测试' titleStyle={{textAlign:'center',flex:1,color:'#ffffff'}} renderRightButton={<Icon name='ellipsis' color='#ffffff' size='lg' style={{marginRight:20}}/>} navigationBarStyle={{backgroundColor:'#79be3b',color:'#ffffff'}} navBarButtonColor='#ffffff' />
              <Scene key='learn' component={Learn} title='全部卡片' titleStyle={{textAlign:'center',flex:1,color:'#ffffff'}} renderRightButton={<Icon name='plus-square' color='#ffffff' size='lg' style={{marginRight:20}} onPress={()=>{Actions.addLearn()}}/>} navigationBarStyle={{backgroundColor:'#79be3b',color:'#ffffff'}} navBarButtonColor='#ffffff'/>
              <Scene  key='addLearn' component={AddLearn} hideNavBar title='添加卡片'/>
              <Scene  key='learnMsg' component={LearnMsg} hideNavBar title='卡片详情'/>
              <Scene  key='cardTest' component={CardTest} hideNavBar title='卡片测试'/>
              <Scene  key='updateLearn' component={UpdateLearn} hideNavBar title='编辑卡片'/>
              <Scene  key='addBox' component={AddBox} hideNavBar title='添加盒子'/>
            </Scene>
            <Scene key='light' component={Selection}/>
            <Scene  key='delCard' component={DelCard} hideNavBar title='删除卡片'/>
        </Lightbox>
        <Scene  key="login" component={Login} initial={true}/>
        <Scene key="register" component={Register}/>
        <Scene key="findpwd" component={Findpwd}/>
      </Modal>
      </Overlay>
    </Router>
  );
};

export default App;
