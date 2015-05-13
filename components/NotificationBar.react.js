/** @jsx React.DOM */

var React = require('react');

module.exports = NotificationBar = React.createClass({
  render: function(){
    var count = this.props.count;
    return (
      <div className={"notification-bar" + (count > 0 ? ' active' : '')}>
        <p>There are {count} new NBA Playoff tweets! <a href="#top" onClick={this.props.onShowNewTweets}>Click here to load them with React</a></p>
      </div>
    )
  }
});