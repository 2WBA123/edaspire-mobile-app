import React, {useState, createRef} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {globalStyles} from '../../../styles/global';
import { RadioButton } from 'react-native-paper';
import { Formik } from 'formik';

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Dimensions,

} from 'react-native';
import * as yup from 'yup';

import Loader from '../../../shared/loader';

const SignupSchema=yup.object({
  userName:yup.string().required('Name Required'),
  userEmail:yup.string().email('Invalid email').required('Required'),
  userPassword:yup.string().required("Password is required").min(6, "Password is too short - should be 6 chars minimum"),
 
})



const RegisterScreen = (navigation) => {
  let userName="";
  let userEmail="";
  const [userType, setUserType] = useState('student');
  let userPassword="";
  const [loading, setLoading] = useState(false);
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);


  const user =(usert)=>{
    setUserType(usert);
    return
 }
  

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
       
          
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../../../assets/edt.png')}
            style={{
              width: Dimensions.get('window').width,
              height: 100,
              resizeMode: 'cover',
              margin: 5,
            }}
          />
        </View>
        <View style={styles.userButton}>
        <RadioButton.Group onValueChange={value => setUserType(value)} value={userType}>
        <RadioButton.Item color="red" label="Student" 
            value="student"
            />
            <RadioButton.Item label="Instructor" 
              value="instructor"
            />
          

        </RadioButton.Group>
           
        
        </View>
        
        <KeyboardAvoidingView enabled>
          
        <Formik initialValues={{userName:"",userEmail:"",userPassword:""}}
            validationSchema={SignupSchema}
             onSubmit={(values,actions)=>{
              actions.resetForm();
              userEmail=values.userEmail;
              userPassword=values.userPassword;
              userName=values.userName;
               console.log(userName);
               console.log(userEmail);
               console.log(userPassword);
               console.log(userType);

               /////////////////
               /*if (isRegistraionSuccess) {
                return (
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: '#307ecc',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../../../../assets/favicon.png')}
                      style={{
                        height: 150,
                        resizeMode: 'contain',
                        alignSelf: 'center'
                      }}
                    />
                    <Text style={styles.successTextStyle}>
                      Registration Successful
                    </Text>
                    <TouchableOpacity
                      style={styles.buttonStyle}
                      activeOpacity={0.5}
                      onPress={() => props.navigation.navigate('LoginScreen')}>
                      <Text style={styles.buttonTextStyle}>Login Now</Text>
                    </TouchableOpacity>
                  </View>
                );
              }*/
               /////////////////

               
               
            
              
             }}>
              {(props)=>(
                  <View style={styles.formContainer}>
                     <TextInput 
                      style={globalStyles.input}
                      placeholder='Fullname'
                      leftIcon={<Ionicons name="ios-person" size={28} color="#888" />}
                      value={props.values.userName}  
                      onChangeText={props.handleChange('userName')}                      
                      onBlur={props.handleBlur('userName')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.userName && props.errors.userName}</Text>
                      
                      <TextInput 
                      style={globalStyles.input}
                      placeholder='Email'
                      leftIcon={<Ionicons name="ios-mail" size={28} color="#888" />}
                      onChangeText={props.handleChange('userEmail')}
                      value={props.values.userEmail}                      
                      onBlur={props.handleBlur('userEmail')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.userEmail && props.errors.userEmail}</Text>
                      <TextInput 
                      style={globalStyles.input}
                      placeholder='Password'
                      leftIcon={<Ionicons name="ios-lock" size={28} color="grey" />}
                      value={props.values.userPassword}  
                      onChangeText={props.handleChange('userPassword')}
                      secureTextEntry
                      onBlur={props.handleBlur('userPassword')}
                      />
                     
                     <Text style={globalStyles.errorText}>{props.touched.userPassword && props.errors.userPassword}</Text>
                      
                      
                      
                     <TouchableOpacity
                       style={styles.buttonStyle}
                       activeOpacity={0.5}
                       onPress={props.handleSubmit}>
                       <Text style={styles.buttonTextStyle}>REGISTER</Text>
                      </TouchableOpacity>  
            
                  </View>
              )}
            </Formik>         
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#f05454',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  formContainer:{
     marginTop:10,
  },
  userButton:{  
    flex:1,
    flexDirection:'row',
    padding:2,
    margin:5,
    width:Dimensions.get('window').width, 
    justifyContent:'center',
    alignItems:'stretch'

  },
 
});