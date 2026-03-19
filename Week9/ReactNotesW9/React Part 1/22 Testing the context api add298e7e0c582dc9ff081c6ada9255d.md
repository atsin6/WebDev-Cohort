# 22. Testing the context api

Lets test our application, and observe the renders.

```jsx
import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;

```

![Screenshot 2024-10-13 at 7.04.05 PM.png](22%20Testing%20the%20context%20api/Screenshot_2024-10-13_at_7.04.05_PM.png)

![Screenshot 2024-10-13 at 7.04.31 PM.png](22%20Testing%20the%20context%20api/Screenshot_2024-10-13_at_7.04.31_PM.png)

## Optimising the app

```jsx
import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;
```

![Screenshot 2024-10-13 at 7.04.05 PM.png](22%20Testing%20the%20context%20api/Screenshot_2024-10-13_at_7.04.05_PM.png)

![Screenshot 2024-10-13 at 7.05.01 PM.png](22%20Testing%20the%20context%20api/Screenshot_2024-10-13_at_7.05.01_PM.png)

## What context does, and what it doesn’t

The Context API primarily addresses the issue of prop drilling by allowing you to share state across your component tree without needing to pass props through every level.

It doesn’t optimise renders in your application, which becomes important if/when your application becomes bigger