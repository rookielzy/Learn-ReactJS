#Learning How To Use ReactJS

## JSX
> JSX 是JS的扩展，拥有JS逻辑的同时还在JSX中可以加入 html语法。

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

`this.props` is immutable, if you want to change the component state use `setState`

## Binding custom component methods
Any time we define our own custom component methods, we have to manually bind `this` to the component ourselves.

```JSX
class MyReactComponent extends React.Component {
  constructor(props) {
    super(props); // always call this first

    //custom method bindings here
    this.someFunction = this.someFunction.bind(this);
  }
}
```

## Component and Lifecycle
> this.state 必须使用 this.setState 来更新状态

> State Update 有可能是异步的，所以 this.state 里的值更新应该分开来单独更新

> 注意使用 componentDidMount & componentWillUnmount 来释放组件以此来销毁组件占用的资源。

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