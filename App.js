/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {PureComponent, useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import {Dot, Wall} from './src/renderers';
import {MoveDot, MoveWall} from './src/movement';
import Matter from 'matter-js';
import Box from './src/box';

let globalVar = {};

const {width, height} = Dimensions.get('screen');
const boxSize = Math.trunc(Math.max(width, height) * 0.075);

const initialBox = Matter.Bodies.rectangle(
  width / 2,
  height / 2,
  boxSize,
  boxSize,
);
const floor = Matter.Bodies.rectangle(
  width / 2,
  height - boxSize / 2,
  width,
  boxSize,
  {isStatic: true},
);

const engine = Matter.Engine.create({enableSleeping: false});
const world = engine.world;
Matter.World.add(world, [initialBox, floor]);

const Physics = (entities, {time}) => {
  let engine = entities.physics.engine;
  Matter.Engine.update(engine, time.delta);
  return entities;
};

Matter.Events.on(engine, 'collisionStart', ({pairs}) => {
  pairs.forEach(({bodyA, bodyB}) => {
    Alert.alert(
      `Collision Detected: ${bodyA.label} collided with ${bodyB.label}!`,
    );
  });
});

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[Physics]}
        entities={{
          physics: {
            engine: engine,
            world: world,
          },
          initialBox: {
            body: initialBox,
            size: [boxSize, boxSize],
            color: 'green',
            renderer: Box,
          },
          floor: {
            body: floor,
            size: [width, boxSize],
            color: 'red',
            renderer: Box,
          },
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
