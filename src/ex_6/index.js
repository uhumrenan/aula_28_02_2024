import { useState} from 'react';
import { View, Text } from 'react-native';
import Input from './input';
import styles from './styles';

import Botao from './botao';


export default function Exemplo6() {


   const [peso, setPeso] = useState(0.00);
   const [altura, setAltura] = useState(0.00);
   const [imc, setImc] = useState(0.00);
   const [mensagem, setMensagem] = useState('');
   const mensErro = 'Valores inseridos de forma incorreta!';

   function calculaImc () {
    const tmpImc= peso / (altura*altura)
  if (isNaN(tmpImc) || !isFinite(tmpImc)){
    setImc(0);
   setMensagem(mensErro);
  } else {
    setImc(tmpImc);
   if (tmpImc <18.5) {
    setMensagem ('Abaixo do peso');
   }else if (tmpImc >= 18.5 && tmpImc <=24.9) {
    setMensagem ('Peso Normal');
   }else if (tmpImc >= 25 && tmpImc <= 29.9) {
    setMensagem ('Sobrepeso');
   }else if (tmpImc >=30 && tmpImc <= 34.9) {
    setMensagem ('Obesidade Grau 1');
   }else if (tmpImc >=35 && tmpImc <= 39.9) {
    setMensagem ('Obesidade Grau 2');
   } else {
    setMensagem ('Obesidade Grau 3');
   }
}
  }

    return (


        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input
                placeholder='Peso'
                valor={peso}
                atualizaValor={setPeso}
                />


                <Input
                placeholder='Altura'
                valor={altura}
                atualizaValor={setAltura}
                />


            </View>


            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>


            <Text style={[styles.txtMensagem, styles.tmpImc]}>{mensagem}</Text>


            <Botao calcular={calculaImc}>Calcular</Botao>

        </View>        


    );
}
