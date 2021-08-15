import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet, Text,View} from 'react-native';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const submitQuery=()=>{
      console.log("wahab adil");
  }

  return (
    <View>
        
       
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={submitQuery}
    />
    </View>
    
  );
};
const styles=StyleSheet.create({
   
})
export default MyComponent;