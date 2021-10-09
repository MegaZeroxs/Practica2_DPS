import React, {useState} from 'react';
import {
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export const RestaScreen = () => {

    const initialState = {
        num1: 0,
        num2: 0,
        total: 0
    }
    const [resta, setResta] = useState(initialState);

    return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 15 ,fontWeight: 'bold'}}>Resta de dos números</Text>
            <View style={{padding: 15}}>
                <Text style={{fontSize: 16, marginVertical: 5 ,fontWeight: 'bold'}}>Primer número</Text>
                <TextInput
                    style={{ height: 40, backgroundColor: '#EEEEEE',marginVertical: 5 }}
                    placeholder="Ingrese el primer número"
                    onChangeText={
                        (text) => {
                            setResta({
                                ...resta,
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
                            setResta({
                                ...resta,
                                num2: text
                            });
                        }
                    }
                />
                <Button
                    title="Calcular resta"
                    onPress={() => {
                        let reg = /^-?\d+\.?\d*$/;
                        if(reg.test(resta.num1) && reg.test(resta.num2)){
                            let valor_Resta = (parseFloat(resta.num1) - parseFloat(resta.num2));
                            alert('La resta de los dos números es: ' + valor_Resta);
                        }else{
                            alert('Solo se aceptan datos númericos');
                        }
                    }}
                />
            </View>
        </View>
    );
}