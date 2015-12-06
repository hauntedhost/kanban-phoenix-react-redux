// action types

export const CREATE_LIST  = 'CREATE_LIST';
export const DESTROY_LIST = 'DESTROY_LIST'
export const REORDER_LISTS = 'REORDER_LISTS';

export const CREATE_CARD   = 'CREATE_CARD';
export const DESTROY_CARD  = 'DESTROY_CARD';
export const REORDER_CARDS = 'REORDER_CARDS';

// action creators

export function createList(title) {
  return { type: CREATE_LIST, title };
}

export function destroyList(listId) {
  return { type: DESTROY_LIST, listId };
}

export function reorderLists(listIds) {
  return { type: REORDER_LISTS, listIds };
}

export function createCard(title, listId) {
  return { type: CREATE_CARD, { title: title, listId: listId }};
}

export function destroyCard(cardId) {
  return { type: DESTROY_CARD, cardId };
}

// example cards array:
// [{ id: 2, listId: 1 }, { id: 1, listId: 1 }, ... ]
export function reorderCards(cards) {
  return { type: REORDER_CARDS, cards };
}
