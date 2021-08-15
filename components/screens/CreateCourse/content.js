import { func } from 'prop-types';
import React, { useState } from 'react';
import {StyleSheet,View,Text,FlatList,Modal,TouchableWithoutFeedback, Keyboard} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { globalStyles } from '../../styles/style/global';
import Card from '../../shared/cards/card';
import {MaterialIcons} from '@expo/vector-icons';
import ContentForm from '../CreateCourse/contentForm';
import UpdateContentForm from '../CreateCourse/updateContentForm';




export default function Content({navigation}){
    const [modalOpen,setModalOpen]=useState(false);
    const [secmodalOpen,setSecModalOpen]=useState(false);
    const [content,setContent]=useState ([]);

    const addContent =(contentdata)=>{
      contentdata.key=Math.random().toString();
        setContent((currentData)=>{
          return [contentdata,...currentData];
      });
          setModalOpen(false);
    }

    const updateContent =(contentdata)=>{
      contentdata.key=Math.random().toString();
      setContent((currentData)=>{
        return [contentdata,...currentData];
    });
        setSecModalOpen(false);
  }
  

      return(     
          <View style={globalStyles.batchcontainer}>
            <Modal visible={modalOpen} animationType='slide' style={{}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View  style={styles.modalContent}>
                   
                  <ContentForm addContent={addContent}/>
                  <MaterialIcons 
                   name='close'
                   size={30}
                   style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=>setModalOpen(false)}
                  />
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Modal visible={secmodalOpen} animationType='slide' style={{}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View  style={styles.modalContent}>
                   
                  <UpdateContentForm updateContent={updateContent}/>
                  <MaterialIcons 
                   name='close'
                   size={30}
                   style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=>setSecModalOpen(false)}
                  />
                </View>
                </TouchableWithoutFeedback>
            </Modal>

                 

              <FlatList 
              data={content}
              renderItem={({item})=>(
                  <View style={{borderStyle:'solid',borderRadius:10,flex:1,marginTop:10 }}> 
                   <View style={{padding:5,backgroundColor:"#999",justifyContent:'space-between',
                     flexDirection:'row',}}>
             <Text>{item.Title}</Text> 
             <Text style={{flexDirection:'row',justifyContent:'flex-end'}}> <MaterialIcons 
                name='edit'
                size={30}
                style={{marginRight:20}}
                onPress={()=>setSecModalOpen(true)}
                    /> 
              <MaterialIcons 
                name='delete'
               size={30}
                style={{marginLeft:10}}
                  onPress={()=>setModalOpen(false)}
               />
             </Text>
             </View> 
                   <Text style={{padding:5}}>{item.Description}</Text>                
                  </View>
              )}
              />
              <View style={styles.addSection}>
                  <Text style={styles.addSectiontext} >Add Content</Text>
              </View>
              <MaterialIcons 
             name='add'
             size={30}
             style={styles.modalToggle}
             onPress={()=>setModalOpen(true)}
             />
          </View>
          
      )
}

const styles=StyleSheet.create({
    modalToggle:{
      color:'#f05454',
      marginBottom:10,
      borderWidth:1,
      borderColor:'#f2f2f2',
      padding:10,
      borderRadius:10,
      alignSelf:'center'
    },
    modalClose:{
        
        marginBottom:30,
    },
    modalContent:{
        flex:1,
    },
    addSection:{
        
        justifyContent:'center',
        alignItems:'center'
    },
    addSectiontext:{
        
      fontSize:20,
      fontWeight:'bold',
      color:'#f05454'
    },
    delete:{
      

    }
})