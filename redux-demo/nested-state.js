const redux = require('redux');
const produce = require('immer').produce;

const initialState = {
  name: 'Hari',
  address: {
    street: 'Chidambaranathan Street',
    city: 'Nagercoil',
    state: 'Tamil Nadu',
  },
};

// Action Type
const STREET_UPDATED = 'STREET_UPDATED';

// Action Creator
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => { // state is the current state
        draft.address.street = action.payload; // Seems as if we are directly mutating the state
      });

    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log(`Initial State : ${store.getState()}`);
const unsubscribe = store.subscribe(() => {
  console.log(`Updated State: ${store.getState()}`);
});
store.dispatch(updateStreet('Test Street'));
unsubscribe();
