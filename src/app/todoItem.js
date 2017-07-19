
var React = require('react');
require('./css/todoItem.css');
//Create todo item component

var TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className = "Todo-item">
          <span className = "item-name">{this.props.item}</span>
          <span className = "item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  },

//custom function
handleDelete: function(){
this.props.onDelete(this.props.item);
}
});

module.exports = TodoItem;
