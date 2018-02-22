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
    btn_icon:{
        paddingLeft:scaleSize(5),
        paddingRight:scaleSize(5),
        paddingTop:scaleSize(5),
        paddingBottom:scaleSize(5),
        borderWidth:1,
        borderColor:"#87b6c4",
        marginRight:scaleSize(10),
        borderRadius:5
    },
    eat:{
        marginTop:scaleSize(25),
        marginBottom:scaleSize(25),
        borderWidth:1,
        borderColor:"#fa5d3e",
        height:scaleSize(90),
        backgroundColor:"#ffebeb",
        borderRadius:scaleSize(10),
        paddingLeft:scaleSize(20),
        paddingRight:scaleSize(20),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    image:{
        width:scaleSize(160),
        height:scaleSize(220),
        marginRight:scaleSize(36)
    },
    triangle:{
        width:scaleSize(33),
        height:scaleSize(15),
        marginTop:scaleSize(16)
    },
    text:{
        fontSize:scaleSize(24),
        borderRightWidth:1,
        paddingRight:scaleSize(10),
        borderColor:"#e4e4e4",
        marginRight:scaleSize(10)
    },
    time:{
        height:scaleSize(90),
        lineHeight:scaleSize(90),
        marginRight:scaleSize(20)
    },
    time_state:{
        borderBottomWidth:3,
        borderBottomColor:"red"
    }
})


export default class Theater extends Component{
    render(){
        return(
            <View style={{backgroundColor:"#fff"}}>
                <View style={[
                    styles.container,
                    {borderBottomWidth:1,
                    borderBottomColor:"#e4e4e4"}]}>
                    <Image style={{
                            width:scaleSize(38),
                            height:scaleSize(38)
                        }} source={require("../images/icon/left_red.png")}/>
                    <Text style={{fontSize:setSpText(36),fontWeight:"bold"}}>UA国际影城</Text>
                    <TouchableOpacity  activeOpacity={.8}>
                        <Image style={{
                            width:scaleSize(38),
                            height:scaleSize(38)
                        }} source={require("../images/icon/stars_red.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    paddingLeft:scaleSize(25),
                    paddingRight:scaleSize(25),
                    paddingTop:scaleSize(30)
                }}>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }}>
                        <View>
                            <Text style={{
                                fontSize:setSpText(30),
                                fontWeight:"bold"
                            }}>UA国际影城</Text>
                            <View style={{
                                flexDirection:"row",
                                alignItems:"center",
                                marginTop:scaleSize(20),
                                marginBottom:scaleSize(20),
                                borderRightWidth:1,
                                borderRightColor:"#e4e4e4"
                            }}>
                                <Text>地址：</Text>
                                <Image source={require("../images/icon/arrow_right_.png")}/>
                            </View>
                            <View style={{
                                flexDirection:"row"
                            }}>
                                <View style={styles.btn_icon}>
                                    <Text style={{color:"#87b6c4"}}>改签</Text>
                                </View>
                                <View style={styles.btn_icon}>
                                    <Text style={{color:"#87b6c4"}}>IMXA厅</Text>
                                </View>
                                <View style={styles.btn_icon}>
                                    <Text style={{color:"#87b6c4"}}>3D眼镜收费</Text>
                                </View>
                                <View style={styles.btn_icon}>
                                    <Text style={{color:"#87b6c4"}}>儿童优惠</Text>
                                </View>
                                <View style={styles.btn_icon}>
                                    <Text style={{color:"#87b6c4"}}>可停车</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image source={require("../images/icon/map.png")}/>
                            <Text>地图</Text>
                        </View>
                    </View>
                    <View style={styles.eat}>
                        <View style={{
                            justifyContent:"center",
                        }}>
                            <Text style={{
                                fontSize:setSpText(26),
                                color:"#fa5d3e"
                            }}>观影套餐</Text>
                            <Text style={{
                                fontSize:setSpText(18),
                                color:"#fa5d3e"
                            }}>小吃、周边27.7元起</Text>
                        </View>
                        <Image style={{
                            width:scaleSize(60),
                            height:scaleSize(60)
                        }} source={require("../images/icon/popcorn.png")}/>
                    </View>
                </View>
                <View style={{
                    paddingLeft:scaleSize(20),
                    paddingTop:scaleSize(20),
                    backgroundColor:"#543741",
                    height:scaleSize(300)
                }}>
                    <Image style={{
                        width:scaleSize(30),
                        height:scaleSize(27)
                    }} source={require("../images/icon/list.png")}/>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{alignItems:"center"}}>
                                <Image style={styles.image} source={require("../images/movies/p2333752018隧道尽头.jpg")}/>
                                <Image style={styles.triangle} source={require("../images/icon/trangle-up.png")}/>
                                
                            </View>
                            <View style={{alignItems:"center"}}>
                                <Image style={styles.image} source={require("../images/movies/p2333752018隧道尽头.jpg")}/>
                                <Image style={styles.triangle} source={require("../images/icon/trangle-up.png")}/>
                            </View>
                            <View style={{alignItems:"center"}}>
                                <Image style={styles.image} source={require("../images/movies/p2333752018隧道尽头.jpg")}/>
                                <Image style={styles.triangle} source={require("../images/icon/trangle-up.png")}/>
                            </View>
                            <View style={{alignItems:"center"}}>
                                <Image style={styles.image} source={require("../images/movies/p2333752018隧道尽头.jpg")}/>
                                <Image style={styles.triangle} source={require("../images/icon/trangle-up.png")}/>
                            </View>
                            <View style={{alignItems:"center"}}>
                                <Image style={styles.image} source={require("../images/movies/p2333752018隧道尽头.jpg")}/>
                                <Image style={styles.triangle} source={require("../images/icon/trangle-up.png")}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{
                    width:"100%",
                    height:scaleSize(125),
                    justifyContent:"center",
                    alignItems:"center",
                    borderBottomWidth:1,
                    borderColor:"#e4e4e4"
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center"
                    }}>
                        <Text style={{
                            fontSize:scaleSize(30),
                            fontWeight:"bold"
                        }}>神秘巨星</Text>
                        <Text style={{
                            fontSize:scaleSize(24),
                            color:"#ffcb00"
                        }}>9.5分</Text>
                    </View>
                    <View style={{
                        flexDirection:"row"
                    }}>
                        <Text style={styles.text}>150分钟</Text>
                        <Text style={styles.text}>剧情</Text>
                        <Text style={styles.text}>演员</Text>
                    </View>
                </View>
                <View style={{
                    marginLeft:scaleSize(30),
                    height:scaleSize(90),
                    flexDirection:"row",
                    borderBottomWidth:1,
                    borderColor:"#e4e4e4"
                }}>
                    <Text style={[styles.time,styles.time_state]}>今天2月9日</Text>
                    <Text style={[styles.time]}>明天2月10日</Text>
                </View>
                <View style={{
                    marginLeft:scaleSize(30),
                    paddingRight:scaleSize(25),
                    flexDirection:"row",
                    justifyContent:"space-between",
                    height:scaleSize(145),
                    alignItems:"center",
                    borderBottomWidth:1,
                    borderColor:"#e4e4e4"
                }}>
                    <View>
                        <Text>20:30</Text>
                        <Text>22:50散场</Text>
                    </View>
                    <View>
                        <Text>原版2D</Text>
                        <Text>2号厅</Text>
                    </View>
                    <Text>44元</Text>
                    <View style={{
                        borderWidth:1,
                        borderColor:"red",
                        borderRadius:10
                    }}>
                        <Text style={{
                            padding:scaleSize(10),
                            color:"red"
                        }}>停售</Text>
                    </View>
                </View>
                <View style={{
                    marginLeft:scaleSize(30),
                    paddingRight:scaleSize(25),
                    flexDirection:"row",
                    justifyContent:"space-between",
                    height:scaleSize(145),
                    alignItems:"center",
                    borderBottomWidth:1,
                    borderColor:"#e4e4e4"
                }}>
                    <View>
                        <Text>20:30</Text>
                        <Text>22:50散场</Text>
                    </View>
                    <View>
                        <Text>原版2D</Text>
                        <Text>2号厅</Text>
                    </View>
                    <Text>44元</Text>
                    <View style={{
                        borderWidth:1,
                        borderColor:"red",
                        borderRadius:10
                    }}>
                        <Text style={{
                            padding:scaleSize(10),
                            color:"red"
                        }}>购买</Text>
                    </View>
                </View>
            </View>
        )
    }
}