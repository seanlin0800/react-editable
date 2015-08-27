var React = require('react');

var EditableRadioList = require('../../src/components/EditableRadioList');

var Example = require('./Example');
var jsx = require('./raw_code/radiolist_jsx.txt');
var js = require('./raw_code/radiolist_js.txt');

var RadioList = React.createClass({

  getInitialState: function() {
    return {
      status: 2
    };
  },

  _update: function(value) {
    this.setState({status: value});
  },

  render: function() {
    var options = [
      {value: 1, text: 'status1'},
      {value: 2, text: 'status2'}
    ];
    var code = (
      <EditableRadioList
        initValue={this.state.status}
        onUpDate={this._update}
        options={options}
      >
        <a href="#" />
      </EditableRadioList>
    );
    return (
      <Example
        title="Radiolist"
        code={code}
        state={this.state}
        jsx={jsx}
        js={js}
      />
    );
  }

});

module.exports = RadioList;
