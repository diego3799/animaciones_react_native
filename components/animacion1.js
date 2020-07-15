import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';

const Animacion1 = () => {
  /**Begins at 0 because opacity 0 */
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      /**Value to reach */
      toValue: 1,
      /**Time to reach */
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <>
      <Animated.View
        style={{
          opacity: animacion,
        }}>
        <Text style={styles.texto}>Animacion 1</Text>
      </Animated.View>
    </>
  );
};
const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
export default Animacion1;
