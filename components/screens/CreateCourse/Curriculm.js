import { func } from 'prop-types';
import React, { useState } from 'react';
import {StyleSheet,View,ScrollView,Text,FlatList,Modal,TouchableWithoutFeedback, Keyboard} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { globalStyles } from '../../styles/style/global';
import Card from '../../shared/cards/card';
import {MaterialIcons} from '@expo/vector-icons';
import SectionForm from '../CreateCourse/sectionForm';
import UpdateForm from '../CreateCourse/updateForm';



export default function Curriculm({navigation}){
    const [modalOpen,setModalOpen]=useState(false);
    const [secmodalOpen,setSecModalOpen]=useState(false);
    const [sections,setSections]=useState ([]);

    const addSection =(sectiondata)=>{
        const dataa=sectiondata.section
          setSections([...sections, dataa]);
          setModalOpen(false);
    }
    const updateSection =(sectiondata)=>{
      const dataa=sectiondata.section
        setSections([...sections, dataa]);
        setSecModalOpen(false);
  }



      return(     
          <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide' style={{}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View  style={styles.modalContent}>
                   
                  <SectionForm addSection={addSection}/>
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
                   
                  <UpdateForm updateSection={updateSection}/>
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
              data={sections}
              renderItem={({item})=>(
                  <View style={{flex:1}} > 
                   
                     <Card>
                         <Text style={globalStyles.titleText}>
                          {item}
                         </Text>
                      <Text> <MaterialIcons 
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
                    </Card>                      
                  </View>
              )}
              />
              <View style={styles.addSection}>
                  <Text style={styles.addSectiontext} >Add Section</Text>
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