var React = require('react');

var CheckList = React.createClass({

  propTypes: {
    initValue: React.PropTypes.array.isRequired,
    options: React.PropTypes.array.isRequired,
    onBlur: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      valueMap: this.props.initValue
    };
  },

  componentWillMount: function() {
    this._checkedMap = {};
    this.props.options.forEach(function(option) {
      this._checkedMap[option.value] = false;
    }, this);

    this.props.initValue.forEach(function(item) {
      this._checkedMap[item] = true;
    }, this);
  },

  getValue: function() {
    var i = 0;
    var len = this.props.options.length;
    var result = [];

    for (i = 0; i < len; i++) {
      if (React.findDOMNode(this.refs[i]).checked) {
        result.push(this.props.options[i].value);
      }
    }

    return result;
  },

  _renderChecks: function() {
    return this.props.options.map(function(option, index) {
      return (
        <label key={index}>
          <input
            type="checkbox"
            defaultChecked={this._checkedMap[option.value]}
            ref={index}
          />
          <span>{option.text}</span>
        </label>
      );
    }, this);
  },

  render: function() {
    return (
      <span className="editable-has-buttons editable-input">
        {this._renderChecks()}
      </span>
    );
  }

});

module.exports = CheckList;
