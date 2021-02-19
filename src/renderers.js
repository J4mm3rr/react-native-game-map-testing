import React, {PureComponent} from "react";
import { Stylesheet, View } from "react-native";

class Dot extends PureComponent {
  render() {
    const x = this.props.position[0] - this.props.radius / 2;
    const y = this.props.position[1] - this.props.radius / 2;
    return (
      <View style={[styles.dot, { 
        left: x, 
        top: y, 
        width: this.props.radius * 2,
        height: this.props.radius * 2,
        borderRadius: this.props.radius * 2,
      }]} />
    );
  }
}

const styles = {
  dot: {
    borderColor: "#CCC",
    borderWidth: 4,
    backgroundColor: "red",
    position: "absolute"
  }
}

export { Dot }
