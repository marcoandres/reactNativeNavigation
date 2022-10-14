import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {
  const [cont, setCont] = React.useState(0);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setCont((c) => c + 1)}
          title="+1"
          color="#000"
        />
      ),
    });
  }, [navigation]);


    


  return (
    <View style={styles.container}>
      <Text>Home Screen {cont}</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details', {nombre:'Marco', edad: 37 })} />
    </View>
  );
}

const DetailsScreen = ({ navigation, route }) => {
  const {nombre, edad} = route.params; //recibimos los parametros
  return (
    <View style={styles.container}>
      <Text>about you {nombre} {edad}</Text>
      <Button title="Go to back" onPress={ () => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () =>{
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          headerStyle: {
            backgroundColor: "#ffeecc"
          },
          headerRight: () => (
            <Button
              title="+1"
              color="#000"
            />
          )
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
