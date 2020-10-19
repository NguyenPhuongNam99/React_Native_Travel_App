import React from "react";
// import {Icon} from 'react-native-vector-icons/dist/FontAwesome';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TouchableOpacity,
  Image,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors} from "../../../styles";

const extra =[
    "Hạ Long Bay nơi thiên nhiên lý tưởng",
    "Nơi bạn sẽ được trải nghiệm những điều quý giá",
    "Nếu bạn có mong muốn đến đây hãy liên lạc với chúng tôi",
    "Book vé tại trang web này",
    "Chúng tôi rất vinh dự được phục vụ quý khách"
]

export default function Food() {
  return (
<ScrollView>
    <View style={{marginHorizontal:32,marginVertical:64}, styles.container}>
       <Image source={require("../../../assests/hagiang.jpg")} style={{width:"100%",height:380}}></Image>
        <View style={styles.iconcontainer}>
            <View style={styles.khoi}>
                <Icon name ="save"  size={30} style={styles.topbuttonright}/>
                <Text>Document</Text>
            </View >
            <View style={styles.khoi}>
                <Icon name ="apple"  size={30} style={styles.topbuttonright}/>
                <Text>8.5 rate</Text>
            </View>

            <View style={styles.khoi}>

                <Icon name ="briefcase" size={30} style={styles.topbuttonright}/>
                <Text>Lugagge</Text>
            </View>
            
        </View>

        <View style={styles.textto}>
            <Text style={styles.textnam}>Cao Nguyên Đá Vôi Đồng Văn</Text>
            <Text style={styles.textque}>Hà Giang nơi có con sông Nho Quế , có những con đèo uốn cong .
            Nếu bạn muốn trải nghiệm cảm giác mới lạ những cung bậc cảm xúc .Hãy đặt vé ngay với chúng tôi</Text>
           
        </View>
        <TouchableOpacity style={styles.filterButton}>
                <Text style={{fontWeight:"700",color:"#fff",fontSize:20}}>Book Ticket</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
            <Text style={styles.thanhphan}>Ingredients</Text>
            <View style={styles.footer_main}>
                <Text style={styles.sugar}>Brown sugar</Text>
                <Text style={styles.weight}>85 g</Text>
            </View>
        </View>

        <View style={{flexDirection:"row",paddingHorizontal:33,width:"100%",alignItems:"center",marginTop:15}}>
                        <View style={{width:"50%"}}>
                                <Text style={{fontWeight:"bold",fontSize:17,marginLeft:-15,
                                    color:"#585a61"}}>Liên Quan
                                </Text>
                                <View style={{height:4,backgroundColor:"#b1e5d3",width:115,marginTop:-5}}>

                                </View>

                        </View>

                        <View style={{width:"50%",alignItems:"flex-end"}}> 
                                <View style= {{backgroundColor:"#00a46c",paddingHorizontal:20,paddingVertical:5,borderRadius:15}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#FFF"}}>More</Text>
                                </View>

                        </View>

                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    <View 
                    style={{
                        position:"absolute",
                        left:0,
                        right:0,
                        height:100,
                        marginTop:220,
                        top:0
                    }}
                    />
                    <View style={{height:250,elevation:2,backgroundColor:"#FFF"
                    ,marginLeft:20,marginTop:20,borderRadius:15,marginBottom:10,width:200
                }}>
                        <Image style={styles.ing} source={require('../../../assests/hl3.jpg') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    Thừa Thiên Huế
                            </Text>
                            <Text style={{fontWeight:"bold",color:"#00a46c",paddingLeft:35}}>
                                    $90
                            </Text>
                        </View>
                        <Text style={{paddingHorizontal:10,fontWeight:"bold",paddingTop:3}}>
                            Việt Nam
                        </Text>
                    </View>
                    <View style={{height:250,elevation:2,backgroundColor:"#FFF"
                    ,marginLeft:30,marginTop:20,borderRadius:15,marginBottom:10,width:200,
                }}>
                        <Image style={styles.ing} source={require('../../../assests/hl2.jpg') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    Quảng Bình
                            </Text>
                            <Text style={{fontWeight:"bold",color:"#00a46c",paddingLeft:35}}>
                                    $1000
                            </Text>
                        </View>
                        <Text style={{paddingHorizontal:10,fontWeight:"bold",paddingTop:3}}>
                                Quảng Ninh
                        </Text>
                    </View>
                   
                    <View style={{height:250,elevation:2,backgroundColor:"#FFF"
                    ,marginLeft:30,marginTop:20,borderRadius:15,marginBottom:10,width:200,
                }}>
                        <Image style={styles.ing} source={require('../../../assests/hl4.jpg') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    Quốc Vương
                            </Text>
                            <Text style={{fontWeight:"bold",color:"#00a46c",paddingLeft:35}}>
                                    $100
                            </Text>
                        </View>
                        <Text style={{paddingHorizontal:10,fontWeight:"bold",paddingTop:3}}>
                            England
                        </Text>
                    </View>

                    <View style={{height:250,elevation:2,backgroundColor:"#FFF"
                    ,marginLeft:30,marginTop:20,borderRadius:15,marginBottom:10,width:200
                }}>
                        <Image style={styles.ing} source={require('../../../assests/hl.jpg') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    SAMANNTHA
                            </Text>
                            <Text style={{fontWeight:"bold",color:"#00a46c",paddingLeft:35}}>
                                    $400
                            </Text>
                        </View>
                        <Text style={{paddingHorizontal:10,fontWeight:"bold",paddingTop:3}}>
                            England
                        </Text>
                    </View>

                </ScrollView>

                  <View style={styles.container1}>
       <Text style={styles.sectionTitle}>Trước khi bạn đến</Text>

       <View style={styles.list}>
            {extra.map((extra,key) => {
                return(
                    <Text style={styles.listitem} key={key}> &mdash;{extra}</Text>
                )
            })}
       </View>

       <View style={{marginTop:32,paddingBottom:10}}>
            <TouchableOpacity style={styles.filterButton}>
                <Text style={{fontWeight:"700",color:"#fff"}}>Filter</Text>
            </TouchableOpacity>
       </View>
     </View>

     </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
 
container:{
    flex:1,
    backgroundColor:"white"
  } ,
  iconcontainer:{
    flexDirection:"row",
    alignItems:"center",justifyContent:"center",
   
  },
  khoi:{
    alignItems: 'center',
    width:95,
    marginVertical:12,
    
  },
  filterButton:{
    marginVertical:5,
    marginHorizontal:60,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.pink,
    borderRadius:100,
    padding:18,
    
},
textto:{
    marginVertical:15,
    marginHorizontal:20,
},
textnam:{
    fontWeight:"bold",
    fontSize:20,
    color:"black"
},
textque:{
    fontSize:14,
    fontWeight:"900"
},
footer:{
    marginHorizontal:17,
    marginVertical:11,
    
},
footer_main:{
    flexDirection:"row",
    display:"flex",
    justifyContent:"space-between",
    marginVertical:9
},
sugar:{
    fontSize:17,
    fontWeight:"bold"
},
weight:{
    // justifyContent:"flex-end"
    fontSize:17
},
ing:{
    resizeMode:'cover',
    height:200,
    width:200
},
 container1:{
        paddingVertical:10,
        paddingHorizontal:32,
        marginBottom:8,
        backgroundColor:colors.lightBg,
        marginTop:-80,
        // marginBottom:11

    },
    sectionTitle:{
     fontSize:13,
     fontWeight:"700",
     color:colors.textSec,
    },
    list:{
        marginTop:16,
        marginLeft:8
    },
    listitem:{
        color:colors.textSec,
        marginVertical:8
    },
    filterButton:{
        marginVertical:19,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.pink,
        borderRadius:100,
        padding:10,
        
    }
});


