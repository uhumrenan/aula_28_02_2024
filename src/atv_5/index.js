import {useState} from 'react';
import {View, Pressable, Text, TextInput} from 'react-native';

import styles from './styles';

export default function Atividade5() {

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotaol] = useState(false);
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState('');
    const [sinal, setSinal] = useState('');

    function soma(){
        setTotal(parseFloat(n1) + parseFloat(n2));
        setSinal('+');
    }

    function subtrai(){
        setTotal(parseFloat(n1) - parseFloat(n2));
        setSinal('-');
    }

    function multiplica(){
        setTotal(parseFloat(n1) * parseFloat(n2));
        setSinal('*');
    }

    function divide(){
        setTotal(parseFloat(n1) / parseFloat(n2));
        setSinal('/')
    }

    function limpa() {
        setN1(0);
        setN2(0);
        setTotal('');
        setSinal('');
    } 

    return (
    <View style={styles.container}>
        <Text style={styles.titulo}> Atividade 5 </Text>

        <Text style={styles.txtSaida}> Calculadora Básica </Text>

        <Text style={styles.textLabel}> 1º número </Text>
        <TextInput
            style={
                [
                    styles.txtEntrada,
                        isFocusN1 ?
                            {
                                borderColor:'#C51162',
                                outline: 'none',
                            }
                        :
                            {}
                ]
            }
            onFocus={() => setIsFocusN1(true)}  
            onBlur={() => setIsFocusN1(false)}  
            onChangeText={(num1) => setN1(num1)}
            value={n1}
            //keyboardType='numeric'

        />

       <Text style={styles.txtSaida}> {sinal} </Text>

        <Text style={styles.textLabel}> 2º número </Text>
        <TextInput
            style={
                [
                    styles.txtEntrada,
                        isFocusN2 ?
                        {
                            borderColor: '#C51162',
                            outline: 'none',
                        }
                    :
                    {}
                ]
            }
            onFocus={() => setIsFocusN2(true)}
            onBlur={() => setIsFocusN2(false)}
            onChangeText={(num2) => setN2(num2)}
            value={n2}
        />
        
        <Text style={[styles.txtSaida, {margin:0}]}> = </Text>

        <Text style={styles.textLabel}> Total </Text>
            <TextInput
                style={
                [
                    styles.txtEntrada,
                        isFocusTotal ?
                        {
                            borderColor:'#C51162',
                            outline:'none',
                        }
                    :
                        {}
                ]
            }
            onFocus={() => setIsFocusTotaol(true)}
            onBlur={() => setIsFocusTotaol(false)}
            editable={false}
            value={total ? parseFloat(total).toFixed(2) : '0.00'}
        />

            <View style={styles.alinhaBotao}>

        <Pressable
            onPress={() => soma()}
            style={
                ({pressed}) => pressed ?
                    [styles.button, styles.buttonTouch]
                :
                    styles.button
            }
        >
            <Text style={styles.textButton}> + </Text>
        </Pressable>
        
        <Pressable
            onPress={() => subtrai()}
            style={
                ({pressed}) => pressed ?
                    [styles.button, styles.buttonTouch]
                :
                    styles.button
            }
        >
            <Text style={styles.textButton}> - </Text>
        </Pressable>

        <Pressable
            onPress={() => multiplica()}
            style={
                ({pressed}) => pressed ?
                    [styles.button, styles.buttonTouch]
                :
                    styles.button
            }
        >
            <Text style={styles.textButton}> * </Text>
        </Pressable>

        <Pressable
            onPress={() => divide()}
            style={
                ({pressed}) => pressed ?
                    [styles.button, styles.buttonTouch]
                :
                    styles.button
            }
        >
            <Text style={styles.textButton}> / </Text>
        </Pressable>

        </View>    
        
        <Pressable
            onPress={() => limpa ()}
            style={
                ({pressed}) => pressed ?
                    [styles.button2, styles.buttonTouch]
                :
                    styles.button2
            }
        >
            <Text style={styles.textButton}> Zerar </Text>
        </Pressable>

        
        </View>

    );
}