import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';
import List from './List'
import Card from './Card'

class App extends Component {
  constructor(props) {
    super(props);

    const cards = [
      {
        id: 1,
        title: 'orange'
      },
      {
        id: 2,
        title: 'mango'
      },
      {
        id: 3,
        title: 'blueberry'
      }
    ];

    // const lists = [
    //   {
    //     id: 1,
    //     title: 'fruits',
    //     order: 2,
    //     cards: [
    //       {
    //         id: 1,
    //         order: 3,
    //         title: 'orange'
    //       },
    //       {
    //         id: 2,
    //         order: 1,
    //         title: 'mango'
    //       },
    //       {
    //         id: 3,
    //         order: 3,
    //         title: 'blueberry'
    //       }
    //     ]
    //   },
    //   {
    //     id: 2,
    //     order: 1,
    //     title: 'languages',
    //     cards: [
    //       {
    //         id: 4,
    //         order: 1,
    //         title: 'ruby'
    //       },
    //       {
    //         id: 5,
    //         order: 2,
    //         title: 'elixir'
    //       }
    //     ]
    //   }
    // ]

    // const drake = dragula();
    // drake.on('drop', this.handleDrop);

    // this.state = { lists: lists, drake: drake };
    // this.state = { lists: lists };
    this.state = { cards: cards };
  }

  // handleDrop(el, target, source, sibling) {
  //   debugger;
  // }

  // registerList(ref) {
  //   const drake = this.state.drake;
  //   drake.containers.push(ref);
  // }

  // unregisterList(ref) {
  //   const drake = this.state.drake;
  //   drake.containers = _.reject(drake.containers, (c) => c == ref);
  // }

  // removeList(listId, ref) {
  //   this.unregisterList(ref);
  //   const lists = _.reject(this.state.lists, (l) => l.id == listId);
  //   this.setState({ lists: lists });
  // }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
  }

  render() {
    // const cards = _.sortBy(this.state.cards, 'order');
    const { cards } = this.state;
    return (
      <div className="list">
        {cards.map((card, index) =>
          <Card
            key={card.id}
            card={card}
            index={index}
            moveCard={this.moveCard.bind(this) }/>
        )}
      </div>
    );

    // const lists = _.sortBy(this.state.lists, 'order');
    // return (
    //   <div>
    //     {lists.map((list, index) =>
    //       <List
    //         key={list.id}
    //         list={list}
    //         moveCard={this.moveCard.bind(this) }/>
    //         // remove={this.removeList.bind(this)}
    //         // register={this.registerList.bind(this)} />
    //     )}
    //   </div>
    // );
  }
};

// export default App;
export default DragDropContext(HTML5Backend)(App);
