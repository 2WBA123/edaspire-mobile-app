import React from 'react';
import {View,ScrollView,StyleSheet,Image, Text,Dimensions,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StarRatings from '../../shared/starRating';


const Course=()=>{
    return(
        
            <ScrollView style={styles.container}>                
               <View >
                  <ImageBackground source={require('../../../assets/web.jpg')} resizeMode="cover" style={styles.image} >
                      <Text>Full Stack Development</Text>
                  </ImageBackground>
               </View>  
               <View style={{marginHorizontal:5}}>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>Description</Text>
                  <Text style={styles.text}>
                      {'\n'}
                     Hello Guys, This is an Example of
                        {'\n'}
                     How to Break Multiline Text in React Native.
                     {'\n'}
                  </Text>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>Curriculum</Text>
                  <Text style={styles.text}>
                       {'\n'}
                     Hello Guys, This is an Example of
                        {'\n'}
                     How to Break Multiline Text in React Native.
                     {'\n'}
                  </Text>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>Course Review</Text>
                   <View style={styles.starRating}>
                     <StarRatings/>
                   </View>
                  
                   
                </View>            
            </ScrollView>
        
    )
}
export default Course;

const styles=StyleSheet.create({
     
    container:{
        flex:1,
        width:wp('98%'),
        
    },
    image:{
        
         width:wp('97%'),
         margin:5,
         height:hp('35 %'),
    },
    starRating:{
      width:wp('60%'),  
    },
})