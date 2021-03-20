import React from 'react';
import { View , StyleSheet} from 'react-native';
import Header  from './src/Header.js'
import Content from './src/Content.js'
import Login from './src/Login.js'

export default function App() {

  return (
    <View>
       <Header 
       style={styles.header} 
       title="StartBid" 
       subtitle="Login"
       />
      <Login>
      </Login>
    </View>
  );


}

const styles = StyleSheet.create({
 header:{
   marginTop:100,
 },
});


