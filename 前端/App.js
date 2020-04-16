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
import My from './src/my/My';
import Login from './src/common/Login';
import Register from './src/common/Register';
import Personal from './src/my/Personal';
import Signin from './src/my/Signin';
import Xian from './src/my/Xian';
import Bing from './src/my/Bing';
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
                </Scene>
              </Tabs>
            </Scene>
        </Lightbox>
        <Scene  key="login" component={Login} initial={true}/>
        <Scene key="register" component={Register}/>
      </Modal>
      </Overlay>
    </Router>
  );
};

export default App;
