import { func } from 'prop-types';
import React, { useState } from 'react';
import {StyleSheet,View,Text,FlatList,Modal,TouchableWithoutFeedback, Keyboard} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { globalStyles } from '../../styles/style/global';
import Card from '../../shared/cards/card';
import {MaterialIcons} from '@expo/vector-icons';
import BatchForm from '../CreateCourse/batchForm';




export default function Curriculm({navigation}){
    const [modalOpen,setModalOpen]=useState(false);
    const [batch,setBatch]=useState ([]);

    const addBatch =(batchdata)=>{
        const dataa=batchdata.section
          setBatch([...batch, dataa]);
          setModalOpen(false);
    }
  

      return(     
          <View style={globalStyles.batchcontainer}>
            <Modal visible={modalOpen} animationType='slide' style={{}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View  style={styles.modalContent}>
                   
                  <BatchForm addBatch={addBatch}/>
                  <MaterialIcons 
                   name='close'
                   size={30}
                   style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=>setModalOpen(false)}
                  />
                </View>
                </TouchableWithoutFeedback>
            </Modal>
               <View style={{flexDirection:'row',justifyContent:'space-between' ,borderRadius:5,alignItems:'center',height:hp('7%'),backgroundColor:'#f05454',paddingHorizontal:10}}>
                 <Text onPress={()=>navigation.navigate('BatchDetail')} style={{color:'white',fontSize:18,fontWeight:'bold'}}>Batch</Text>
                 <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Start Date</Text>
                 <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Created On</Text>
               </View>
              <FlatList 
              data={batch}
              renderItem={({item})=>(
                  <View> 
                   <Card>
                     <Text onPress={()=>navigation.navigate('BatchDetail')}>
                        batch
                     </Text>

                     <Text>
                        start date
                     </Text>

                     <Text>
                       created date
                    </Text> 
                    </Card>                 
                  </View>
              )}
              />
              <View style={styles.addSection}>
                  <Text style={styles.addSectiontext} >Add Batch</Text>
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