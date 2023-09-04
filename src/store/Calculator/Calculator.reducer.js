
export default function(state = 0, action) {
  switch(action.type) {
    case 'TEST':
      return action.payload[0] + action.payload[1] 

    default:
      return state;
  }
}