import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import Mensagem from './src/ex_2';
//import Atividade1 from './src/atv_1';
//import Exemplo_3 from './src/ex_3';
//import Atividade_3 from './src/atv_3';
//import Atividade4 from './src/atv_4';
//import Atividade4 from './src/atv_4professor';
//import Atividade5 from './src/atv_5';

import Exemplo6 from './src/ex_6';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo6/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});