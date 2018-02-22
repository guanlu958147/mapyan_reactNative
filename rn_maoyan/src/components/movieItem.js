import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import { setSpText, scaleSize } from "../utils/scale.js"
import Stars from "../components/stars.js"
import { inject, observer } from "mobx-react"

export default class MovieItem extends Component{
    render(){
        return(
            
            <View style={{marginRight:scaleSize(20)}}>
                <Image style={{
                    width:scaleSize(200),
                    height:scaleSize(270),
                }} source={require("../images/movies/p2333752018隧道尽头.jpg")}/>
                <Text style={{
                    fontSize:setSpText(28),
                    fontWeight:"bold",
                    marginTop:scaleSize(10),
                    marginBottom:scaleSize(10)}}>隧道尽头</Text>
                <Stars/>
            </View>
            
        )
    }
}