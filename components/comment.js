import * as React from 'react';
import { StyleSheet, View, Text,TextInput, TouchableOpacity,Image, Alert} from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setDataDB from './sendData'
export default function comm({ navigation }) {

    const [value, setVal] = React.useState('false');
    const [comment, setcomment] = React.useState('');

    const callSave = async () => {
        await AsyncStorage.setItem("anonymous", value);
        await AsyncStorage.setItem("comment", comment);
        setDataDB();
        Alert.alert(
            "Obrigado por participar!",
            "A Pesquisa enviada com sucesso.",
            [
            
            { text: "OK"}
            ]
        );
        navigation.push('Home')
    }
    
  return (
    <View style={styles.container} >
        <View style={styles.header}>
            <Image style={styles.img} source={require('../assets/imgs/senai-logo.png')}/>
        </View>
        <View style={styles.body}>
            <Text style={styles.label} >
               Algum comentario a mais?:
            </Text>
            <TextInput  
                multiline
                numberOfLines={10}
                onChangeText={comment => setcomment(comment)}
                value={comment}
                style={styles.lgInp}
            />
            <View style={styles.rbtCombo}>
                <RadioButton
                value="false"
                status={ value === 'true' ? 'checked' : 'unchecked'}
                onPress={value === 'true' ? () => setVal('false') :() => setVal('true')}
                color="black"
                />
                <Text>Enviar Anonimamente?</Text>
            </View>
        </View>
        <TouchableOpacity
            style= {styles.btnBack}
            onPress={() => navigation.push('Quests', {'Number': 13 })}
            > 
            <Text>▶</Text>
            
        </TouchableOpacity>
        <TouchableOpacity
            style= {styles.btnGo}
            onPress={() => (callSave())}
            >
            <Text>Confirmar</Text>
            </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
container:{
        width: "100%",
        height: "100%"
    },
    header:{
        width: "100%", 
        height: "10%", 
        backgroundColor:"#FFF",
        
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "center",
    },
    img:{
        width: "25%",
        height:"80%",
        resizeMode:'contain',
    },
    body:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: "#ededed" 
    },
    label:{
        marginTop: "5%",
        marginBottom: "5%"

    },
    lgInp:{
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        width: "80%",
        height: "60%"
    },
    btnBack:{
      transform: [{ rotateY: '180deg'}],
      color: 'white',
      fontSize: 20,
      backgroundColor: '#d8dbd7',
      width: 40,
      height: 40,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      position: 'absolute',
      top: '90%',
      left: '5%'
    },
    btnGo: {
      color: 'white',
      fontSize: 20,
      backgroundColor: '#57d959',
      width: 80,
      height: 40,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      position: 'absolute',
      top: '90%',
      left: '70%'
    },
    rbtCombo:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
})