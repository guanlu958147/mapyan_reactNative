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
import MovieGridInfo from "../components/movieGridInfo.js"
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
    data:{
        
        height:scaleSize(90),
        lineHeight:scaleSize(90),
        fontSize:setSpText(36),
        fontWeight:"bold"
    },
    data_state:{
        borderBottomWidth:3,
        borderColor:"red"
    }
})

export default class MovieGrid extends Component{
    state = {
        statusValue:"hot",
        movie:[1,2,3,4,5,6]
    }
    render(){
        return(
            <FlatList
                horizontal={false}
                ListHeaderComponent={()=>{
                    return <View>
                        <View style={[
                            styles.container,
                            {borderBottomWidth:1,
                            borderBottomColor:"#e4e4e4"}]}>
                            <View style={{
                                flexDirection:"row"
                            }}>
                                <Text>成都</Text>
                                <Image source={require("../images/icon/arrow_bottom.png")}/>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <TouchableOpacity  activeOpacity={.8} onPress={()=>{
                                    this.state.statusValue = "hot"
                                }}>
                                    <Text style={[{
                                        marginRight:scaleSize(20)},
                                        styles.data,
                                        this.state.statusValue==="hot"?styles.data_state:""]}>正在热映</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  activeOpacity={.8} onPress={()=>{
                                    this.state.statusValue = "coming"
                                    console.log(this.state.statusValue)
                                }}>
                                    <Text style={[
                                        styles.data,
                                        this.state.statusValue==="coming"?styles.data_state:""]}>即将上映</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity  activeOpacity={.8}>
                                <Image style={{
                                    width:scaleSize(38),
                                    height:scaleSize(38)
                                }} source={require("../images/icon/source_red.png")}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width:"100%",
                            height:scaleSize(110),
                            paddingLeft:scaleSize(40),
                            paddingTop:scaleSize(40),
                            paddingRight:scaleSize(40),
                            backgroundColor:"#fff"
                        }}>
                            <View style={{
                                width:"100%",
                                height:scaleSize(80),
                                backgroundColor:"#f6f6f6",
                                flexDirection:"row",
                                justifyContent:"space-between",
                                alignItems:"center",
                                borderRadius:10
                            }}>
                                <View style={{
                                    flexDirection:"row",
                                    alignItems:"center"}}>
                                    <Image style={{
                                        width:scaleSize(27),
                                        height:scaleSize(27)
                                    }} source={require("../images/icon/boxOffice.png")}/>
                                    <Text style={{
                                        fontWeight:"bold"
                                    }}>实时票房</Text>
                                </View>
                                <View style={{
                                    flexDirection:"row",
                                    alignItems:"center"}}>
                                    <Text style={{
                                        fontWeight:"bold"
                                    }}>今日大盘点</Text>
                                    <Text style={{
                                        color:"#f03d37"
                                    }}>6666.6万</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                }}
                keyExtractor={(item,index)=>{
                    return item
                }}
                data={this.state.movie}//热映，正在上映
                renderItem={({item,index})=>{
                    return <MovieGridInfo key={index}/>
                }}
            />
        )
    }
}