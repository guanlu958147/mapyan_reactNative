import { AppRegistry,View } from 'react-native';
import React from "react";
import { Provider } from "mobx-react";
import MovieStore from "./src/store/store.js"
import App from './src/app.js';
const {Fragment}=React
AppRegistry.registerComponent('rn_demo',()=>{
    return ()=>{
        return(
            <Provider movie={new MovieStore}>
                <App></App>
            </Provider>
        )
    }
});

