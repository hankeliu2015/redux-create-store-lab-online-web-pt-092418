// import candyReducer from '../reducers/candyReducer'
// import countReducer from '../reducers/countReducer'

export default function createStore(reducer) {
  // add your code here
  let state;
  function dispatch(action) {
    state = reducer(state, action)
    render();
  };

  function getState() {
    return state;
  };

  dispatch({type: '@@INIT'})

  return {
    dispatch, getState
  };
}

function render() {
  const container = document.getElementById('container');
}

// let candyStore = createStore(candyReducer)
// candyStore.dispatch({type: '@@INIT'})
// let countStore = createStore(countReducer)
// countStore.dispatch({type: '@@INIT'})
