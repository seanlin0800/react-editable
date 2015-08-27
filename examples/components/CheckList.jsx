var React = require('react');

var EditableCheckList = require('../../src/components/EditableCheckList');

var Example = require('./Example');
var jsx = require('./raw_code/checkList_jsx.txt');
var js = require('./raw_code/checkList_js.txt');

var CheckList = React.createClass({

  getInitialState: function() {
    return {
      status: [2, 3]
    };
  },

  _update: function(value) {
    this.setState({status: value});
  },

  render: function() {
    var options = [
      {value: 1, text: 'status1'},
      {value: 2, text: 'status2'},
      {value: 3, text: 'status3'}
    ];
    var code = (
      <EditableCheckList
        initValue={this.state.status}
        onUpDate={this._update}
        options={options}
      >
        <a href="#" />
      </EditableCheckList>
    );
    return (
      <Example
        title="Checklist"
        code={code}
        state={this.state}
        jsx={jsx}
        js={js}
      />
    );
  }

});

module.exports = CheckList;
