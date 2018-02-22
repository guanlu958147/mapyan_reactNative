import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { setSpText, scaleSize } from "../utils/scale.js"
import MovieList from "../components/movieList.js"
import { inject, observer } from "mobx-react"

export default class Stars extends Component{
    state={
        stars:"35"
    }
    renderStars(stars){
        const total = 5
		const starsArr = []
		const full = ~~stars[0]
        const half = ~~stars[1]
		for (let i = 0; i < full; i++) {
			starsArr.push(1)
		}
		if (half) {
			starsArr.push(5)
		}
		for (let i = starsArr.length; i < 5; i++) {
			starsArr.push(0)
        }
		return starsArr
    }
    render(){
        
        return(
            <View style={{
                flexDirection:"row",
                alignItems:"center"
            }}>
                {
                    this.renderStars(this.state.stars).map((item,index)=>{
                        let src = "";
                        if(item==0){
                            src=require("../images/icon/star_0.png")
                        }else if(item ==1){
                            src =require("../images/icon/star_1.png")
                        }else{
                            src = require("../images/icon/star_5.png")
                        }
                        return <Image style={{
                            width:scaleSize(16),
                            height:scaleSize(16)
                        }} source={src} key={index}/>
                    })
                }
                <Text>7.8</Text>
            </View>
        )
    }
}