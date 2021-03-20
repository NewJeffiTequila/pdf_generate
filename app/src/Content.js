import { StatusBar } from 'expo-status-bar';
import React, {useState ,useEffect} from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { DefaultTheme, Provider as PaperProvider  , Button ,Appbar } from 'react-native-paper';
import { DataTable, IconButton, Colors } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';




export default function Content() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3030/api/gestarp')
  //   .then((response) => response.json())
  //   .then((json) => setData(json))
  //   .catch((error) => console.error(error))
  //   .finally(() => setLoading(false));
  // }, []);

  return (
    <DataTable>
        <DataTable.Header>
          <DataTable.Title>Numero ARP</DataTable.Title>
          <DataTable.Title numeric>Numero Edital</DataTable.Title>
          <DataTable.Title numeric></DataTable.Title>
      </DataTable.Header>
      <SectionList 
        sections = {[
          { data: data}
        ]}

        renderItem={({item}) =>(
        <DataTable.Row>
        <DataTable.Cell>{item.numero_arp}</DataTable.Cell>
        <DataTable.Cell numeric>{item.numero_edital}</DataTable.Cell>
        <DataTable.Cell numeric>
         <IconButton
            icon="trash-can"
            color={Colors.red500}
            size={20}
            onPress={() => console.log('Pressed')}
          />
          </DataTable.Cell>
        </DataTable.Row>
        )}

        renderSectionHeader={({section})=>(
          <View style={styles.header}>
            <Text style={styles.pageTitle}>
              {section.title}
            </Text>
          </View>
        )}
        keyExtractor={(item)=>item.id}
        
      />
      <StatusBar style="auto" />


    </DataTable>
   
  // <DataTable>
  //   <DataTable.Header>
  //     <DataTable.Title>Dessert</DataTable.Title>
  //     <DataTable.Title numeric></DataTable.Title>
  //     <DataTable.Title numeric>Fat</DataTable.Title>
  //   </DataTable.Header>

  //   <DataTable.Row>
  //     <DataTable.Cell>Frozen yogurt</DataTable.Cell>
  //     <DataTable.Cell numeric>159</DataTable.Cell>
  //     <DataTable.Cell numeric>6.0</DataTable.Cell>
  //   </DataTable.Row>

  //   <DataTable.Row>
  //     <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
  //     <DataTable.Cell numeric>237</DataTable.Cell>
  //     <DataTable.Cell numeric>8.0</DataTable.Cell>
  //   </DataTable.Row>

  //   <DataTable.Pagination
  //     page={1}
  //     numberOfPages={3}
  //     onPageChange={page => {
  //       console.log(page);
  //     }}
  //     label="1-2 of 6"
  //   />
  // </DataTable>
   
   
     
    
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  row:{
    paddingHorizontal:20,
    paddingVertical:10,
    borderWidth:2,
    margin:2

  },
  pageTitle:{
    fontSize:20,
    marginBottom:10,
    marginTop:30,
    textAlign:'center',

  },
  // header:{
  //   marginTop:0,
  //   backgroundColor:'#00A6FB',    
  // }
});


const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
    // Specify custom property in nested object
  colors: {
    myOwnColor: '#BADA55',
  }
};

