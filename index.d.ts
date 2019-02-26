import * as React from 'react';

export interface UITreeProps {
  tree: Object;
  paddingLeft: number;
  renderNode: Function;
  onChange: Function;
  draggable?: boolean;
}

export default class UITree extends React.Component<UITreeProps, {}> {
}
