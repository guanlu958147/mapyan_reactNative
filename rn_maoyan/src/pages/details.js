import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { setSpText, scaleSize } from "../utils/scale.js"
import MovieList from "../components/movieList.js"
import { inject, observer } from "mobx-react"

export default class Details extends Component{
    render(){
        return(
            <View>
                <Text>Details</Text>
            </View>
        )
    }
}