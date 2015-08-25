var React = require('react');

var ControlMixin = require('./mixins/ControlMixin');

var Input = React.createClass({

  propTypes: {
    onBlur: React.PropTypes.func
  },

  mixins: [ControlMixin],

  _handleFocus: function(e) {
    var len = this.state.value.length;
    e.target.setSelectionRange(len, len);
  },

  render: function() {
    return (
      <input
       className="editable-has-buttons editable-input form-control"
       value={this.state.value}
       onChange={this._handleChange}
       onFocus={this._handleFocus}
       onBlur={this.props.onBlur}
       autoFocus={true}
      />
    );
  }

});

module.exports = Input;
