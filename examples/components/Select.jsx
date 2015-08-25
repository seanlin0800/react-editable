var React = require('react');

var EditableSelect = require('../../src/components/EditableSelect');

var Select = React.createClass({

  getInitialState: function() {
    return {status: 2};
  },

  _update: function(value) {
    this.setState({status: value});
  },

  render: function() {
    var options = [
      {value: 1, text: 'status1'},
      {value: 2, text: 'status2'},
      {value: 3, text: 'status3'},
      {value: 4, text: 'status4'}
    ];
    return (
      <div>
        <h1>Select</h1>
        <h3>demo</h3>
        <div className="well">
          <EditableSelect
            initValue={this.state.status}
            onUpDate={this._update}
            options={options}
          >
            <a href="#" />
          </EditableSelect>
        </div>
        <pre>
          {JSON.stringify(this.state)}
        </pre>
        <h3>jsx</h3>
        <pre>
          {
            '<EditableSelect\n' +
            '  initValue={this.state.status}\n' +
            '  onUpDate={this._update}\n' +
            '  options={options}\n' +
            '>\n' +
            '  <a href="#" />\n' +
            '</EditableSelect>\n'
          }
        </pre>
        <h3>js</h3>
        <pre>
          {
            'var options = [\n' +
            '  {value: 1, text: \'status1\'},\n' +
            '  {value: 2, text: \'status2\'},\n' +
            '  {value: 3, text: \'status3\'},\n' +
            '  {value: 4, text: \'status4\'}\n' +
            '];\n' +
            '\n' +
            '_update: function(value) {\n' +
            '  this.setState({status: value});\n' +
            '},\n'
          }
        </pre>
      </div>
    );
  }

});

module.exports = Select;
