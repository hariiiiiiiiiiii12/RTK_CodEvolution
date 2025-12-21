const store = require('./app/store');
const { fetchUsers } = require('./features/user/userSlice');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions =
  require('./features/icecream/icecreamSlice').icecreamActions;

console.log(`Initial State: ${JSON.stringify(store.getState())}`);

const unsubscribe = store.subscribe(() => {
  // Uncomment this log statement to see logger middleware in action
  console.log(`Updated State: ${JSON.stringify(store.getState())}`);
});

store.dispatch(fetchUsers());
/*
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());

store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());

store.dispatch(icecreamActions.restocked(3));
*/
// unsubscribe();
