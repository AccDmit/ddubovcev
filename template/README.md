# My React Component Library

This is a simple React component library that provides reusable components for use in React projects.

## Installation

You can install this package via npm:

```bash
npm install my-react-component-library
```

## Usage

Import the components you need from the library and use them in your React components:

```javascript
import React from 'react';
import { Button, Alert } from 'my-react-component-library';

function App() {
  return (
    <div>
      <Button onClick={() => console.log('Button clicked')}>Click me</Button>
      <Alert type="info">This is an info alert</Alert>
    </div>
  );
}

export default App;
```

## Components

### Button

The `Button` component is a simple button element that can be customized with different styles and click handlers.

### Alert

The `Alert` component displays a colored box with a message inside. It can be used to show different types of alerts (e.g., success, error, info).

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
