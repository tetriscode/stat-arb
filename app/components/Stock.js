'use strict';

var React = require('react');
var Router = require('react-router');

var Stock = React.createClass({
  mixin : [Router.State],
  getInitialState : function() {
    return {
      symbol : '',
      stats : {
        retrn : 0
      },
      news : []
    };
  },
  render: function() {
    var symbol = this.getParams().symbol;
    return (
      <div className="row">
        <div className="col-md-4">
          Yo {symbol}
        </div>
        <div className="col-md-4">
          4x2 Stats
        </div>
        <div className="col-md-4">
          Notes
        </div>
      </div>
    );
  }

});

module.exports = Stock;
