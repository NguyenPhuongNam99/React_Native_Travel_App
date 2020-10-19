

import React from "react";
import {Icon} from 'react-native-vector-icons/dist/FontAwesome';
import { colors} from "./styles";
// import HotelView from "./screens/HotelView";
 import Header from "./screens/HotelView/components/Header";
import Bookmark from "./screens/HotelView/components/Bookmark";
import About from "./screens/HotelView/components/About";
import Stats from "./screens/HotelView/components/Stats";
import Amenities from "./screens/HotelView/components/Amenities";
import Extra from "./screens/HotelView/components/Extra";
 import Food from "./screens/Food/component/Food";
// import List from "./screens/Food/component/List";
// import Home from "./screens/TravelArround/Home";
// import KhamPha from "./Components/KhamPha";
import RouterMh from "./screens/HotelView/components/HaLongBay";

import Maintrip from "./screens/Food/component/Maintrip"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import HaLongBay from './screens/HotelView/components/HaLongBay';

export default function App() {
  return (
    <ScrollView style={styles.scrollview}>
    <View style ={styles.container}>
        <StatusBar barStyle="light-content"/>
        {/* <Header></Header>
        <View>
            <Bookmark></Bookmark>
            <About></About>
            <Stats></Stats>
            <Amenities></Amenities>
            <Extra></Extra>
        </View>  */}
        {/* <Index/> */}
        {/* <HotelView/>


         
        {/* <List></List> */}
        {/* <Home/> */}
        {/* <KhamPha/> */}
        {/* <Maintrip/> */}
        {/* <Food/>  */}
        <HaLongBay/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    
  }  ,
  scrollview:{
   
  }
  
});


