import 'react-native-gesture-handler';
import React from "react";
// import {Icon} from 'react-native-vector-icons/dist/FontAwesome';
import { colors} from "../../../styles";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Input
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput ,TouchableOpacity} from 'react-native-gesture-handler';
// import { Input } from 'react-native-elements';
// import Input from './Input';
// const {width,height} =Dimensions.get("screen");

const extra =[
    "Hạ Long Bay nơi thiên nhiên lý tưởng",
    "Nơi bạn sẽ được trải nghiệm những điều quý giá",
    "Nếu bạn có mong muốn đến đây hãy liên lạc với chúng tôi",
    "Book vé tại trang web này",
    "Chúng tôi rất vinh dự được phục vụ quý khách"
]
export default function Maintrip() {
  return (
    <ScrollView>
        <View style={{backgroundColor:"#FFF",flex:1}}>
          <View style={{backgroundColor:"#00a46c",
              height:180,
              borderBottomLeftRadius:20,
              borderBottomRightRadius:20,
              paddingHorizontal:20,
              
    }}>
            <Icon name ="user-plus"  size={30} 
            style={{
                height:30,
                width:40,
                marginTop:50, color:"#FFF",
            }}
            />
            <View style={{flexDirection:"row",alignItems:"center",marginTop:9,width:"100%"}}>
                <View style={{width:"50%"}}>
                    <Text style={{fontSize:28,
                                  color:"#FFF",
                                  fontWeight:"bold"  
                    }}>
                       Du Lịch
                    </Text>
                </View>
                <View style ={{width:"50%",alignItems:"flex-end"}}>
                    <Image source={require("../../../assests/logo.jpg")} style={{width:"50%",height:60,}}/>
                </View>
            </View>
            </View>

            <View
                // colors={["rgba(0,164,109,0.4)","transparent"]}
                style={{
                    //left:0,
                  //  right:0,
                   // height:90,
                    marginTop:-45
                }}
            >
                <View style={{backgroundColor:"#FFF",
                                paddingVertical:8,
                                paddingHorizontal:20,
                                marginHorizontal:20,
                                borderRadius:15,
                                marginTop:25,
                                flexDirection:"row",
                                alignItems:"center",
                            }}>
                            <TextInput placeholder="Search"
                                        placeholderTextColor="#b1e5d3"
                                        style={
                                            {
                                                fontWeight:"bold",
                                                fontSize:18,
                                                width:260,
                                                // borderColor:"red",
                                                
                                            }
                                        }
                            />
                            <Icon name ="search"  size={26} />
                </View>
                <View style={{flexDirection:"row",paddingHorizontal:23,width:"100%",alignItems:"center"}}>
                        <View style={{width:"50%"}}>
                                <Text style={{fontWeight:"bold",fontSize:17,
                                    color:"#585a61"}}>Địa Điểm
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
                    ,marginLeft:20,marginTop:20,borderRadius:15,width:200
                }}>
                        <Image style={styles.ing} source={require('../../../assests/1jpg.jpg') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    Hà Giang
                            </Text>
                            <Text style={{fontWeight:"bold",color:"#00a46c",paddingLeft:35}}>
                                    $400
                            </Text>
                        </View>
                        <Text style={{paddingHorizontal:10,fontWeight:"bold",paddingTop:3}}>
                            Việt Nam
                        </Text>
                    </View>
                    <View style={{height:250,elevation:2,backgroundColor:"#FFF"
                    ,marginLeft:30,marginTop:20,borderRadius:15,width:200,
                }}>
                        <Image style={styles.ing} source={require('../../../assests/67.png') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    Hạ Long
                            </Text>
                            <Text style={{fontWeight:"bold",color:"#00a46c",paddingLeft:35}}>
                                    $400
                            </Text>
                        </View>
                        <Text style={{paddingHorizontal:10,fontWeight:"bold",paddingTop:3}}>
                                Quảng Ninh
                        </Text>
                    </View>
                   
                    <View style={{height:250,elevation:2,backgroundColor:"#FFF"
                    ,marginLeft:30,marginTop:20,borderRadius:15,width:200,
                }}>
                        <Image style={styles.ing} source={require('../../../assests/ma2.jpg') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    Nam Định
                            </Text>
                            <Text style={{fontWeight:"bold",color:"#00a46c",paddingLeft:35}}>
                                    $400
                            </Text>
                        </View>
                        <Text style={{paddingHorizontal:10,fontWeight:"bold",paddingTop:3}}>
                            England
                        </Text>
                    </View>

                    <View style={{height:250,elevation:2,backgroundColor:"#FFF"
                    ,marginLeft:30,marginTop:20,borderRadius:15,width:200
                }}>
                        <Image style={styles.ing} source={require('../../../assests/ma.jpg') }></Image>

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
                
                <View style={{flexDirection:"row",paddingHorizontal:33,width:"100%",alignItems:"center",marginTop:-95}}>
                        <View style={{width:"50%"}}>
                                <Text style={{fontWeight:"bold",fontSize:17,
                                    color:"#585a61"}}>Destination
                                </Text>
                                <View style={{height:4,backgroundColor:"#b1e5d3",width:115,marginTop:-5}}>

                                </View>

                        </View>

                        <View style={{width:"50%",alignItems:"flex-end"}}> 
                                <View style= {{backgroundColor:"#00a46c",paddingHorizontal:20,paddingVertical:5,borderRadius:15,marginRight:-8}}>
                                    <Text style={{fontWeight:"bold",fontSize:13,color:"#FFF"}}>Morre</Text>
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
                        <Image style={styles.ing} source={require('../../../assests/h1.jpg') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    Hội An
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
                        <Image style={styles.ing} source={require('../../../assests/h2.jpg') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    Quân Khu 4
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
                        <Image style={styles.ing} source={require('../../../assests/h3.jpeg') }></Image>

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
                        <Image style={styles.ing} source={require('../../../assests/h4.jpg') }></Image>

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



                <View style={{flexDirection:"row",paddingHorizontal:33,width:"100%",alignItems:"center",marginTop:-95}}>
                        <View style={{width:"50%"}}>
                                <Text style={{fontWeight:"bold",fontSize:17,
                                    color:"#585a61"}}>Destination Referent
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

             

                <View style={{flexDirection:"row",paddingHorizontal:33,width:"100%",alignItems:"center",marginTop:-95}}>
                        <View style={{width:"50%"}}>
                                <Text style={{fontWeight:"bold",fontSize:17,
                                    color:"#585a61"}}>Thai Lan
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
                        <Image style={styles.ing} source={require('../../../assests/tl.jpg') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    Thai Lan Pagoda
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
                        <Image style={styles.ing} source={require('../../../assests/tl2.jpg') }></Image>

                        <View style={{flexDirection:"row",paddingTop:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:"bold"}}>
                                    Pagoda
                            </Text>
                            <Text style={{fontWeight:"bold",color:"#00a46c",paddingLeft:35}}>
                                    $100000
                            </Text>
                        </View>
                        <Text style={{paddingHorizontal:10,fontWeight:"bold",paddingTop:3}}>
                                ThaiLan
                        </Text>
                    </View>
                   
                    <View style={{height:250,elevation:2,backgroundColor:"#FFF"
                    ,marginLeft:30,marginTop:20,borderRadius:15,marginBottom:10,width:200,
                }}>
                        <Image style={styles.ing} source={require('../../../assests/tl3.jpg') }></Image>

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
                        <Image style={styles.ing} source={require('../../../assests/tl4.jpeg') }></Image>

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
 
    <View style={styles.container}>
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
        </View>

    
        </ScrollView>
    
  );
}

const styles = StyleSheet.create({

ing:{
    resizeMode:'cover',
    height:200,
    width:200
},
container:{
    paddingVertical:14,
    paddingHorizontal:32,
    marginBottom:8,
    backgroundColor:colors.lightBg,
    marginTop:-60,
    marginBottom:11

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


