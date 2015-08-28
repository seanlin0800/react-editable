var React = require('react');

var RadioList = require('./Radiolist');
var EditableMixin = require('./mixins/EditableMixin');
var getValueMap = require('../utils/getValueMap');

var EditableRadioList = React.createClass({

  propTypes: {
    initValue: React.PropTypes.oneOfType([
      React.PropTypes.string.isRequired,
      React.PropTypes.number.isRequired
    ]),
    options: React.PropTypes.array.isRequired
  },

  mixins: [EditableMixin],

  getDefaultProps: function() {
    return {
      emptyText: 'Not set'
    };
  },

  componentWillMount: function() {
    this._valueMap = getValueMap(this.props.options);
  },

  _getFormattedText: function() {
    return this._valueMap[this.props.initValue];
  },

  render: function() {
    return this._render(RadioList);
  }

});

module.exports = EditableRadioList;
