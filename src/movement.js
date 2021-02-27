const MoveDot = (entities, {touches}) => {
  touches
    .filter((t) => t.type === 'move')
    .forEach((touch) => {
      let dot = entities[1];
      if (dot && dot.position) {
        dot.position = [
          dot.position[0] + touch.delta.pageX,
          dot.position[1] + touch.delta.pageY,
        ];
      }
    });
  return entities;
};

const MoveWall = (entities, {touches}) => {
  let wall = entities[2];
  if (wall && wall.position) {
    wall.position = [wall.position[0], wall.position[1] + 0.1];
  }
  return entities;
};

export {MoveDot, MoveWall};
