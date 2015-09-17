import React, { PropTypes } from 'react';
import _ from 'lodash';
import SpellbookCard from './SpellbookCard.jsx';

const SpellbookList = React.createClass({
  propTypes: {
    spellbooks: PropTypes.object.isRequired,
    setCurrentSpellbook: PropTypes.func.isRequired
  },
  render() {
    const {spellbooks, setCurrentSpellbook} = this.props;

    const spellbookElements = _.map( spellbooks, (spellbook) => {
      return (<SpellbookCard
        key={spellbook.id}
        spellbook={spellbook}
        setCurrentSpellbook={setCurrentSpellbook}/>
      );
    });

    return (
      <span>
        <h1>Spellbooks:</h1>
        {spellbookElements}
      </span>
    );
  }
});

export default SpellbookList;
