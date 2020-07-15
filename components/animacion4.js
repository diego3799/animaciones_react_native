import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Animated, View} from 'react-native';

const Animacion4 = () => {
  /**Begins at 0 because opacity 0 */
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      /**Value to reach */
      toValue: 360,
      /**Time to reach */
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  const estiloAnimacion = {
    transform: [{rotate: interpolacion}],
  };
  return (
    <>
      <View>
        <Animated.View style={[styles.caja, estiloAnimacion]}></Animated.View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});
export default Animacion4;
