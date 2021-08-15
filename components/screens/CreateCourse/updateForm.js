import React from 'react';
import {StyleSheet,Button,TextInput,View,Text} from 'react-native';
import {globalStyles} from '../../styles/style/global';
import { Formik } from 'formik'; 
import * as yup from 'yup';

const Schema=yup.object({
    section:yup.string().required("Enter Valid Section").min(2),
    
})

export default function SectionForm({updateSection}){
    return(
        <View style={globalStyles.container}>
            <Formik initialValues={{section:''}}
            validationSchema={Schema}
             onSubmit={(values,actions)=>{
               
               actions.resetForm();
               updateSection(values);
              
             }}>
              {(props)=>(
                  <View>
                      <Text style={{textAlign:'center',fontSize:20,color:'#30475e'}}>Update <Text style={{color:'#f05454',fontSize:23}}>Curriculum</Text> Section</Text>
                      <TextInput 
                      style={globalStyles.inputform}
                      placeholder='Section Title'
                      onChangeText={props.handleChange('section')}
                      value={props.values.section}
                      onBlur={props.handleBlur('section')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.section && props.errors.section}</Text>
                      
                      
                      <Button title="Update Section"  color="#f05454"  onPress={props.handleSubmit}/>
                  </View>
              )}

            </Formik>
        </View>
    )
}