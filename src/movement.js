const MoveDot = (entities, {touches}) => {
  touches.filter(t => t.type === "move").forEach(touch => {
  let dot = entities[touch.id];
  if (dot && dot.position) {
    dot.position = [
      dot.position[0] + touch.delta.pageX,
      dot.position[1] + touch.delta.pageY
    ];
  }
  });
  return entities;
}

export {MoveDot}
