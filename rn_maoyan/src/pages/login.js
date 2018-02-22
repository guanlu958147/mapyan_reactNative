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

const styles= StyleSheet.create({
    container:{
        paddingLeft:scaleSize(40),
        paddingRight:scaleSize(40),
        height:scaleSize(90),
        backgroundColor:"#db403b",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    login:{
        width:"100%",
        height:scaleSize(100),
        // justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        paddingTop:scaleSize(22),
    },
    login_text:{
        width:"50%",
        height:scaleSize(100),
        alignItems:"center",
        justifyContent:"center",
    },
    login_btn:{
        marginLeft:scaleSize(20),
        marginRight:scaleSize(20),
        marginTop:scaleSize(40),
        marginBottom:scaleSize(30)
    },
    text:{
        fontSize:scaleSize(28)
    },
    rests:{
        marginLeft:scaleSize(55),
        marginRight:scaleSize(55),
        borderTopWidth:1,
        height:scaleSize(265),
        marginTop:scaleSize(470),
        borderTopWidth:1,
        borderTopColor:"#e4e4e4",
        justifyContent:"center",
        alignItems:"center"
    },
    center:{
        justifyContent:"center",
        alignItems:"center"
    }
})
export default class Login extends Component{
    setState(text){
        // TODO
    }
    onPressLearnMore(){
        //TODO
        this.props.navigation.navigate("Info")
    }
    register(){
        this.props.navigation.navigate("Reg")
    }
    render(){
        return(
            <View style={{backgroundColor:"#fff"}}>
                <View style={styles.container}>
                    <Image style={{
                        width:scaleSize(40),
                        height:scaleSize(40),
                    }} source={require("../images/icon/bad.png")}/>
                    <Text style={{fontSize:setSpText(36),color:"#fff"}}>登录</Text>
                    <TouchableOpacity onPress={this.register.bind(this)} activeOpacity={.8}>
                        <Text style={{fontSize:setSpText(36),color:"#fff"}}>注册</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.login}>
                        <View style={[styles.login_text,{borderBottomColor:"#db403b",borderBottomWidth:5}]}>
                            <Text style={[{color:"#db403b"},styles.text]}>帐号密码登录</Text>
                        </View>
                        <View style={styles.login_text}>
                            <Text style={styles.text}>手机号快捷登录</Text>
                        </View>
                    </View>
                    <View style={{borderTopWidth: 1,borderBottomWidth: 1,borderColor:"#e4e4e4"}}>
                        <View style={{
                            height:scaleSize(80), 
                            marginLeft:scaleSize(20), 
                            borderBottomWidth: 1,
                            borderColor:"#e4e4e4",
                            flexDirection:"row",
                            alignItems:"center"}}>
                            <Text style={{fontSize:setSpText(28),fontWeight:"bold"}}>账号</Text>
                            <TextInput
                                    underlineColorAndroid="transparent"
                                    placeholder="请输入手机号"
                                    placeholderTextColor="#e4e4e4"
                                    style={{height:scaleSize(80),width:"100%"}}
                                    onChangeText={(text) => this.setState(text)}
                            />
                        </View>
                        <View style={{
                            height:scaleSize(80), 
                            marginLeft:scaleSize(20), 
                            flexDirection:"row",
                            alignItems:"center"}}>
                            <Text>密码</Text>
                            <TextInput
                                    underlineColorAndroid="transparent"
                                    placeholder="请输入密码"
                                    placeholderTextColor="#e4e4e4"
                                    style={{height:scaleSize(80),width:"80%"}}
                                    onChangeText={(text) => this.setState(text)}
                            />
                            <Image source={require("../images/icon/eye.png")}/>
                        </View>
                    </View>
                    <View style={styles.login_btn}>
                        <Button
                            onPress={this.onPressLearnMore.bind(this)}
                            title="登录"
                            color="#db403b"
                            accessibilityLabel="请登录"
                            />
                    </View>
                    <View style={{
                        alignItems:"center",
                        width:"100%",
                    }}>
                        <Text style={{
                            fontSize:scaleSize(24),
                            }}>遇到问题？</Text>                        
                    </View>
                    <View style={styles.rests}>
                        <View style={{
                            width:scaleSize(350),
                            height:scaleSize(200),
                            marginTop:scaleSize(65),
                            }}>
                            <View style={styles.center}>
                                <Text>其他方式登录</Text>
                            </View>
                            <View style={{
                                justifyContent:"space-between",
                                flexDirection:"row",
                                marginTop:scaleSize(20)
                            }}>
                                <View style={styles.center} >
                                    <Image style={{
                                        width:scaleSize(90),
                                        height:scaleSize(90),
                                    }} source={require("../images/icon/weixin_logo.png")}/>
                                    <Text>微信</Text>
                                </View>
                                <View style={styles.center}>
                                    <Image style={{
                                        width:scaleSize(90),
                                        height:scaleSize(90),
                                    }} source={require("../images/icon/weibo_logo.png")}/>
                                    <Text>微博</Text>
                                </View>
                                <View style={styles.center}>
                                    <Image style={{
                                        width:scaleSize(90),
                                        height:scaleSize(90),
                                    }} source={require("../images/icon/QQ.png")}/>
                                    <Text>QQ</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}