var React = require('react');

var Form = React.createClass({

  propTypes: {
    initValue: React.PropTypes.string.isRequired,
    onEnd: React.PropTypes.func,
    onUpDate: React.PropTypes.func
  },

  getInitialState: function() {
    return {value: this.props.initValue};
  },

  _handleChange: function(e) {
    this.setState({value: e.target.value});
  },

  _update: function(e) {
    e.preventDefault();
    this.props.onEnd();
    this.props.onUpDate(this.state.value);
  },

  _handleFocus: function(e) {
    var len = this.state.value.length;
    e.target.setSelectionRange(len, len);
  },

  _handleBlur: function() {
    var _this = this;

    // when the blur event occurs, the activeElement we get is boby
    // here is the trick to get the 'real' activeElement
    setTimeout(function(){
      if (React.findDOMNode(_this.refs.submit) !== document.activeElement) {
        _this.props.onEnd();
      }
    });
  },

  render: function() {
    return (
      <form className="form-inline editable-wrap" role="form" onSubmit={this._update}>
        <div className="editable-controls form-group">
          <input
           className="editable-has-buttons editable-input form-control"
           value={this.state.value}
           onChange={this._handleChange}
           onFocus={this._handleFocus}
           onBlur={this._handleBlur}
           autoFocus={true}
          />
          <span className="editable-buttons">
            <button
              type="submit"
              className="btn btn-primary"
              ref="submit"
            >
              <span className="glyphicon glyphicon-ok"></span>
            </button>
            <button type="button" className="btn btn-default">
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </span>
        </div>        
      </form>
    );
  }

});

module.exports = Form;
