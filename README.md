#Learning How To Use ReactJS

## JSX
> JSX 是JS的扩展，拥有JS逻辑的同时在JSX中还可以加入 html语法。

> 常见用法： [Details](https://facebook.github.io/react/docs/introducing-jsx.html)

```JSX
const element = <h1>Hello World</h1>
const element = <h1>{someJS}</h1>
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello World!'
);
const element = React.createElement('div', {className: 'container'},
  React.createElement('p', null, 'Hello, friend!')
);
const element = <div>
  <p>
    Hello, friend!
  </p>
</div>

ReactDOM.render([what], [where]);
```

## props
The way data flows from parent to child in React is through props

props is a one-way data flow

While the child can read its props, it can't modify them. A child does not own its props. The parent component owns the props given to child component. 

`this.props` is immutable

## Propagating the event
We know that parents communicate data to children through `props`. Because `props` are immutable,children need some way to communicate events to parents. The parents could then make whateverdata changes might be necessary.

We can pass down functions as `props` too.

## Binding custom component methods
Any time we define our own custom component methods, we have to manually bind `this` to the component ourselves.

```JSX
class MyReactComponent extends React.Component {
  constructor(props) {
    super(props); // always call this first

    //custom method bindings here
    this.someFunction = this.someFunction.bind(this);
  }
  render() {
    return(
      <div>
        Hello World!
      </div>
    );
  }
}
```

## Component and Lifecycle
> this.state 必须使用 this.setState 来更新状态

state  is owned by the component

when the state or props of a component update, the component will re-render itself

Every React component is rendered as a function of its this.props and ths.state. This rendering is deterministic.

> State Update 有可能是异步的，所以 this.state 里的值更新应该分开来单独更新

> 注意使用 componentDidMount & componentWillUnmount 来释放组件以此来销毁组件占用的资源。

## State criteria
1. Is it passed in from a parent via props? If so, it probably isn't state.
A lot of the data used in our child components are already listed in their parents. This criterion helps us de-duplicate.

2. Does it change over time? If not, it probably isn't state.
This is a key criterion of stateful data: it changes.

3. Can you compute it based on any other state or props in your component? If so, it's not state.
For simplicity, we want to strive to represent state with as few data points as possible.

## Identify Where Your State Should Live
1. Identify every component that renders something based on that state.
2. Find a common owner component(a single component above all the components that need the state in the hierarchy).
3. Either the common owner or another component higher up in the hierarchy should own the state.
4. If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

## Refs
使用`refs`可以在典型数据流外强制修改子代，即就是在DOM上进行操作。

下面是几个适合使用`refs`的情况：
* 处理焦点，文本选择或媒体控制
* 触发强制动画
* 集成第三方DOM库

## List
> 使用 JSX 创建的 li 必须带有 key。 key 使得 React 能够确定哪些项目被修改，添加或者移动。

> key 尽量使用其 id，避免使用项目索引作为其 key 
```JSX
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

> 如果需要导出组件，其 key 应该在其本身，而不是其后代
```JSX
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

```JSX
//Correct Key Usage

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

## The steps for building React apps from scratch
1. Break the app into components
2. Build a static version of the app
3. Determine what should be stateful
4. Detemine in which component each piece of state should live
5. Hard-cord initial state
6. Add inverse data flow
7. Add server communication

## Using a function in `setState` instead of an object
['Using a function in `setState` instead of an object']('https://medium.com/@shopsifter/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1')

> Why ?
Example:
```js
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue
    }
  };

  decrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
    // const nextState = this.state.value - 1;
    // this.setState({
    //   value: nextState,
    // });
  };

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button type="button" onClick={this.decrement}>-</button>
      </div>
    );
  }
}
```

Because `setState()` is asynchronous. Here’s an example. Let’s say we’re using the first decrement() method where we pass an object
to setState(). When we invoke decrement() for the first time, value is 125. We’d then invoke
setState(), passing an object with a value of 124.

However, <b>the state will not necessarily be updated immediately.</b> Instead, React will add our
requested state update to its queue.

Let’s say that the user is particularly fast with her mouse and her computer is particularly slow
with its processing. The user manages to click the decrement button again before React gets around
to our previous state update. Responding to user interactions are high-priority, so React invokes
decrement(). The value in state is still 125. So, we enqueue another state update, again setting
value to 124.

React then commits both state updates. To the dismay of our astute and quick-fingered user, instead
of the correct value of 123 the app shows a count of 124.

In our simple example, there’s a thin chance this bug would occur. But as a React app grows in
complexity, React might encounter periods where it is overloaded with high-priority work, like
animations. And it is conceivable that state updates might be queued for consequential lengths of
time.