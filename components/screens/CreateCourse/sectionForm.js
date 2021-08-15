import React from 'react';
import {StyleSheet,Button,TextInput,View,Text} from 'react-native';
import {globalStyles} from '../../styles/style/global';
import { Formik } from 'formik'; 
import * as yup from 'yup';



const Schema=yup.object({
    section:yup.string().required("Enter Valid Section").min(2),
    
})


export default function SectionForm({addSection}){
    return(
        <View style={globalStyles.container}>
            <Formik initialValues={{section:''}}
            validationSchema={Schema}
             onSubmit={(values,actions)=>{
               
               actions.resetForm();
               addSection(values);
              
             }}>
              {(props)=>(
                  <View>
                      <Text style={{textAlign:'center',fontSize:20,color:'#30475e'}}>New <Text style={{color:'#f05454',fontSize:23}}>Curriculum</Text> Section</Text>
                      <TextInput 
                      style={globalStyles.inputform}
                      placeholder='Section Title'
                      onChangeText={props.handleChange('section')}
                      value={props.values.section}
                      onBlur={props.handleBlur('section')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.section && props.errors.section}</Text>
                      
                      
                      <Button title="Create Section"   color="#f05454"  onPress={props.handleSubmit}/>
                  </View>
              )}

            </Formik>
        </View>
    )
}