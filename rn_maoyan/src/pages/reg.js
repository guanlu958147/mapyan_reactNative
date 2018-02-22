import React, {Component} from "react"
import {inject,observer} from "mobx-react"
import { setSpText, scaleSize} from "../utils/scale.js"
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Button,
    TouchableOpacity
} from "react-native"
const styles = StyleSheet.create({
    Verification:{
       flexDirection:"row",
       width:scaleSize(240),
       justifyContent:"space-between",
       alignItems:"center",
       marginLeft:scaleSize(30)
    },
    register:{
        width:"100%",
        height:scaleSize(90),
        marginTop:scaleSize(20),
        marginBottom:scaleSize(20),
        backgroundColor:"#fff",
        justifyContent:"flex-start",
    },
    icon:{
        width:scaleSize(30),
        height:scaleSize(30),
        marginRight:scaleSize(20)
    },
    temp:{
        color:"red"
    }
})
export default class Reg extends Component {
    state ={
        isSrc:"false",
        isDisabled:true,
        isPhone:"true",
        isVerification:"false",
        isPassWord:"false"
    }
    // 设置头部信息
     static navigationOptions = ({navigation,screenProps})=>({
        // title:navigation.state.params.title,
        title:"注册"
    });
    setState(text){//input输入款
        console.log(text)
    }
    _onPressButton(){
        console.log("_on")
    }
    login(){
        this.props.navigation.navigate("Login")
    }
    render() {
        return ( 
            <View>
                <View style={{
                    paddingLeft:scaleSize(40),
                    height:scaleSize(90),
                    backgroundColor:"#db403b",
                    flexDirection:"row",
                    alignItems:"center"
                }}>
                    <TouchableOpacity onPress={this.login.bind(this)} activeOpacity={.8}>
                        <Image style={{
                            width:scaleSize(40),
                            height:scaleSize(40),
                            marginRight:"40%"
                        }} source={require("../images/icon/arrow_left.png")}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:setSpText(36),color:"#fff"}}>注册</Text>
                </View>
                <View style={{
                    height:scaleSize(90),
                    width:"100%",
                    flexDirection:"row",
                    backgroundColor:"#fff"}}>
                    <View style={styles.Verification}>
                        <Text style={{
                            fontSize:setSpText(26),
                            color:this.state.isPhone?"#dc3c38":""
                            }}>1.输入手机号</Text>
                        <Image style={{
                            width:scaleSize(25),
                            height:scaleSize(25)}} source={require("../images/icon/right.png")}/>
                    </View>
                    <View style={styles.Verification}>
                        <Text style={{
                            fontSize:setSpText(26),
                            color:this.state.isVerification?"#dc3c38":""}}>2.输入验证码</Text>
                        <Image style={{
                            width:scaleSize(25),
                            height:scaleSize(25)}} source={require("../images/icon/right.png")}/>
                    </View>
                    <View style={styles.Verification}>
                        <Text style={{fontSize:setSpText(26)}}>3.设置密码</Text>
                        <Image style={{
                            width:scaleSize(25),
                            height:scaleSize(25)}} source={require("../images/icon/right.png")}/>
                    </View>
                </View> 
                <View style={styles.register}>
                    <TextInput
                            placeholder="请输入您的手机号"
                            placeholderTextColor="#c7c7cd"
                            underlineColorAndroid="transparent"
                            style={{
                                height:scaleSize(90),
                                width:scaleSize(400), 
                                fontSize:setSpText(26),
                                paddingLeft:scaleSize(20)
                                }}
                            onChangeText={(text) => this.setState(text)}
                        />
                </View>
                <View style={{
                    paddingLeft:scaleSize(20),
                    paddingRight:scaleSize(20)}}>
                        <Button
                            onPress={()=>{
                                console.log("in")

                                // TODO
                            }}
                            title="获取验证码"
                            accessibilityLabel="获取验证码"
                            color="#db403b"
                        />
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"flex-start",
                        alignItems:"center",
                        marginTop:scaleSize(15)}}>
                        <TouchableOpacity activeOpacity={.8}  onPress={()=>{
                            console.log("1")

                            //TODO
                        }}>
                            <Image
                                style={styles.icon}
                                source={require('../images/icon/agreen.png')}
                            />
                        </TouchableOpacity>
                        <Text>我已同意并阅读
                            <Text style={{color:"#db403b"}}>《猫眼电影用户协议》</Text>
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
