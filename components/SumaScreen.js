import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export const SumaScreen = () => {

    const initialState = {
        num1: 0,
        num2: 0,
        total: 0
    }
    const [sum, setSum] = useState(initialState);

    return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 15 ,fontWeight: 'bold'}}>Sumatoria de dos números</Text>
            <View style={{padding: 15}}>
                <Text style={{fontSize: 16, marginVertical: 5 ,fontWeight: 'bold'}}>Primer número</Text>
                <TextInput
                    style={{ height: 40, backgroundColor: '#EEEEEE',marginVertical: 5 }}
                    placeholder="Ingrese el primer número"
                    onChangeText={
                        (text) => {
                            setSum({
                                ...sum,
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
                            setSum({
                                ...sum,
                                num2: text
                            });
                        }
                    }
                />
                <Button
                    title="Calcular sumatoria"
                    onPress={() => {
                        let reg = /^-?\d+\.?\d*$/;
                        if(reg.test(sum.num1) && reg.test(sum.num2)){
                            let suma = (parseFloat(sum.num1) + parseFloat(sum.num2));
                            alert('La sumatoria de los dos números es: ' + suma);
                        }else{
                            alert('Solo se aceptan datos númericos');
                        }
                    }}
                />
            </View>
        </View>
    );
}