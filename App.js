/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {PureComponent} from 'react';
import { AppRegistry, StyleSheet, StatusBar } from 'react-native'
import { GameEngine } from "react-native-game-engine";
import { Dot } from "./src/renderers";
import { MoveDot } from "./src/movement";

class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine style={styles.container} systems={[MoveDot]} entities={{1: {position: [40,200],radius: 20, renderer: <Dot />}}}>
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

export default App;
