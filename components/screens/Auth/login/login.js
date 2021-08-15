import React, {useState, createRef} from 'react';
import {globalStyles} from '../../../styles/global';
import { Ionicons } from '@expo/vector-icons';
import Home from '../../../home/home1';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const LoginSchema=yup.object({
  userEmail:yup.string().email('Invalid email').required('Required'),
  userPassword:yup.string().required("Password is required").min(6, "Password is too short - should be 6 chars minimum"),
 
})



const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  

  const passwordInputRef = createRef();
  

  

  return (
    <View style={styles.mainBody}>
  
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        
        <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../../../assets/edt.png')}
                style={{
                  width: Dimensions.get('window').width,
                  height: 200,
                  resizeMode: 'cover',
                  margin: 5,
                }}
              />
            </View>
          <Formik initialValues={{userEmail:'',userPassword:''}}
            validationSchema={LoginSchema}
             onSubmit={(values,actions)=>{
              navigation.navigate('Home');
              setUserEmail(values.userEmail);
              setUserPassword(values.userPassword);
               console.log(userEmail);
               console.log(userPassword);

               actions.resetForm();              
             }}>
              {(props)=>(
                  <View>                     
                      <TextInput 
                      style={globalStyles.input}
                      placeholder='Email'
                      onChangeText={props.handleChange('userEmail')}                      
                      onBlur={props.handleBlur('userEmail')}
                      />
                      <Text style={globalStyles.errorText}>{props.touched.userEmail && props.errors.userEmail}</Text>
                      
                      
                      <TextInput 
                      style={globalStyles.input}
                      placeholder='Password'
                      leftIcon={<Ionicons name="ios-lock" size={28} color="grey" />}
                      onChangeText={props.handleChange('userPassword')}
                      secureTextEntry
                      onBlur={props.handleBlur('userPassword')}
                      />
                     
                     <Text style={globalStyles.errorText}>{props.touched.userPassword && props.errors.userPassword}</Text>
                      
                      
                      <TouchableOpacity
                       style={styles.buttonStyle}
                       activeOpacity={0.5}
                       onPress={props.handleSubmit}>
                        <Text style={styles.buttonTextStyle}>LOGIN</Text>
                      </TouchableOpacity>
            
                  </View>
              )}

            </Formik>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.registerTextStyle}
              >
              New Here ? Register
            </Text>
            </TouchableOpacity>         
            </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
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
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: 'white',
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
  registerTextStyle: {
    color: '#f05454',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5 ,
    margin: 10
},
});