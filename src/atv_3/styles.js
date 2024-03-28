import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    botao: {
        width: '70%',
        padding: 10,
        margin: 20,
        backgroundColor: '#000',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    },
    txtBotao: {
        fontSize: 25,
        color: '#fafafa',
    },
    containerLadoalado: {
        //borderWidth: 3,
        width: '100%',
        //height: 200,
        marginTop: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    botaoContainer: {
        width: '25%',
        
    },

});

export default styles;