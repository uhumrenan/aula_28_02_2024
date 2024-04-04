import {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';

import styles from './styles';

export default function Atividade4() {

        const [txtDigitado, setTxtDigitado] = useState ('');
        const [txt2, setTxt2] = useState ('');
        const [txtTela, setTxtTela] = useState ('');
    
        function atualizaTextoHandle(txt){
            setTxtDigitado(txt);
        }
    
        function handleExibeTexto(){
            setTxtTela(txt2);
            setTxt2('');
        }
    
        return (
            <View style={styles.container}>
                <Text style = {styles.titulo}>Atividade 4</Text>            
                <Text style = {styles.texto}>{txt2}{txtTela}</Text>
    
                <TextInput 
                style = {styles.input}
                onChangeText={(valor) => setTxt2 (valor)}
                />
    
                  
                <Text style = {styles.texto}>{txtTela}</Text>
             
                <TextInput 
                style = {styles.input}
                onChangeText={(vlr) => setTxt2 (vlr)}
                />
    
                <Pressable 
                style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
                onPress={() => handleExibeTexto()}
                >
                <Text style = {styles.txtBotao}>Exibir texto</Text>
                </Pressable>
    
    
    
            </View>
    
        );
    }


    
