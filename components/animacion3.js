import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Animated, View} from 'react-native';

const Animacion3 = () => {
  /**Begins at 0 because opacity 0 */
  const [animacion] = useState(new Animated.Value(14));
  useEffect(() => {
    Animated.timing(animacion, {
      /**Value to reach */
      toValue: 40,
      /**Time to reach */
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <>
      <View>
        <Animated.Text
          style={[
            styles.texto,
            {
              fontSize: animacion,
            },
          ]}>
          Animacion 3
        </Animated.Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
export default Animacion3;
