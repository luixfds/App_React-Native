import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,Alert, TextInput, SafeAreaView } from 'react-native';
import firebase from './connFireBase'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function login({navigation}){
    const [User, setUser] = React.useState("");
    const [Pass, setPass] = React.useState(null);
    const database = firebase.firestore()
    const createAcc = () => {
        firebase.auth().createUserWithEmailAndPassword(User, Pass)
        .then((userCredential) => {
            let user = userCredential.user;
        })
        .catch((error) => {
            setErrorLogin(true)
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorMessage);  
        });
    }


    const authenticate = () =>{
        if(User !== null && Pass !== null ){
            firebase.auth().signInWithEmailAndPassword(User, Pass)
            .then(async(userCredential) => {
            
                let user = await userCredential.user;

                AsyncStorage.clear();
                await AsyncStorage.setItem("logedUser", user.email);
                
                setUser("");
                setPass("");
                navigation.push("Home")
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                Alert.alert(
                    "Login Falhou",
                    "Usuário ou senha inválido",
                    [
                    
                    { text: "OK"}
                    ]
                );
            });
        }else{
            Alert.alert(
                "Login Falhou",
                "Preencha Todos os campos",
                [
                
                { text: "OK" }
                ]
            );
        }
    }
    React.useEffect(() => {
        setUser("");
        setPass("");
    }, []);
    return(
        <SafeAreaView style={styles.container}>
            
            <Image style={styles.img2} source={require('../assets/imgs/suga-logo.png')}/>
            <Image style={styles.img} source={require('../assets/imgs/senai-logo.png')}/>
            <View style={styles.formData} >
                
                {/* <text style={styles.textLogin}>login</text> */}
                <TextInput placeholder="Usuário" type="text" name="userInput" style={styles.textUser} value={User} onChangeText={(User)=> setUser(User)} />
                <TextInput placeholder="Senha" secureTextEntry={true}  name="passInput" style={styles.textPass} value={Pass} onChangeText={(Pass)=> setPass(Pass)}/>
                <TouchableOpacity onPress={User !="" && Pass !="" ? () => authenticate() : () => Alert.alert("Login Falhou", "Preencha Todos os campos",[{text: "OK"}])} style={styles.loginEnterBtn}><Text style={styles.textLogin}>OK</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        height:'100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    img:{
        zIndex: 20,
        width: "30%",
        margin:0,
        height:"5%",
        top: "90%",
       
        resizeMode:'contain'
    },
    img2:{
        position:'absolute',
        zIndex: 20,
        width: "80%",
        margin:0,
        height:"30%",
        top: "10%",
       
        resizeMode:'contain'
    },
    formData:{
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
    textUser:{
 
        backgroundColor: '#e8e8e8',
        width: "80%",
        height: 60,
        borderRadius: 50,
        paddingStart: 15,
        fontSize: 20,
        marginBottom: 20
    },
    textPass:{
        backgroundColor: '#e8e8e8',
        width: "80%",
        height: 60,
        borderRadius: 50,
        paddingStart: 15,
        fontSize: 20,


    },
    loginEnterBtn:{
        position:'absolute',
        width: '80%',
        height: 50,
        backgroundColor: '#FF0000',
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        top: '70%',
        borderRadius: 50,
    },
    textLogin:{
        color: 'white',
    }
})