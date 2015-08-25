require('../css/editable.css');
var React = require('react');
var classNames = require('classnames');

var Form = require('./Form')

var EditableText = React.createClass({

  propTypes: {
    initValue: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
  },

  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  _setEditing: function(value) {
    this.setState({
      isEditing: value
    });
  },

  _handleClick: function(e) {
    e.preventDefault();
    this._setEditing(true);
  },

  _renderChildren: function() {
    var classes = classNames({
      'editable-click': true,
      'editable-empty': !this.props.initValue
    });

    return React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        onClick: this._handleClick,
        className: classes
      }, this.props.initValue || 'empty');
    }, this);
  },

  render: function() {
    if (this.state.isEditing) {
      return (
        <Form
          initValue={this.props.initValue}
          onEnd={this._setEditing.bind(null, false)}
          onUpDate={this.props.onUpDate}
        />
      );
    }

    return <div>{this._renderChildren()}</div>;
  }

});

module.exports = EditableText;
