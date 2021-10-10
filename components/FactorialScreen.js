import React, { useState } from 'react';
import {
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export const FactorialScreen = () => {

    const initialState = { num1: 0 }

    const [factorial, setFatorial] = useState(initialState);

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 15, fontWeight: 'bold' }}>Factorial de un número</Text>
            <View style={{ padding: 15 }}>
                <Text style={{ fontSize: 16, marginVertical: 5, fontWeight: 'bold' }}>Número</Text>
                <TextInput
                    style={{ height: 40, backgroundColor: '#EEEEEE', marginVertical: 5 }}
                    placeholder="Ingrese el número"
                    onChangeText={
                        (text) => {
                            setFatorial({
                                ...factorial,
                                num1: text
                            });
                        }
                    }
                />
                <Button
                    title="Calcular factorial"
                    onPress={() => {
                        let reg = /^[0-9]\d*$/;
                        if (reg.test(factorial.num1)) {
                            let factorial_resultado = 1;
                            if (parseInt(factorial.num1) === 0 || parseInt(factorial.num1) === 1) {
                                // No cambia
                            } else {
                                for (let i = parseInt(factorial.num1); i >= 1; i--) {
                                    factorial_resultado *= i;
                                }
                            }
                            alert('El factorial de ' + factorial.num1 + ' es: ' + factorial_resultado);
                        } else {
                            alert('Solo se aceptan datos númericos enteros positivos');
                        }
                    }}
                />
            </View>
        </View>
    );
}