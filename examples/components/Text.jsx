var React = require('react');

var EditableText = require('../../src/components/EditableText');

var Example = require('./Example');
var jsx = require('./raw_code/text_jsx.txt');
var js = require('./raw_code/text_js.txt');

var Text = React.createClass({

  getInitialState: function() {
    return {value: 'superuser'};
  },

  _update: function(value) {
    this.setState({value: value});
  },

  render: function() {
    var code = (
      <EditableText initValue={this.state.value} onUpDate={this._update}>
        <a href="#" />
      </EditableText>
    );
    return (
      <Example
        title="Text"
        code={code}
        state={this.state}
        jsx={jsx}
        js={js}
      />
    );
  }

});

module.exports = Text;
