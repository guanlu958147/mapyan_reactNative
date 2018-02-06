import React from "react";
import { StackNavigator,TabNavigator } from "react-navigation";
// import Hello from "./pages/hello.js";
// import Movies from "./pages/movie.js";
// import MovieGrid from "./pages/movieGrid.js"
// import MovieList from "./components/movieList.js"
// import Info from "./pages/info"
// import Details from "./pages/details"
export default StackNavigator({
    // Info:{
    //     screen:Info,
    //     navigationOptions:{
    //         header:null
    //     }
    // },
    // Hello:{
    //     screen:Hello,
    //     navigationOptions:{
    //         header:null
    //     }
    // },
    // Movies:{
    //     screen:Movies,
    //     navigationOptions:{
    //         header:null
    //     }
    // },
    // MovieGrid:{
    //     screen:MovieGrid,
    // },
    // Details:{
    //     screen:Details,
    // }
},{
    navigationOptions:{
        headerTintColor:"white",
        headerStyle:{
            backgroundColor:"#42BD56",
        }
    },
})

