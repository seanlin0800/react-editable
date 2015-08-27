var React = require('react');

var ControlMixin = require('./mixins/ControlMixin');

var Radiolist = React.createClass({

  propTypes: {
    options: React.PropTypes.array.isRequired,
    onBlur: React.PropTypes.func
  },

  mixins: [ControlMixin],

  _handleRadioChange: function(value) {
    this.setState({value: value});
  },

  _renderRadioes: function() {
    return this.props.options.map(function(option, index) {
      return (
        <label key={index}>
          <input
            type="radio"
            checked={this.state.value === option.value}
            name="radio"
            onChange={this._handleRadioChange.bind(null, option.value)}
          />
          <span>{option.text}</span>
        </label>
      );
    }, this);
  },

  render: function() {
    return (
      <span className="editable-has-buttons editable-input">
        {this._renderRadioes()}
      </span>
    );
  }

});

module.exports = Radiolist;
