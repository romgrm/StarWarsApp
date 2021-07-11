import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';



export default function App() {


  const [fetchData, setFetchData] = useState([])
  

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello gang </Text>
      <Card>
        Hello
      </Card>
    useEffect(() => {

        const fetchingData = async () => {
            const userToken = JSON.parse(await SecureStore.getItemAsync('user'))
            await axios.get(Environment.production.BASE_URL + "appointment", { headers: { 'Authorization': userToken.token } })
                .then((response) => {
                    setFetchData(response.data)
                })

        }
        fetchingData()
    }, [])
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
