var React = require('react');

var Form = React.createClass({

  propTypes: {
    initValue: React.PropTypes.any.isRequired,
    onEnd: React.PropTypes.func,
    onUpDate: React.PropTypes.func,
    control: React.PropTypes.func.isRequired
  },

  _update: function(e) {
    e.preventDefault();
    this.props.onEnd();
    this.props.onUpDate(this.refs.control.getValue());
  },

  _handleBlur: function() {
    var _this = this;

    // when the blur event occurs, the activeElement we get is boby
    // here is the trick to get the 'real' activeElement
    setTimeout(function() {
      if (React.findDOMNode(_this.refs.submit) !== document.activeElement) {
        _this.props.onEnd();
      }
    });
  },

  render: function() {
    return (
      <form className="form-inline editable-wrap" role="form" onSubmit={this._update}>
        <div className="editable-controls form-group">
          <this.props.control
            {...this.props}
            onBlur={this._handleBlur}
            ref="control"
          />
          <span className="editable-buttons">
            <button
              type="submit"
              className="btn btn-primary"
              ref="submit"
            >
              <span className="glyphicon glyphicon-ok"></span>
            </button>
            <button type="button" className="btn btn-default" onClick={this.props.onEnd}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </span>
        </div>
      </form>
    );
  }

});

module.exports = Form;
