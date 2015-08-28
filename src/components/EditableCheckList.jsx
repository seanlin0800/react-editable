var React = require('react');

var CheckList = require('./CheckList');
var EditableMixin = require('./mixins/EditableMixin');
var getValueMap = require('../utils/getValueMap');

var EditableCheckList = React.createClass({

  propTypes: {
    initValue: React.PropTypes.array.isRequired,
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
    return this.props.initValue.map(function(item) {
      return this._valueMap[item];
    }, this).join(', ');
  },

  render: function() {
    return this._render(CheckList);
  }

});

module.exports = EditableCheckList;
