import { View, Text, StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e3f2fd',
        padding: 18,
        borderRadius: 20,
    },

    titulo: {
        //margin: 24,
        fontSize: 30,
        fontWeight: 'bold',
        //textAlign: 'center',
        color: 'orange',
    },

    image: {
        width: '80%',
        resizeMode: 'center',
    }
}) ;

export default styles;