import {StyleSheet} from "react-native";

export const colors= {
    darkBg: "#222",
    lightBg:"#333",
    darkHl:"#666",
    lightHl:"#888",
    pink:"#ea3372",
    text:"#fff",
    textSec:"#aaa",

}

export const gs =StyleSheet.create({
    rowBetween:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    sectionContainer:{
        paddingVertical:24,
        paddingHorizontal:32,
        marginBottom:8,
        backgroundColor:colors.lightBg,
    },
    rowCenter:{
        flexDirection:"row",
        alignItems:"center"
    },
    sectionContainer:{
        
    }
 
})