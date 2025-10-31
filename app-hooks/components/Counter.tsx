import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function Counter () {
    const [quantity,setQuantity]=useState(0); 

    function handleCount(){
        setQuantity(quantity+1)
    }

    useEffect(()=> {
       // alert("Voce pressionou o botão!")
        if (quantity===5){
            console.log("Contador atingiu o meio do caminho!")
        }
    },[quantity])

 return (
   <View>
    <Text>
      {quantity}
    </Text>
    <button onClick={handleCount}>
        +
    </button>
   </View>
  );
}
