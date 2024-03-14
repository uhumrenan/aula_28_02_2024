//import styles from '../atv_1/styles';
import { Text, View, Image} from 'react-native';

import Ola from './ola';

import styles from './styles';

import logo from '../../assets/002-1-react-native.png'

export default function Atividade1 () { 
    
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.image}/>
            <Text style={styles.titulo}>
                Atividade 1
            </Text>
            <Ola>José Paulo</Ola> 
            <Ola>Arthur</Ola> 
        </View>
    );
}