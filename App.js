import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Animacion1 from './components/animacion1';
import Animacion2 from './components/animacion2';
import Animacion3 from './components/animacion3';
import Animacion4 from './components/animacion4';
import Animacion5 from './components/animacion5';
import Animacion6 from './components/animacion6';
import Animacion7 from './components/animacion7';

const App = () => {
  return (
    <>
      <ScrollView style={styles.contenido}>
        <Animacion1/>
        <Animacion2/>
        <Animacion3/>
        <Animacion4/>
        <Animacion5/>
        <Animacion6/>
        <Animacion7/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 50,
    flex:1
  },
});

export default App;
