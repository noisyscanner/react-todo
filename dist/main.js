'use strict';

var TodoApp = React.createClass({
    getInitialState: function getInitialState() {
        return {
            todos: []
        };
    },

    addTodo: function addTodo(item) {
        if (item !== '') {
            var todos = this.state.todos;
            todos.push(item);

            this.setState({
                todos: todos
            });
        }
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(TodoInput, { addTodo: this.addTodo }),
            React.createElement('br', null),
            React.createElement(TodoList, { todos: this.state.todos })
        );
    }
});

var TodoInput = React.createClass({
    getInitialState: function getInitialState() {
        return { input: '' };
    },

    changeInput: function changeInput(event) {
        this.setState({ input: event.target.value });
    },

    add: function add(e) {
        e.preventDefault();

        this.props.addTodo(this.state.input);
        // Clear input
        this.setState(this.getInitialState());
    },

    render: function render() {
        return React.createElement(
            'form',
            { onSubmit: this.add },
            React.createElement('input', { ref: 'txtInput', type: 'text', value: this.state.input, onChange: this.changeInput }),
            React.createElement('br', null),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add'
            )
        );
    }
});

var TodoList = React.createClass({
    render: function render() {
        var todoList = this.props.todos.map(function (todo, index) {
            return React.createElement(
                'li',
                { key: index },
                todo
            );
        });
        return React.createElement(
            'ul',
            null,
            todoList
        );
    }
});

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('content'));