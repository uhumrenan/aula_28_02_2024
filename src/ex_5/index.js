import {useState} from 'react';
import {View, Pressable, Text, TextInput} from 'react-native';

import styles from './styles';

export default function Exemplo5() {

    const [isFocusN1, steIsFocusN1] = useState(false);
    const [isFocusN2, steIsFocusN2] = useState(false);
    const [isFocusTotal, steIsFocusTotaol] = useState(false);
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState('');

    function soma(){
        setTotal(parseFloat(n1) + parseFloat(n2));
    }

    return (
    <View style={styles.container}>
        <Text style={styles.titulo}> Exemplo 5 </Text>

        <Text style={styles.txtSaida}> Calculadora Básica </Text>

        <Text style={styles.textLabel}> 1º número </Text>
        <TextInput
            style={
                [
                    styles.txtEntrada,
                        isFocusN1 ?
                            {
                                borderColor:'#C51162',
                                outline: 'nome',
                            }
                        :
                            {}
                ]
            }
            onFocus={=() => steIsFocusN1(true)}  
            onBlur={() => steIsFocusN1(false)}  
            onChangeText={(num1) => setN1(num1)}
            value={n1}
            //keyboardType='numeric'

        />

        
    </View>
    );
}