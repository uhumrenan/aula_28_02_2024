import {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';

import styles from './styles';

export default function Atividade4() {

        const [txt1, setTxt1] = useState ('');
        const [txt2, setTxt2] = useState ('');
        const [txtTela, setTxtTela] = useState ('');
    
         
        function handleExibeTexto(){
            setTxtTela(`${txt1} ${txt2}`);
            //setTxtTela (txt1 + ' ' + txt2);
            setTxt1('');
            setTxt2('');
        }
    
        return (
           <View style={styles.container}>
                <Text style = {styles.titulo}>Atividade 4</Text>            
                            
            <View style={styles.unir}>
            <Text style = {styles.texto}>{txt1}</Text> 
            <Text style = {styles.texto}>{txt2}</Text> 
            </View>
           
            <Text style = {styles.textoname}>Nome</Text> 
           
                <TextInput 
                style = {styles.input}
                onChangeText={(valor) => setTxt1 (valor)}
                />
                                   
            <Text style = {styles.textoname}>Sobrenome</Text>    
            
                <TextInput 
                style = {styles.input}
                onChangeText={(vlr) => setTxt2 (vlr)}
                />
            

                <Pressable 
                style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
                onPress={() => handleExibeTexto()}
                >
                <Text style = {styles.txtBotao}>Exibir nome completo</Text>
                </Pressable>
      
    
            </View>
    
        );
    }


    
