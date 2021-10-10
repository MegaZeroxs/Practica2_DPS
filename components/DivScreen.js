import React, {useState} from 'react';
import {
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export const DivScreen = () => {

    const initialState = {
        num1: 0,
        num2: 0,
        total: 0
    }
    const [div, setDiv] = useState(initialState);

    return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 15 ,fontWeight: 'bold'}}>División de dos números</Text>
            <View style={{padding: 15}}>
                <Text style={{fontSize: 16, marginVertical: 5 ,fontWeight: 'bold'}}>Dividendo</Text>
                <TextInput
                    style={{ height: 40, backgroundColor: '#EEEEEE',marginVertical: 5 }}
                    placeholder="Ingrese el primer número"
                    onChangeText={
                        (text) => {
                            setDiv({
                                ...div,
                                num1: text
                            });
                        }
                    }
                />
                <Text style={{fontSize: 16, marginVertical: 5 ,fontWeight: 'bold'}}>Divisor</Text>
                <TextInput
                    style={{ height: 40, backgroundColor: '#EEEEEE', marginBottom: 20 }}
                    placeholder="Ingrese el segundo número"
                    onChangeText={
                        (text) => {
                            setDiv({
                                ...div,
                                num2: text
                            });
                        }
                    }
                />
                <Button
                    title="Calcular división"
                    onPress={() => {
                        let reg = /^-?\d+\.?\d*$/;
                        if(reg.test(div.num1) && reg.test(div.num2)){
                            if(parseFloat(div.num2) === 0){                                
                                alert('El divisor no puede ser 0');
                            }else{
                                let division_resultado = (parseFloat(div.num1) / parseFloat(div.num2));
                                alert('La división de los dos números es: ' + division_resultado);
                            }
                        }else{
                            alert('Solo se aceptan datos númericos');
                        }
                    }}
                />
            </View>
        </View>
    );
}