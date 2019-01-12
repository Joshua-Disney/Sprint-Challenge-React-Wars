# Answers

1.  What is React JS and what problems does it try and solve?

    ReactJS is a JavaScript libraby that allows for HTML and CSS to be written directly into each of it's components.
    The biggest problem it solves is that instead of rerendering your ENTIRE page every single time a piece of state changes, for example something being typed into an input or a notification counter going up, it ONLY rerenders the thing that changed.

1.  What does it mean to _think_ in react?

    Thinking in React means to imagine your website in terms of grouped components and functionality and build your site to fit around and inside those groupings instead of building the groupings around each other.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A Class/Stateful component acts like a container.  It will house the state that gets passed into the other component(s) inside of it.
    A Functional/Presentational component is what the user is able to see and interact with.  It is what gets passed back up to the Virtual DOM.

1.  Describe state.

    State is an object in React that represents all of the data in the app that is able to be changed.

1.  Describe props.

    Props are the bits of data that are passed down from parent components to children components.  One of the biggest differences between state and props is that state can be changed whereas props can not.
