var React = require('react');

var EditableText = require('../../src/components/EditableText');

var Text = React.createClass({

  getInitialState: function() {
    return {value: 'superuser'};
  },

  _update: function(value) {
    this.setState({value: value});
  },

  render: function() {
    return (
      <div>
        <h1>Text</h1>
        <h3>demo</h3>
        <div className="well">
          <EditableText initValue={this.state.value} onUpDate={this._update}>
            <a href="#" />
          </EditableText>
        </div>
        <pre>
          {'this.state.value:' + this.state.value}
        </pre>
        <h3>jsx</h3>
        <pre>
          {
            '<EditableText initValue={this.state.value} onUpDate={this._update}>\n' +
            '  <a href="#" />\n' +
            '</EditableText>\n'
          }
        </pre>
        <h3>js</h3>
        <pre>
          {
            '_update: function(value) {\n' +
            '  this.setState({value: value});\n' +
            '},\n'
          }
        </pre>
      </div>
    );
  }

});

module.exports = Text;
