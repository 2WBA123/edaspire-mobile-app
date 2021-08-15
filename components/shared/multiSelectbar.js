import CustomMultiPicker from "react-native-multiple-select-list";
import React from 'react';
import { Value } from "react-native-reanimated";

const userList = {
  "123":"Tom",
  "124":"Michael",
  "125":"Christin",
  "126":"Tom",
  "127":"Michael",
  "128":"Christin"
}
const handleSearch=(results)=>{
 
   
      console.log(results)
    
}
//const userList = {
//  "123":<View><Text>Tom</Text></View>,
//  "124":<View><Text>Michael</Text></View>,
//  "125":<View><Text>Christin</Text></View>
//}
const multisearchbar=()=>{
  return(
  <CustomMultiPicker
  options={userList}
  search={true} // should show search bar?
  multiple={true} //
  placeholder={"Search"}
  placeholderTextColor={'#757575'}
  returnValue={"value"} // label or value
  callback={(res)=>{ handleSearch(res) }} // callback, array of selected items
  rowBackgroundColor={"#eee"}
  rowHeight={40}
  rowRadius={5}
  searchIconName="ios-checkmark"
  searchIconColor="red"
  searchIconSize={30}
  iconColor={"#00a2dd"}
  iconSize={30}
  selectedIconName={"ios-checkmark-circle-outline"}
  unselectedIconName={"ios-radio-button-off-outline"}
  scrollViewHeight={130}
  selected={[""]} // list of options which are selected by default
/>)
}

export default multisearchbar;