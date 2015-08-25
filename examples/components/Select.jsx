var React = require('react');

var EditableSelect = require('../../src/components/EditableSelect');

var Example = require('./Example');
var jsx = require('./raw_code/select_jsx.txt');
var js = require('./raw_code/select_js.txt');

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
    var code = (
      <EditableSelect
        initValue={this.state.status}
        onUpDate={this._update}
        options={options}
      >
        <a href="#" />
      </EditableSelect>
    );
    return (
      <Example
        title="Select"
        code={code}
        state={this.state}
        jsx={jsx}
        js={js}
      />
    );
  }

});

module.exports = Select;
