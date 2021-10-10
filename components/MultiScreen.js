import React, {useState} from 'react';
import {
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export const MultiScreen = () => {

    const initialState = {
        num1: 0,
        num2: 0,
        total: 0
    }
    const [multi, setMulti] = useState(initialState);

    return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 15 ,fontWeight: 'bold'}}>Multiplicación de dos números</Text>
            <View style={{padding: 15}}>
                <Text style={{fontSize: 16, marginVertical: 5 ,fontWeight: 'bold'}}>Primer número</Text>
                <TextInput
                    style={{ height: 40, backgroundColor: '#EEEEEE',marginVertical: 5 }}
                    placeholder="Ingrese el primer número"
                    onChangeText={
                        (text) => {
                            setMulti({
                                ...multi,
                                num1: text
                            });
                        }
                    }
                />
                <Text style={{fontSize: 16, marginVertical: 5 ,fontWeight: 'bold'}}>Segundo número</Text>
                <TextInput
                    style={{ height: 40, backgroundColor: '#EEEEEE', marginBottom: 20 }}
                    placeholder="Ingrese el segundo número"
                    onChangeText={
                        (text) => {
                            setMulti({
                                ...multi,
                                num2: text
                            });
                        }
                    }
                />
                <Button
                    title="Calcular multiplicación"
                    onPress={() => {
                        let reg = /^-?\d+\.?\d*$/;
                        if(reg.test(multi.num1) && reg.test(multi.num2)){
                            let multi_resultado = (parseFloat(multi.num1) * parseFloat(multi.num2));
                            alert('La multiplicación de los dos números es: ' + multi_resultado);
                        }else{
                            alert('Solo se aceptan datos númericos');
                        }
                    }}
                />
            </View>
        </View>
    );
}