var React = require('react');

var Text = require('./Text');

var Main = React.createClass({

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <Text />
        </div>
      </div>
    );
  }

});

module.exports = Main;
