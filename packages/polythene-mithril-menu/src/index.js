import { samStateComponent, viewComponent, renderer as h } from "polythene-mithril-base";
import { CoreMenu as component } from "polythene-core-menu";
import { Shadow } from "polythene-mithril-shadow";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Shadow }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Shadow }));

const MenuInstance = viewComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

export const Menu = samStateComponent(Object.assign(
  {},
  {
    getInitialState: component.getInitialState,
    getUpdates: component.getUpdates,
    renderView: vnode => {
      const model = vnode.state.model;
      if (!model.visible && !model.transitioning && vnode.attrs.show) {
        vnode.state.updates.setVisible(true);
      }
      return model.visible
        ? h(MenuInstance, Object.assign(
          {},
          vnode.attrs,
          {
            model,
            updates: vnode.state.updates
          }
        ))
        : h("span", { className: component.classes.placeholder });
    }
  }
));

Menu.theme = component.theme;
