import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import {setSpText,scaleSize} from "../utils/scale.js"
const styles = StyleSheet.create({
    container:{
        width:scaleSize(195),
        height:scaleSize(90),
        justifyContent:"center",
        alignItems:"center",
        borderRightWidth:1,
        borderColor:"#e4e4e4"
    },
    containerTwo:{
        width:scaleSize(195),
        height:scaleSize(90),
        justifyContent:"center",
        alignItems:"center",
    },
    icon_size:{
        width:scaleSize(50),
        height:scaleSize(40)
    },
    mine:{
        height:scaleSize(90),
        backgroundColor:"#fff",
        flexDirection:"row",
        paddingLeft:scaleSize(30),
        paddingRight:scaleSize(30),
        justifyContent:"space-between",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#e4e4e4"
    },
    mineTwo:{
        height:scaleSize(90),
        flexDirection:"row",
        marginLeft:scaleSize(30),
        paddingRight:scaleSize(30),
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomWidth:1,
        borderColor:"#e4e4e4"
    }
})

export default class Mine extends Component{
    render(){
        return(
            <ScrollView>
            <View>
                <View style={{
                    height:scaleSize(210),
                    backgroundColor:"#dd403b",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between",
                    paddingLeft:scaleSize(30),
                    paddingRight:scaleSize(30)
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center"
                    }}>
                        <Image style={{
                            width:scaleSize(133),
                            height:scaleSize(133)
                        }} source={require("../images/icon/black_cat.png")}/>
                        <Text style={{
                            color:"#fff",
                            fontSize:setSpText(34),
                            paddingLeft:scaleSize(30)
                        }}>立即登录</Text>
                    </View>
                    <Image style={{
                            width:scaleSize(27),
                            height:scaleSize(27)
                        }} source={require("../images/icon/arrow_fff.png")}/>
                </View>
                <View style={{
                        justifyContent:"space-between",
                        flexDirection:"row",
                        height:scaleSize(140),
                        backgroundColor:"#fff",
                        alignItems:"center",
                        marginBottom:scaleSize(30)
                    }}>
                        <View style={styles.container}>
                            <Image style={styles.icon_size} source={require("../images/icon/love.png")}/>
                            <Text style={{
                                fontSize:setSpText(20)
                            }}>想看</Text>
                        </View>
                        <View style={styles.container}>
                            <Image style={styles.icon_size} source={require("../images/icon/look.png")}/>
                            <Text style={{
                                fontSize:setSpText(20)
                            }}>看过</Text>
                        </View>
                        <View style={styles.container}>
                            <Image style={styles.icon_size} source={require("../images/icon/comment.png")}/>
                            <Text style={{
                                fontSize:setSpText(20)
                            }}>影评</Text>
                        </View>
                        <View style={styles.container}>
                            <Image style={styles.icon_size} source={require("../images/icon/say.png")}/>
                            <Text style={{
                                fontSize:setSpText(20)
                            }}>话题</Text>
                        </View>
                    </View>
                    <View style={styles.mine}>
                        <Text>我的订单</Text>
                        <View style={{
                            flexDirection:"row",
                            alignItems:"center"
                        }}>
                            <Text style={{
                                color:"#999"
                            }}>全部</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                    </View>
                    <View style={{
                        justifyContent:"space-between",
                        flexDirection:"row",
                        height:scaleSize(140),
                        backgroundColor:"#fff",
                        alignItems:"center",
                        marginBottom:scaleSize(30)
                    }}>
                        <View style={styles.containerTwo}>
                            <Image style={styles.icon_size} source={require("../images/icon/notSpending.png")}/>
                            <Text style={{
                                fontSize:setSpText(20)
                            }}>未付款</Text>
                        </View>
                        <View style={styles.containerTwo}>
                            <Image style={styles.icon_size} source={require("../images/icon/obligation.png")}/>
                            <Text style={{
                                fontSize:setSpText(20)
                            }}>待付款</Text>
                        </View>
                        <View style={styles.containerTwo}>
                            <Image style={styles.icon_size} source={require("../images/icon/notComment.png")}/>
                            <Text style={{
                                fontSize:setSpText(20)
                            }}>待评论</Text>
                        </View>
                        <View style={styles.containerTwo}>
                            <Image style={styles.icon_size} source={require("../images/icon/refund.png")}/>
                            <Text style={{
                                fontSize:setSpText(20)
                            }}>退款</Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor:"#fff",
                        marginBottom:scaleSize(30)
                    }}>
                        <View style={styles.mineTwo}>
                            <Text>我的消息</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                        <View style={styles.mineTwo}>
                            <Text>我的收藏</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                        <View style={styles.mineTwo}>
                            <Text>会员中心</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                        <View style={styles.mineTwo}>
                            <Text>我的成就</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor:"#fff",
                        marginBottom:scaleSize(30)
                    }}>
                        <View style={styles.mineTwo}>
                            <Text>我的钱包</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                        <View style={styles.mineTwo}>
                            <Text>余额</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                        <View style={styles.mineTwo}>
                            <Text>优惠卷</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                        <View style={styles.mineTwo}>
                            <Text>影院会员卡</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                        <View style={styles.mineTwo}>
                            <Text>商城</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                        <View style={styles.mineTwo}>
                            <Text>设置</Text>
                            <Image source={require("../images/icon/arrow_right_.png")}/>
                        </View>
                    </View>
            </View>
        </ScrollView>
        )
    }
}