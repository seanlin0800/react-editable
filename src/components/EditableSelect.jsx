var React = require('react');

var Select = require('./Select');
var EditableMixin = require('./mixins/EditableMixin');

var EditableSelect = React.createClass({

  propTypes: {
    options: React.PropTypes.array.isRequired
  },

  mixins: [EditableMixin],

  render: function() {
    return this._render(Select);
  }

});

module.exports = EditableSelect;
