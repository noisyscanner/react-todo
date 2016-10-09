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
        return dom(
            'div',
            null,
            dom(TodoInput, { addTodo: this.addTodo }),
            dom('br', null),
            dom(TodoList, { todos: this.state.todos })
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
        return dom(
            'form',
            { onSubmit: this.add },
            dom('input', { ref: 'txtInput', type: 'text', value: this.state.input, onChange: this.changeInput }),
            dom('br', null),
            dom(
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
            return dom(
                'li',
                { key: index },
                todo
            );
        });
        return dom(
            'ul',
            null,
            todoList
        );
    }
});

ReactDOM.render(dom(TodoApp, null), document.getElementById('content'));

//# sourceMappingURL=main-compiled.js.map