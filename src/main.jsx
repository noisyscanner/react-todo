var TodoApp = React.createClass({
    getInitialState: () => ({todos: []}),

    addTodo: function(item) {
        if (item !== '') {
            var todos = this.state.todos;
            todos.push(item);

            this.setState({
                todos
            });
        }
    },

    removeTodoAtIndex: function(idx) {
        if (idx >= 0 && typeof this.state.todos[idx] !== "undefined") { // Check index is valid
            // Item exists, remove it
            var todos = this.state.todos;
            todos.splice(idx, 1);
            this.setState({
                todos
            });
        }
    },

    render: function(){
        return(
            <div>
                <TodoInput addTodo={this.addTodo} /><br />
                <TodoList todos={this.state.todos} removeTodo={this.removeTodoAtIndex} />
            </div>
        );
    },
});

var TodoInput = React.createClass({
    // getInitialState: function() {
    //     return {input: ''}
    // },

    getInitialState: () => ({input: ''}),

    changeInput: function(event) {
        this.setState({input: event.target.value});
    },

    add: function(e) {
        e.preventDefault();

        this.props.addTodo(this.state.input);

        // Clear input
        this.setState(this.getInitialState());
    },

    render: function() {
        return (
            <form onSubmit={this.add}>
                <div className="input-group">
                    <input className="form-control" ref="txtInput" type="text" value={this.state.input} onChange={this.changeInput}  />
                    <div className="input-group-btn">
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </div>
            </form>
        );
    }
});

var TodoList = React.createClass({

    removeTodo: function(e) {
        var index = parseInt(e.currentTarget.getAttribute('data-idx'));
        this.props.removeTodo(index);
    },

    render: function() {
        /*var todoList = this.props.todos.map(function(todo,index){
            return <li key={index}>{todo}</li>
        });*/
        var todoList = this.props.todos.map((todo, index) =>
            <li key={index}>
                {todo}
                <button className="btn btn-danger" onClick={this.removeTodo} data-idx={index}>Remove</button>
            </li>
        ); // Create a list of li's
        return (
            <ul>{todoList}</ul>
        );
    }
});

ReactDOM.render(<TodoApp />, document.getElementById('content'));
