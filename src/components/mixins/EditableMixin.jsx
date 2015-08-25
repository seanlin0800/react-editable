var React = require('react');
var classNames = require('classnames');

var Form = require('../Form');

var EditableMixin = {

  propTypes: {
    initValue: React.PropTypes.any.isRequired,
    onUpDate: React.PropTypes.func
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

  _render: function(control) {
    if (this.state.isEditing) {
      return (
        <Form
          {...this.props}
          onEnd={this._setEditing.bind(null, false)}
          control={control}
        />
      );
    }

    return <div>{this._renderChildren()}</div>;
  }

};

module.exports = EditableMixin;
