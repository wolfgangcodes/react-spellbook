import {combineReducers} from 'redux';
import Spellbook from '../models/spellbook.js';
// import {Spells} from './spells.js';

import {
  LOAD_SPELLBOOKS,
  // EDIT_SPELLBOOK_NAME,
  // CREATE_NEW_SPELLBOOK,
  SET_CURRENT_SPELLBOOK
} from '../actions';

// const initialState = {
//   currentSpellbook: null,
//   newSpellbookName: '',
//   spellbooks: {},
//   spells: {
//     1: {id: 1, name: 'Spell 1', desciption: 'Desc 1', isSelected: false},
//     2: {id: 2, name: 'Spell 2', desciption: 'Desc 2', isSelected: false},
//     3: {id: 3, name: 'Spell 3', desciption: 'Desc 3', isSelected: true},
//     4: {id: 4, name: 'Spell 4', desciption: 'Desc 4', isSelected: true}
//   },
//   filters: {
//     spellLevel: null,
//     className: null
//   }
// };


function loadSpellbooks(state = {}, action) {
  switch (action.type) {
  case LOAD_SPELLBOOKS:
    return Spellbook.loadSpellbooks();
  default:
    return state;
  }
}

// function editSpellbookName(state = {}, action) {
//   switch (action.type) {
//   case EDIT_SPELLBOOK_NAME:
//     return {...state, name: action.name };
//   default:
//     return state;
//   }
// }
//
// function createSpellbook(state = {}, action) {
//   switch (action.type) {
//   case CREATE_NEW_SPELLBOOK:
//     // TODO: sync this spellbook with localStorage
//     return {
//       ...state,
//       spellbooks: state.spellbooks.concat(Spellbooks.createSpellbook(action.name))
//     };
//   default:
//     return state;
//   }
// }
//
function setCurrentSpellbook(state = null, action) {
  switch (action.type) {
  case SET_CURRENT_SPELLBOOK:
    return action.currentSpellbook;
  default:
    return state;
  }
}

export default combineReducers({spellbooks: loadSpellbooks, currentSpellbook: setCurrentSpellbook});
