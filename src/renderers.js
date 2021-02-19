import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';

class Dot extends PureComponent {
  render() {
    const x = this.props.position[0] - this.props.radius / 2;
    const y = this.props.position[1] - this.props.radius / 2;
    return (
      <View
        style={[
          styles.dot,
          {
            left: x,
            top: y,
            width: this.props.radius * 2,
            height: this.props.radius * 2,
            borderRadius: this.props.radius * 2,
          },
        ]}
      />
    );
  }
}

class Wall extends PureComponent {
  render() {
    const x = this.props.position[0] - this.props.width / 2;
    const y = this.props.position[1] - this.props.height / 2;
    return (
      <View
        style={[
          styles.wall,
          {
            left: x,
            top: y,
            width: this.props.width,
            height: this.props.height,
          },
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  dot: {
    borderColor: '#CCC',
    borderWidth: 4,
    backgroundColor: 'pink',
    position: 'absolute',
  },
  wall: {
    borderColor: 'red',
    borderWidth: 6,
    backgroundColor: 'black',
    position: 'absolute',
  }
});

export {Wall, Dot};
