import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
function HomeScreen({ navigation }){
  React.useEffect(() => {
    
  }, []);
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style= {styles.btnInit}
        onPress={() => navigation.push('Quests')}
      >
      <Image style={styles.btnInitImg} resizeMode = 'cover' source={require('../assets/imgs/satis.jpeg')} blurRadius={1} />
      <Text style= {styles.btnInitText}>Pesquisa de Satisfação</Text>
      </TouchableOpacity>

      {}
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  btnInit:{
    backgroundColor: 'white',
    width: '60%',
    height: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnInitText:{
    color: "black",
    fontSize: 20,
  },
  btnInitImg:{
    width: '100%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});