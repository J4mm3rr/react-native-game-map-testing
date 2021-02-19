/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {PureComponent} from 'react';
import {AppRegistry, StyleSheet, StatusBar} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import {Dot, Wall} from './src/renderers';
import {MoveDot, MoveWall} from './src/movement';

class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveDot, MoveWall]}
        entities={{
          1: {position: [40, 200], radius: 20, renderer: <Dot />},
          2: {position: [120, 600], width: 40, height: 480, renderer: <Wall />},
          3: {position: [300, 300], width: 180, height: 40, renderer: <Wall />},
          4: {position: [320, 500], width: 170, height: 50, renderer: <Wall />},
        }}>
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;
