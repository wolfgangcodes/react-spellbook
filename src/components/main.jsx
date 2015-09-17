import React, { PropTypes } from 'react';
import SpellbookList from './spellbookList.jsx';
import { connect } from 'react-redux';
import * as Actions from '../actions/';
import { bindActionCreators } from 'redux';

const Main = React.createClass({
  propTypes: {
    currentSpellbook: PropTypes.number,
    spellbooks: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  componentDidMount() {
    this.props.dispatch(Actions.loadSpellbooks());
  },
  render() {
    const actions = bindActionCreators(Actions, this.props.dispatch);
    const {spellbooks, currentSpellbook} = this.props;
    return (
      <div>
        <div>Current Spellbook: {currentSpellbook}</div>
        <SpellbookList spellbooks={spellbooks} setCurrentSpellbook={actions.setCurrentSpellbook}/>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Main);
