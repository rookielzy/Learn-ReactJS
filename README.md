#Learning How To Use ReactJS

##JSX
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
```


## Component and Lifecycle
> this.state 必须使用 this.setState 来更新状态

> State Update 有可能是异步的，所以 this.state 里的值更新应该分开来单独更新

> 注意使用 componentDidMount & componentWillUnMount 来释放组件以此来销毁组件占用的资源。