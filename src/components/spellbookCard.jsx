import React, { PropTypes } from 'react';

const SpellbookCard = React.createClass({
  propTypes: {
    spellbook: PropTypes.object.isRequired,
    setCurrentSpellbook: PropTypes.func.isRequired
  },
  render() {
    const {setCurrentSpellbook, spellbook} = this.props;
    return (
      <div
        onClick={() => setCurrentSpellbook(spellbook.id)}>
        {spellbook.name}
      </div>);
  }
});

export default SpellbookCard;
