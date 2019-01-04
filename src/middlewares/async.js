export default ({ dispatch }) => next => action => {
  // Check to see if the action has a Promise on it's payload property
  if (!action.payload || !action.payload.then) {
    // If not, forward to next middleware
    return next(action);
  }

  // If so, wait for it to resolve
  // get it's data, then create a new action
  // and send back thru middleware chain
  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
