import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const globalStyles=StyleSheet.create({
    container:{
      padding:15,
      flex:1,
      justifyContent:'center',
      alignItems:'center',

    },
    batchFormcontainer:{
      padding:15,
      flex:1,
      justifyContent:'center',
      

    },
    batchcontainer:{
      padding:6,
      flex:1,

    },
    titleText:{
         
        fontSize:22,
        color:'#333',
    },
    paragraph:{
      marginVertical:8,
      lineHeight:20,
    },  
    input:{
      borderWidth:1,
      borderColor:'#ddd',
      padding:10,
      fontSize:18,
      borderRadius:6,
    },
    errorText:{
     color:'crimson',
     fontWeight:'bold',
     marginBottom:10,
     marginTop:6,
     textAlign:'center'
    },
    inputform:{
      
      borderWidth:1,
      borderColor:'#ddd',
      padding:10,
      fontSize:18,
      borderRadius:6,
    },
   
})


