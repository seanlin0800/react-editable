var React = require('react');

var Text = require('./Text');
var Select = require('./Select');

var Main = React.createClass({

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <Text />
          <Select />
        </div>
      </div>
    );
  }

});

module.exports = Main;
