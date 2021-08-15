import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import{createAppContainer} from 'react-navigation';
import Carousel from '../../carousel/Carousel';
import Home from '../../home/home1';
import Login from '../../screens/Auth/login/login';
import Signup from '../../screens/Auth/signup/signup';
import Courses from '../../screens/courses/courses';
import Course from "../../screens/course/course";
import EnrolledCourses from "../../screens/enrolledCourses/enrolledCourses";
import Details from '../../screens/CreateCourse/Details';
import Curriculm from '../../screens/CreateCourse/Curriculm';
import Batches from '../../screens/CreateCourse/batches';
import BatchDetail from '../../screens/CreateCourse/batchDetail';
import Content from '../../screens/CreateCourse/content';
import Quiz from '../../screens/CreateCourse/quiz'


const screens={

    Carousel:{
      screen:Carousel,
    },
    Login:{
        screen:Login,
        
   },
    Signup:{
      screen:Signup,
    },
    Home:{
        screen:Home,       
    },
    Course:{
      screen:Course,
    },
    Courses:{
      screen:Courses,
    },
    EnrolledCourses:{
      screen:EnrolledCourses,
    },
    Details:{
      screen:Details,
    },
    Curriculum:{
      screen:Curriculm,
    },
    Batches:{
      screen: Batches,
    },
    BatchDetail:{
        screen:BatchDetail,
    },
    Content:{
        screen:Content,
    },
    Quiz:{
        screen:Quiz,
    }
   
  
}

const HomeStack = createStackNavigator(screens,
  {defaultNavigationOptions:{

    headerStyle:{backgroundColor:'#f05454'},
    headerTintColor:'white',
    headerTitleAlign:'center'
    
}}
  );

export default createAppContainer(HomeStack);