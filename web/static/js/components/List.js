import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
}

class List extends Component {
  // componentDidMount() {
  //   const list = this.refs.list;
  //   this.props.register(list)
  // }

  // remove(e) {
  //   e.preventDefault();
  //   const listId = this.props.list.id;
  //   const ref = this.refs.list;
  //   this.props.remove(listId, ref);
  // }

  render() {
    const { connectDragSource, isDragging } = this.props;
    isDragging && console.log('dragging!');
    const { id, title } = this.props.list;
    const cards = _.sortBy(this.props.list.cards, 'order');
    return connectDragSource(
      <div ref='list' className="list">
        {cards.map((card) =>
          <div key={card.id} className="card">{card.title}</div>
        )}
      </div>
    );
  }
};

export default List;
