import React from "react";
import About from "./About";
import Header from "./Header";
import Amenities from "./Amenities";
import Bookmark from "./Bookmark";
import Extra from "./Extra";
import Stats from "./Stats";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
  } from "react-native";
const HaLongBay = () => {
    return(
        <ScrollView style ={styles.container}>
               
            <StatusBar barStyle="light-content"/>
            <Header></Header>
            <View>
                <Bookmark></Bookmark>
                <About></About>
                <Stats></Stats>
                <Amenities></Amenities>
                <Extra></Extra>
            </View>  
        </ScrollView>
    );
}
const styles = StyleSheet.create({

});
export default HaLongBay;
