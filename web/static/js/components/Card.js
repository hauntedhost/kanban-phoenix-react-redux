import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

const ItemTypes = {
  CARD: 'card'
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.card.id,
      index: props.index
    };
  }
}

const handleDragSource = function(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const handleDropTarget = function(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex == hoverIndex) {
      return;
    }

    const hoverRect = findDOMNode(component).getBoundingClientRect();
    const hoverMidY = (hoverRect.bottom - hoverRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMidY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMidY) {
      return;
    }

    props.moveCard(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
}

class Card extends Component {
  render() {
    const { id, title } = this.props.card;
    const { connectDragSource, connectDropTarget, isDragging } = this.props;
    const style = { opacity: isDragging ? 0 : 1 };
    return connectDragSource(connectDropTarget(
      <div
        key={id}
        style={style}
        className="card">{title}</div>
    ));
  }
};

Card = DropTarget(ItemTypes.CARD, cardTarget, handleDropTarget)(Card);
Card = DragSource(ItemTypes.CARD, cardSource, handleDragSource)(Card);
export default Card;
