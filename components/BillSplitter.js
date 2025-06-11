import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';

export default function BillSplitter() {
    const [total, setTotal] = useState('');
    const [people, setPeople] = useState('');
    const [tip, setTip] = useState('');
    const [result, setResult] = useState(null);

    const calculateSplit = () => {
        const totalNum = parseFloat(total);
        const peopleNum = parseInt(people);
        const tipNum = parseFloat(tip) || 0;

        if (isNaN(totalNum) || isNaN(peopleNum) || peopleNum <= 0) {
            setResult('Preencha os dados corretamente.');
            return;
        }

        const totalWithTip = totalNum + tipNum;
        const perPerson = (totalWithTip / peopleNum).toFixed(2);

        setResult(`Cada pessoa deve pagar R$ ${perPerson}`);
    };

    return (
        <View style={styles.card}>
            <TextInput
                style={styles.input}
                placeholder="Valor total da conta (R$)"
                keyboardType="numeric"
                value={total}
                onChangeText={setTotal}
            />
            <TextInput
                style={styles.input}
                placeholder="Número de pessoas"
                keyboardType="numeric"
                value={people}
                onChangeText={setPeople}
            />
            <TextInput
                style={styles.input}
                placeholder="Gorjeta (opcional)"
                keyboardType="numeric"
                value={tip}
                onChangeText={setTip}
            />
            <View style={styles.button}>
                <Button title="Calcular" onPress={calculateSplit} color="#4CAF50" />
            </View>
            {result && <Text style={styles.result}>{result}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    button: {
        width: '100%',
        marginTop: 10,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
});
