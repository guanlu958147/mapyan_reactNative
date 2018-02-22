import React from "react";
import {TabNavigator} from "react-navigation";
import Movies from "./movies.js";
import Studio from "./studio.js";
import MovieGrid from "./movieGrid";
import Mine from "./mine"
import { 
    StyleSheet,
    Image } from "react-native"
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
export default TabNavigator({
  Movies: {
    screen: Movies,
    navigationOptions : {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../images/icon/house.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      }
  },
  Studio: {
    screen: Studio,
    navigationOptions : {
      tabBarLabel: '影院',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icon/studios.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  MovieGrid: {
    screen: MovieGrid,
    navigationOptions : {
      tabBarLabel: '电影',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icon/movie.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions : {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icon/mine.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
}, {
  tabBarPosition: 'bottom',//标签页在下边
  animationEnabled: true,//动画效果
  tabBarOptions: {
    inactiveTintColor:"black",
    showIcon:true,
    activeTintColor: '#42bd56',
    indicatorStyle:{
      backgroundColor:"#42bd56"
    },
    style: {
      backgroundColor: '#fff',
    }
  },
  
});