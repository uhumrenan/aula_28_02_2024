import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
backgroundColor: '#FF80AB',
padding: 8,
width: '100%',
borderRadius: 20,
},
titulo: {
margin: 6,
fontSize: 30,
fontweight: 'bold',
textAlign: 'center',
color: '#C51162',
},
txtSaida: {
margin: 6,
fontSize: 22,
fontweight: 'bold',
textAlign: 'center',
color: '#E91E63',
},
txtEntrada: {
borderWidth: 4,
textAlign: 'center',
FontSize: 22,
borderColor: '#E91E63',
// height: 50,
color: '#E53935',
borderRadius: 10,
marginTop: 10,
padding: 10
},
button: {
    backgroundColor: '#E91E63',
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    width: '20%',
    },
    button2: {
    backgroundColor: '#E91E63',
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
        },
    buttonTouch: {
    backgroundColor: '#C51162',
    },
    textButton: {
    fontSize: 30,
    color: '#FF80AB',
    textAlign: 'center',
    },
    textLabel:{
    fontSize: 16,
    fontweight: 'bold',
    color: '#C51162',
    },
    alinhaBotao:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        },
});
    
    export default styles;