import stream from "mithril/stream";

export default ({ h, k, Shadow }) => ({
  oninit: vnode => {
    const z = stream(1);
    Object.assign(vnode.state, {
      z,
      redrawOnUpdate: stream.merge([z]) // for React
    });
  },
  view: vnode => {
    const state = vnode.state;
    const z = state.z();
    return h("div", null, [
      h(".absolute.absolute--fill", {
        [k.onclick]: () => state.z((z + 1) % 6)
      }, "Click me"),
      h(Shadow, {
        animated: true,
        z
      })
    ]);
  }
});
