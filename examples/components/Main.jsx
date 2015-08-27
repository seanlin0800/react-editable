var React = require('react');

var Text = require('./Text');
var Select = require('./Select');
var RadioList = require('./RadioList');
var CheckList = require('./CheckList');

var Main = React.createClass({

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Text />
            <Select />
            <RadioList />
            <CheckList />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Main;
