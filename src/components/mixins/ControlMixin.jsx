var React = require('react');

var ControlMixin = {

  propTypes: {
    initValue: React.PropTypes.isRequired
  },

  getInitialState: function() {
    return {
      value: this.props.initValue
    };
  },

  getValue: function() {
    return this.state.value;
  },

  _handleChange: function(e) {
    this.setState({value: e.target.value});
  }

};

module.exports = ControlMixin;
