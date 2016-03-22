# ReduxTodoApp

Based on *Todo App* from [EggHead Getting Start with Redux ](https://egghead.io/series/build-your-first-react-js-application) series.

![Todo App](https://raw.githubusercontent.com/juliobetta/ReduxTodoApp/master/todo-app.gif)

### Getting Started ###

Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone git@github.com:juliobetta/ReduxTodoApp.git
	> cd ReduxTodoApp
	> npm install
	> npm start
```

**Notes:**
* *Reducers* are functions that return a piece of the application state.
* *Container* is a *React Component* that has a direct connection to the state managed by *Redux*
* A *reducer* is called when an *action* occurs
* *Middlewares* are functions that take an *action*, and, depending on the action type, payload or any other factors, decide if let it pass, manipulate it, log it or stop it.
* A *context* in React is a lot like *props*. It is information that is past from some parent component to a child component. The difference between them is that *context* doesn't have to be deliberately past from parent to child.
* Do not abuse *contexts* in your own application. Avoid them as much as possible. An specific case to really use it is when dealing with react-router
