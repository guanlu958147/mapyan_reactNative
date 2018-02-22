import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {setSpText,scaleSize} from "../utils/scale.js"
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
    },
    btn:{
        width:scaleSize(110),
        height:scaleSize(50),
        backgroundColor:"#f03d37",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    text:{
        color:"#7a7a7a",
        fontSize:setSpText(24)
    }
})


export default class MovieGridInfo extends Component{
    render(){
        return(
            <View style={{
                paddingLeft:scaleSize(40),
                paddingTop:scaleSize(25),
                backgroundColor:"#fff"
            }}>
                <View style={[styles.container,{alignItems:"center"}]}>
                    <Image style={{
                            width:scaleSize(135),
                            height:scaleSize(190),
                            marginRight:scaleSize(20),
                            marginBottom:scaleSize(25),
                            }} source={require("../images/movies/p2410576676太空旅客.jpg")}/>
                   <View style={[
                       styles.container,
                       {width:scaleSize(650),
                       justifyContent:"space-between",
                        paddingBottom:scaleSize(25),
                       borderBottomWidth:1,
                       borderBottomColor:"#e4e4e4"}]}>
                        <View>
                            <Text style={{
                                fontSize:setSpText(30),
                                fontWeight:"bold"
                            }}>神秘巨星</Text>
                            <View style={[
                                styles.container,
                                {marginTop:scaleSize(20),
                                marginBottom:scaleSize(20)}]}>
                                <Text style={styles.text}>猫眼评分</Text>
                                <Text style={[styles.text,{color:"#ffb401",marginLeft:scaleSize(10)}]}>9.5</Text>
                            </View>
                            <Text style={[styles.text,{
                                marginBottom:scaleSize(16)
                            }]}>主演：</Text>
                            <Text style={styles.text}>今天158家影院放映1275场</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.btn}>
                                <Text style={{
                                    color:"#fff",
                                    fontSize:setSpText(24)}}>购买</Text>
                            </View>
                        </TouchableOpacity>
                   </View>
                </View>
            </View>
        )
    }
}