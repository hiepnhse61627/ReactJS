# React JS Learning Projects

## Definition

### What is React ?

- React is component-based, declarative, state-driven javascript library for building user interface
- React Frameworks build on top of React library (NEXT.js, Remix).
- Component (Data, Logic, Appearance).

### What is JSX ?

- Declarative syntax to describe what component look like and how they work
- Component must return a block of JSX
- Extension of Javascript CSS and React components into HTML
- Each JSX element is converted to a `React.createElement` function call.
- We could use React without JSX.

> Note: JS uses imperative way:
>
> - Manual DOM element selections and DOM traversing
> - Step-by-step DOM mutations until we reach the desired UI
>
> React uses Declarative way:
>
> - Describe what UI should look like using JSX, based on current data.
> - React is an abstraction away from DOM: we never touch the DOM.
> - Instead, we think of the UI as a reflection of the current data.

### Rules of JSX

- JSX works essentially like HTML, but we can enter "JS mode" by using `{}` (for text or attributes).
- We can place JS expressions inside `{}`. Examples: reference variables, create arrays or objects, [].map(), ternary operator.
- Statements are not allowed (if/else, for, switch).
- JSX produces a JS expression.

1. We can place other pieces of JSX inside `{}`.
2. We can write JSX anywhere inside a component (in if/else, assign to variables, pass it into functions).

- A piece of JSX can only have one root element. If you need more, use `React.Fragment` (or the short <>).

### Separations of Concerns

- One component per file
- Component combines of JS, HTML, CSS

### What is Props ?

- A communication channel between parent and child components.
- Use to pass data from parent components to child components (down the component tree).
- Essential tool to configure and customize components (like function parameters).
- With props, parent components control how child components look and work.
- Anything can be passed as props: single values, arrays, objects, functions, even other components.

> Note
>
> - Component data is made of props and state
> - State is internal data that can be updated by the component's logic
> - Props is data coming from the outside, and can only be updated by the parent component.
>
> => Props are read-only, they are immutable! This is one of React's strict rules.
>
> => If you need to mutate props, you actually need state.
>
> Why ?
>
> - Mutating props would affect parent, creating side effects (not pure).
> - Components have to be pure function in terms of props and state.
> - This allows React to optimize apps, avoid bugs, make apps predictable.

### One-Way Data Flow

- Data can only be passed from parents to child components, which happens by using props. In other words, data can flow from parent to children but never the opposite way.
- Makes applications more predictable and easier to understand.
- Makes applications easier to debug, as we have more control over the data.
- More performance.

## Git

```
1. https://github.com/jonasschmedtmann/ultimate-react-course
2. https://github.com/hiepnhse61627/ReactJS
```

## Setup Development Environment

```
Go to Visual Studio Code Settings, then search for the following:

1. Auto save -> onFocusChange
2. Default formattter -> Prettier
3. Format On Save -> Turn on
4. Eslint -> onSave
5. Diff decorations -> Change to "None" if you don't want VSCode shows changes for Git
```

## Setting up a project with Create React App

```
npx create-react-app@5 {project-name}
```
