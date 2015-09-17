const Spellbook = {
  createSpellbook(name = '') {
    return {id: (Math.random() + '').split('.')[1], name, spells: [] }; // TODO: Generate better UUIDS.
  },
  loadSpellbooks() {
    return localStorage.getItem('spellbooks') || {
      1: {id: 1, name: 'Book 1', spells: [1, 2]},
      2: {id: 2, name: 'Book 2', spells: [2, 3]},
      3: {id: 3, name: 'Book 3', spells: []}
    };
  }
};

export default Spellbook;
