import React from "react";
import { StackNavigator,TabNavigator } from "react-navigation";
import Info from "./pages/info"
import Reg from "./pages/reg"
import Login from "./pages/login"
import Movies from "./pages/movies"
import Details from "./pages/details"
import Studio from "./pages/studio"
import MovieGrid from "./pages/movieGrid"
import Theater from "./pages/theater"
import Mine from "./pages/mine"
import Seat from "./pages/seat"
export default StackNavigator({
    Seat:{
        screen:Seat,
        navigationOptions:{
            header:null
        }
    },
    Info:{
        screen:Info,
        navigationOptions:{
            header:null
        }
    },
    Mine:{
        screen:Mine,
        navigationOptions:{
            header:null
        }
    },
    Theater:{
        screen:Theater,
        navigationOptions:{
            header:null
        }
    },
    MovieGrid:{
        screen:MovieGrid,
        navigationOptions:{
            header:null
        }
    },
    Studio:{
        screen:Studio,
        navigationOptions:{
            header:null
        }
    },
    Login:{
        screen:Login,
        navigationOptions:{
            header:null
        }
    },
    Reg:{
        screen:Reg,
        navigationOptions:{
            header:null
        }
    },
    Movies:{
        screen:Movies,
        navigationOptions:{
            header:null
        }
    },
    Details:{
        screen:Details,
        navigationOptions:{
            header:null
        }
    },
   
}
,{
    navigationOptions:{
        headerTintColor:"white",
        // headerStyle:{
        //     backgroundColor:"#db403b",
        // }
    },
}
)

