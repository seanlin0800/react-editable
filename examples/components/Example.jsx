var React = require('react');

var Example = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired,
    code: React.PropTypes.element.isRequired,
    state: React.PropTypes.object.isRequired,
    jsx: React.PropTypes.string.isRequired,
    js: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>demo</h3>
        <div className="well">
          {this.props.code}
        </div>
        <pre>
          {JSON.stringify(this.props.state, null, 2)}
        </pre>
        <h3>jsx</h3>
        <pre>
          {this.props.jsx}
        </pre>
        <h3>js</h3>
        <pre>
          {this.props.js}
        </pre>
      </div>
    );
  }

});

module.exports = Example;
