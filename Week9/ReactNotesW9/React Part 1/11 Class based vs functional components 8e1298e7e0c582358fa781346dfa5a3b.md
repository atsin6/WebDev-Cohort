# 11. Class based vs functional components

Earlier, React code was written using `Class based` components. Slowly functional components were introduced and today they are the ones you’ll se everywhere.

Ref - [https://github.com/processing/p5.js-web-editor/issues/2358](https://github.com/processing/p5.js-web-editor/issues/2358)

Class components are  classes that extend `React.Component`, while functional components are simpler and can use Hooks.

## Class based components

```jsx
import React, { Component } from 'react';

class ClassCounter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

```

## Functional components

```jsx
import React, { useState } from 'react';

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);
    
    function increment() {
	    setCount(count => count + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
```

## Comparision

![Screenshot 2024-10-08 at 6.42.48 PM.png](11%20Class%20based%20vs%20functional%20components/Screenshot_2024-10-08_at_6.42.48_PM.png)