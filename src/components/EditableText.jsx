var React = require('react');

var Input = require('./Input');
var EditableMixin = require('./mixins/EditableMixin');

var EditableText = React.createClass({

  mixins: [EditableMixin],

  getDefaultProps: function() {
    return {
      emptyText: 'empty'
    };
  },

  render: function() {
    return this._render(Input);
  }

});

module.exports = EditableText;
