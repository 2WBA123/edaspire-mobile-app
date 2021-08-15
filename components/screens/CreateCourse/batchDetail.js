import React,{useRef} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function BatchDetails({navigation}){

    return(
       <View style={styles.container}>
           <TouchableOpacity onPress={()=>navigation.navigate('Content')}>
               <Text style={styles.contentxt}>Content</Text>
           </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Quiz')}>
              <Text style={styles.quiztxt}>Quizzes</Text>
          </TouchableOpacity>
       </View>
    )

}
const styles=StyleSheet.create({
    container:{
     flex:1,
     padding:5,
     justifyContent:'center',
     alignItems:'center',
    },
    contentxt:{
       borderRadius:5,
       backgroundColor:'#f05454',
       padding:10,
       margin:15,
       color:'white',
       width:wp('60%'),
       textAlign:'center',
       fontSize:20,
    },
    quiztxt:{
        borderRadius:5,
        backgroundColor:'#f05454',
        padding:10,
        margin:15,
        color:'white',
        width:wp('60%'),
        textAlign:'center',
        fontSize:20,


    }
})