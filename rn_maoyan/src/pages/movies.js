import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper'
import { setSpText, scaleSize } from "../utils/scale.js"
import MovieList from "../components/movieList.js"
import { inject, observer } from "mobx-react"
 const styles = StyleSheet.create({
    TextNavigation:{
        borderBottomWidth:3,
        borderColor:"red",
        height:scaleSize(90),
        paddingTop:scaleSize(20),
        color:"red"
    }
 })
 @inject(({movie})=>{
    return{

    }
 })
 @observer
export default class Movies extends Component{
   state = {
       items:["../images/movies/p2333752018隧道尽头.jpg","../images/movies/p2358700489海伦娜之路.jpg","../images/movies/p2360052359怪物召唤.jpg"],
       isNaveigation:1,
        hotMovies:{
         state:"hot",
         title:"正在上映",
        },
        comingMovies:{
         state:"coming",
         title:"即将上映",
        }
   }
    render(){
        return(
            <FlatList
                horizontal={false}
                ListHeaderComponent={()=>{
                    return <View>
                        <View style={{
                            width:"100%",
                            height:scaleSize(90),
                            justifyContent:"space-around",
                            alignItems:"center",
                            flexDirection:"row",
                            backgroundColor:"#fff",
                            marginBottom:scaleSize(25)
                            }}>
                            <TouchableOpacity onPress={()=>{
                                this.state.isNaveigation =1;console.log(this.state.isNaveigation)
                            }} activeOpacity={.8}>
                                <Text style={this.state.isNaveigation==1?styles.TextNavigation:""}>电影</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{
                                this.state.isNaveigation =2;
                            }} activeOpacity={.8}>
                                <Text style={this.state.isNaveigation==2?styles.TextNavigation:""}>电视剧</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{
                                this.state.isNaveigation = 3;
                            }} activeOpacity={.8}>
                                <Text style={this.state.isNaveigation==3?styles.TextNavigation:""}>综艺</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{
                                this.state.isNaveigation = 4;
                            }} activeOpacity={.8}>
                                <Text style={this.state.isNaveigation==4?styles.TextNavigation:""}>书籍</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }}
                ItemSeparatorComponent={()=>{
                    return <View style={{
                        height:scaleSize(30),
                        backgroundColor:"#f2f2f2"
                    }}></View>
                }}
                keyExtractor={(item,index)=>{
                    return item.state
                }}
                data={[this.state.hotMovies,this.state.comingMovies]}//热映，正在上映
                renderItem={({item,index})=>{
                    return <MovieList {...item} key={index} navigation={this.props.navigation}/>
                }}
            />
            





            // <ScrollView horizontal={true}>
            //     <View>
            //         <Swiper autoplay = {true} height = {100} showsPagination = {true} dotColor="white"
            //                         activeDotColor='yellow' horizontal={true}>
            //                     {
            //                         this.state.items.map((item, index) => {
            //                             console.log(item, index)
            //                             //cover: 等比例放大; center:不变; contain:不变; stretch:填充;resizeMode='cover'
            //                             return (<Image style={{height:scaleSize(100), width:scaleSize(100)}} key = {index}  source={{uri: item}}/>)
            //                         })
            //                     }
            //             </Swiper>
            //             <Text>
            //                 yyyy
            //             </Text>
            //     </View>
            // </ScrollView>
            )
    }
}