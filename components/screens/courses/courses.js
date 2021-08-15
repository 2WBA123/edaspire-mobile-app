import React from 'react';
import {StyleSheet,View,Text,ScrollView,TouchableOpacity}  from 'react-native';
import MultiSelectBar from '../../shared/multiSelectbar';
import Card from '../../shared/card';
import Course from '../course/course';


const Courses=({navigation})=>{

    return(
       <View style={styles.container}>
           <View style={{backgroundColor:'offwhite',
                      margin:5,
                      alignItems:'center'
                      }}>
                <Text style={styles.txtSerch}>Search <Text style={styles.txtcourse}>Courses</Text> By Category</Text>
           </View>
          
            <MultiSelectBar/>
            <ScrollView>
            <TouchableOpacity onPress={()=>{navigation.navigate('Batches')}}>
            <Card/>
            <Card/>
            <Card/>         
          </TouchableOpacity>
          </ScrollView>
       </View>

    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:5,
    },
    txtSerch:{
        color:'#30475e',
        fontSize:18,
        alignItems:'center',
        fontWeight:'bold'
     },
     txtcourse:{
        color:'#f05454',
        fontSize:23
     }
})

export default Courses;
