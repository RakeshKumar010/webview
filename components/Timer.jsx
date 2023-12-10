import React, {useState, useEffect, useContext} from 'react';
import {Text, View} from 'react-native';
import { MyContext } from '../App';

const Timer = () => {
    const value = useContext(MyContext)
    const [timer, serTimer]=useState(true)
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
    if(seconds==0){
        serTimer(false)
    }
  }, [seconds]);

  return (
    <View
      style={{
        position: 'absolute',
        top: 2,
        right: 2,
        width: 50,
        height: 50,
        textAlign:'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 200,
      }}>
      {timer?<Text
        style={{
          color: '#ffff',
          fontSize: 22,
      
        }}>
        {seconds}
      </Text>:
      <Text onPress={()=>{
        value.setShow(true)
      }}
        style={{
          color: '#ffff',
          fontSize: 22,
      
        }}>
        X
      </Text>}
      
    </View>
  );
};

export default Timer;
