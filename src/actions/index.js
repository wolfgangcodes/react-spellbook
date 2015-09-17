import spells from '../models/spells';

// Actions on /
export const LOAD_SPELLBOOKS = 'LOAD_SPELLBOOKS';
export const EDIT_SPELLBOOK_NAME = 'EDIT_SPELLBOOK_NAME';
export const SET_CURRENT_SPELLBOOK = 'SET_CURRENT_SPELLBOOK';

// Actions on /spellbook
export const LOAD_SPELLS = 'LOAD_SPELLS';
export const SELECT_LEVEL_FILTER = 'SELECT_LEVEL_FILTER';
export const SELECT_CLASS_FILTER = 'SELECT_CLASS_FILTER';
export const CLEAR_LEVEL_FILTER = 'CLEAR_LEVEL_FILTER';
export const CLEAR_CLASS_FILTER = 'CLEAR_CLASS_FILTER';
export const ADD_SPELL_TO_SPELLBOOK = 'ADD_SPELL_TO_SPELLBOOK';
export const REMOVE_SPELL_FROM_SPELLBOOK = 'REMOVE_SPELL_FROM_SPELLBOOK';
export const PRINT_SPELLBOOK = 'PRINT_SPELLBOOK';

// action Creatorss
export function loadSpellbooks() {
  return {
    type: LOAD_SPELLBOOKS
  };
}

export function editSpellbookname(name) {
  return { type: LOAD_SPELLBOOKS, name};
}

export function setCurrentSpellbook(spellbookId) {
  return {
    type: SET_CURRENT_SPELLBOOK,
    currentSpellbook: spellbookId
  };
}

export function loadSpells() {
  return {
    type: LOAD_SPELLS,
    spells: spells
  };
}

export function addLevelFilter(spellLevel) {
  return {
    type: SELECT_LEVEL_FILTER,
    spellLevel
  };
}

export function clearLevelFilter() {
  return {
    type: CLEAR_LEVEL_FILTER,
    spellLevel: null
  };
}

export function addClassFilter(className) {
  return {
    type: SELECT_CLASS_FILTER,
    className
  };
}

export function clearClassFilter() {
  return {
    type: CLEAR_CLASS_FILTER,
    className: null
  };
}

export function addSpellToSpellbook(spell) {
  return {
    type: ADD_SPELL_TO_SPELLBOOK,
    spell
  };
}

export function removeSpellFromSpellbook(spell) {
  return {
    type: REMOVE_SPELL_FROM_SPELLBOOK,
    spell
  };
}

export function printSpellbook(spellbook) {
  return {
    type: PRINT_SPELLBOOK,
    spellbook
  };
}
