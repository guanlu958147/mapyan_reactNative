import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Button
} from 'react-native';
import { setSpText, scaleSize } from "../utils/scale.js"
import { inject, observer } from "mobx-react"
const styles = StyleSheet.create({
    container:{
        paddingLeft:scaleSize(40),
        paddingRight:scaleSize(40),
        height:scaleSize(90),
        backgroundColor:"#fff",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    center:{
        flexDirection:"row",
        alignItems:"center",
        width:scaleSize(185),
        justifyContent:"center",
    },
    nav:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingTop:scaleSize(20),
        paddingBottom:scaleSize(20),
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:"#e4e4e4"
    },
    btn:{
        borderWidth:2,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        borderRadius:5,
        paddingLeft:scaleSize(10),
        marginRight:scaleSize(10),
        borderColor:"#71acbb",
        fontSize:setSpText(22)
    }
})

export default class Studio extends Component{
    render(){
        return(
            <View style={{backgroundColor:"#fff"}}>
                
                    <View style={styles.container}>
                        <View style={{
                            flexDirection:"row"
                        }}>
                            <Text>成都</Text>
                            <Image source={require("../images/icon/arrow_bottom.png")}/>
                        </View>
                        <Text style={{fontSize:setSpText(36),fontWeight:"bold"}}>影院</Text>
                        <TouchableOpacity  activeOpacity={.8}>
                            <Image style={{
                                width:scaleSize(38),
                                height:scaleSize(38)
                            }} source={require("../images/icon/source_red.png")}/>
                        </TouchableOpacity>
                    </View>
                    <Image style={{
                        width:"100%",
                        height:scaleSize(180)
                    }} source={require("../images/movies/p2358700489海伦娜之路.jpg")}/>
                    <View style={styles.nav}>
                        <View style={[styles.center,{borderRightWidth:1}]}>
                            <Text>全城</Text>
                            <Image source={require("../images/icon/drop_drow.png")}/>
                        </View>
                        <View style={[styles.center,{borderRightWidth:1}]}>
                            <Text>品牌</Text>
                            <Image source={require("../images/icon/drop_drow.png")}/>
                        </View>
                        <View style={[styles.center,{borderRightWidth:1}]}>
                            <Text>离我最近</Text>
                            <Image source={require("../images/icon/drop_drow.png")}/>
                        </View>
                        <View style={styles.center}>
                            <Text>特色</Text>
                            <Image source={require("../images/icon/drop_drow.png")}/>
                        </View>
                    </View>
                 <ScrollView>
                    <View style={{
                        height:scaleSize(270),
                        marginRight:scaleSize(40),
                        borderBottomWidth:1,
                        borderColor:"#e4e4e4"
                    }}>
                        <Image style={{
                            position:"absolute",
                            top:0,
                            left:0,
                            width:scaleSize(60),
                            height:scaleSize(60)
                        }} source={require("../images/icon/discounts.png")}/>
                        <View style={{
                            marginTop:scaleSize(20),
                            marginLeft:scaleSize(40),
                            marginRight:scaleSize(40),
                        }}>
                            <View style={{flexDirection:"row",alignItems:"flex-end"}}>
                                <Text style={{fontSize:setSpText(28),fontWeight:"bold"}}>中影星美国际影城（百伦广场）</Text>
                                <Text style={{fontSize:setSpText(22),color:"#dd4034"}}>19.9</Text>
                                <Text style={{fontSize:setSpText(22),color:"#b2b2b2"}}>元起</Text>
                            </View>
                            <Text style={{
                                marginBottom:scaleSize(10),
                                marginTop:scaleSize(10),
                                fontSize:setSpText(24)
                            }}>地址</Text>
                            <View style={{flexDirection:"row"}}>
                                <Text style={styles.btn}>退</Text>
                                <Text style={styles.btn}>改签</Text>
                                <Text style={styles.btn}>小吃</Text>
                                <Text style={styles.btn}>折扣</Text>
                                <Text style={styles.btn}>杜比全景声厅</Text>
                                <Text style={styles.btn}>4D厅</Text>
                                <Text style={styles.btn}>4K厅</Text>
                            </View>
                            <View style={{
                                flexDirection:"row",
                                marginTop:scaleSize(10),
                                marginBottom:scaleSize(10)}}>
                                <Text style={[styles.btn,{
                                    backgroundColor:"#ff9900",
                                    borderColor:"#fff"
                                }]}>惠</Text>
                                <Text>西游记女儿国</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingBottom:scaleSize(20)}}>
                                <Text style={[styles.btn,{
                                    backgroundColor:"#6fc1f5",
                                    borderColor:"#fff"
                                }]}>卡</Text>
                                <Text>开卡特惠，首单两张立减12元</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        height:scaleSize(270),
                        marginRight:scaleSize(40),
                        borderBottomWidth:1,
                        borderColor:"#e4e4e4"
                    }}>
                        <Image style={{
                            position:"absolute",
                            top:0,
                            left:0,
                            width:scaleSize(60),
                            height:scaleSize(60)
                        }} source={require("../images/icon/discounts.png")}/>
                        <View style={{
                            marginTop:scaleSize(20),
                            marginLeft:scaleSize(40),
                            marginRight:scaleSize(40),
                        }}>
                            <View style={{flexDirection:"row",alignItems:"flex-end"}}>
                                <Text style={{fontSize:setSpText(28),fontWeight:"bold"}}>中影星美国际影城（百伦广场）</Text>
                                <Text style={{fontSize:setSpText(22),color:"#dd4034"}}>19.9</Text>
                                <Text style={{fontSize:setSpText(22),color:"#b2b2b2"}}>元起</Text>
                            </View>
                            <Text style={{
                                marginBottom:scaleSize(10),
                                marginTop:scaleSize(10),
                                fontSize:setSpText(24)
                            }}>地址</Text>
                            <View style={{flexDirection:"row"}}>
                                <Text style={styles.btn}>退</Text>
                                <Text style={styles.btn}>改签</Text>
                                <Text style={styles.btn}>小吃</Text>
                                <Text style={styles.btn}>折扣</Text>
                                <Text style={styles.btn}>杜比全景声厅</Text>
                                <Text style={styles.btn}>4D厅</Text>
                                <Text style={styles.btn}>4K厅</Text>
                            </View>
                            <View style={{
                                flexDirection:"row",
                                marginTop:scaleSize(10),
                                marginBottom:scaleSize(10)}}>
                                <Text style={[styles.btn,{
                                    backgroundColor:"#ff9900",
                                    borderColor:"#fff"
                                }]}>惠</Text>
                                <Text>西游记女儿国</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingBottom:scaleSize(20)}}>
                                <Text style={[styles.btn,{
                                    backgroundColor:"#6fc1f5",
                                    borderColor:"#fff"
                                }]}>卡</Text>
                                <Text>开卡特惠，首单两张立减12元</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        height:scaleSize(270),
                        marginRight:scaleSize(40),
                        borderBottomWidth:1,
                        borderColor:"#e4e4e4"
                    }}>
                        <Image style={{
                            position:"absolute",
                            top:0,
                            left:0,
                            width:scaleSize(60),
                            height:scaleSize(60)
                        }} source={require("../images/icon/discounts.png")}/>
                        <View style={{
                            marginTop:scaleSize(20),
                            marginLeft:scaleSize(40),
                            marginRight:scaleSize(40),
                        }}>
                            <View style={{flexDirection:"row",alignItems:"flex-end"}}>
                                <Text style={{fontSize:setSpText(28),fontWeight:"bold"}}>中影星美国际影城（百伦广场）</Text>
                                <Text style={{fontSize:setSpText(22),color:"#dd4034"}}>19.9</Text>
                                <Text style={{fontSize:setSpText(22),color:"#b2b2b2"}}>元起</Text>
                            </View>
                            <Text style={{
                                marginBottom:scaleSize(10),
                                marginTop:scaleSize(10),
                                fontSize:setSpText(24)
                            }}>地址</Text>
                            <View style={{flexDirection:"row"}}>
                                <Text style={styles.btn}>退</Text>
                                <Text style={styles.btn}>改签</Text>
                                <Text style={styles.btn}>小吃</Text>
                                <Text style={styles.btn}>折扣</Text>
                                <Text style={styles.btn}>杜比全景声厅</Text>
                                <Text style={styles.btn}>4D厅</Text>
                                <Text style={styles.btn}>4K厅</Text>
                            </View>
                            <View style={{
                                flexDirection:"row",
                                marginTop:scaleSize(10),
                                marginBottom:scaleSize(10)}}>
                                <Text style={[styles.btn,{
                                    backgroundColor:"#ff9900",
                                    borderColor:"#fff"
                                }]}>惠</Text>
                                <Text>西游记女儿国</Text>
                            </View>
                            <View style={{flexDirection:"row",paddingBottom:scaleSize(20)}}>
                                <Text style={[styles.btn,{
                                    backgroundColor:"#6fc1f5",
                                    borderColor:"#fff"
                                }]}>卡</Text>
                                <Text>开卡特惠，首单两张立减12元</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        marginLeft:scaleSize(30),
                        marginBottom:scaleSize(30),
                    }}>
                        <View style={{
                            height:scaleSize(60),
                            backgroundColor:"#eee",
                            borderRadius:5,
                            flexDirection:"row",
                            alignItems:"center"
                        }}>
                            <Image style={{
                                width:scaleSize(30),
                                height:scaleSize(30),
                                marginLeft:scaleSize(15),
                                marginRight:scaleSize(15)}} source={require("../images/icon/navigation.png")}/>
                            <Text style={{
                            paddingLeft:scaleSize(30),
                            color:"#969696"
                            }}>牛王庙</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}