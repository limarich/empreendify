
// 1º indice: Qual o formulário
// 2º indice: Qual página do formulário
// 3º indice: Qual a questão específica

import { forms } from '../../pages/Form/initialValue';

export default function(state = forms, action) {
  switch(action.type) {
    case 'ALTER_FORMS':
      state
        [action.payload.indexes[0]].pages
        [action.payload.indexes[1]]
        [action.payload.indexes[2]]
      .answer = action.payload.value;

      console.log(state);
      return state;
    
    case 'UPDATE_COMPLETED_FORMS_NUMBER':
      let totalPages = state[action.payload.formIndex].totalPages;

      if(action.payload.value <= totalPages && action.payload.value >= 0) {
        state[action.payload.formIndex].completedPages = action.payload.value;
      }

      console.log(state);
      return state;

    default:
      return state;
  }
}