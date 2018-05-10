import React from 'react';
import SortableList from '@component/react-sortable/sortable-list';

export default class ReactSortable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4, 5, 6]
    };
  }
  render() {
    return (
        <SortableList
            items={this.state.items}
            onChange={(items) => {
                this.setState({ items });
            }}
        >
        </SortableList>
    )
  }
}