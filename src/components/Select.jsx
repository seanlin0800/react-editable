var React = require('react');

var ControlMixin = require('./mixins/ControlMixin');

var Select = React.createClass({

  propTypes: {
    options: React.PropTypes.array.isRequired,
    onBlur: React.PropTypes.func
  },

  mixins: [ControlMixin],

  _renderOptions: function() {
    return this.props.options.map(function(option, index) {
      var selected = this.state.value === option.value;
      return (
        <option value={option.value} selected={selected} key={index}>
          {option.text}
        </option>
      );
    }, this);
  },

  render: function() {
    return (
      <select
        className="editable-has-buttons editable-input form-control"
        value={this.state.value}
        onChange={this._handleChange}
        onBlur={this.props.onBlur}
        autoFocus={true}
      >
        {this._renderOptions()}
      </select>
    );
  }

});

module.exports = Select;
