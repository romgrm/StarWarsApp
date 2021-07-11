import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';



export default function App() {

  const [fetchData, setFetchData] = useState([])
  useEffect(() => {

      const fetchingData = async () => {
          
          await axios.get(Environment.production.BASE_URL + "appointment", { headers: { 'Authorization': userToken.token } })
              .then((response) => {
                  setFetchData(response.data)
              })

      }
      fetchingData()
  }, [])
  

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello gang </Text>
      <Card>
        Hello
      </Card>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
