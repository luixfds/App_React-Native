import firebase from './connFireBase'
import AsyncStorage from '@react-native-async-storage/async-storage';
let en = "false";
let data = {};
export default async function setDataDB(){
    
    await AsyncStorage.getItem("anonymous").then(value => {
        en = value
    })
    for(let i = 0; i <= 13; ++i){
        await AsyncStorage.getItem("check" + i).then(value => {
        if(value != null){
            let n = "check"+ i;
            data["opção" + i] = value
        }})
        await AsyncStorage.getItem("valCheck"+ i).then(value => {
        if(value != null){
            let n = "valCheck"+ i;
            data["resposta"+ i] = value
        }})
        await AsyncStorage.getItem("comment"+ i).then(value => {
        if(value != null){
            let n = "comment"+ i;
            data["comentario"+ i] = value
        }})
    }
    
    await AsyncStorage.getItem("comment").then(value => {
        if(value != null){
            data["finaComment"] = value
        }
    })
    
    await AsyncStorage.getItem("logedUser").then(value => {
        if (en === "false"){
            
            data['appraiser'] = value;
        }else{
             data['appraiser'] = "anonymous";
        }
    })
    firebase.database().ref('avaliacoes/').push(data)
};