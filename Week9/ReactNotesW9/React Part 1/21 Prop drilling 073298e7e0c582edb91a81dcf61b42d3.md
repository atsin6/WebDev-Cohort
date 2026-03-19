# 21. Prop drilling

**Prop drilling** occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree. This often leads to the following issues:

- **Complexity:** You may have to pass props through many intermediate components that don’t use the props themselves, just to get them to the component that needs them.
- **Maintenance:** It can make the code harder to maintain, as changes in the props structure require updates in multiple components.

```jsx
import React, { useState } from 'react';

// LightBulb Component
const LightBulb = ({ isOn }) => {
  return <div>The light is {isOn ? 'ON' : 'OFF'}</div>;
};

// LightSwitch Component
const LightSwitch = ({ toggleLight }) => {
  return <button onClick={toggleLight}>Toggle Light</button>;
};

// App Component
const App = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn((prev) => !prev);
  };

  return (
    <div>
      <LightBulb isOn={isLightOn} />
      <LightSwitch toggleLight={toggleLight} />
    </div>
  );
};

export default App;

```

![Screenshot 2024-10-13 at 5.04.11 PM.png](21%20Prop%20drilling/Screenshot_2024-10-13_at_5.04.11_PM.png)

# Problems with Prop drilling

![Screenshot 2024-10-13 at 5.08.43 PM.png](21%20Prop%20drilling/Screenshot_2024-10-13_at_5.08.43_PM.png)