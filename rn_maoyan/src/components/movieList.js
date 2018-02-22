import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import { setSpText, scaleSize } from "../utils/scale.js"
import MovieItem from "../components/movieItem.js"
import { inject, observer } from "mobx-react"

const styles = StyleSheet.create({
    center:{
        justifyContent:"space-between",
        alignItems:"center"
    },
    text:{
        fontSize:scaleSize(28)
    }
})
@inject(({movie})=>{
    return{

    }
})
@observer
export default class MovieList extends Component{
    render(){
        const { title } = this.props
        return(
        <View style={{
            height:scaleSize(480),
            paddingLeft:scaleSize(30),
            paddingBottom:scaleSize(30),
            paddingTop:scaleSize(20),
            backgroundColor:"#fff"
        }}>
            <View style={[{flexDirection:"row",marginBottom:scaleSize(25)},styles.center]}>
                <Text style={[styles.text,{fontWeight:"bold"}]}>{title}</Text>
                <View style={[{flexDirection:"row"},styles.center]}>
                    <Text style={[styles.text,{color:"#666666"}]}>全部（50）</Text>
                    <Image style={{
                        width:scaleSize(20),
                        height:scaleSize(20),
                        marginRight:scaleSize(30)
                        }} source={require("../images/icon/arrow-right.png")}/>
                </View>
            </View>
            <ScrollView
                horizontal={true}>
                <View style={{flexDirection:"row"}}>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                </View>
            </ScrollView>
        </View>
        )
    }
}