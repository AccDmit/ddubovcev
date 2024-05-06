// component-library.js

import React from 'react';

// Button component
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

// Alert component
function Alert({ type, children }) {
  return <div className={`alert alert-${type}`}>{children}</div>;
}

// Export the components
export { Button, Alert };

// Example usage in a React component
import React from 'react';
import { Button, Alert } from './component-library';

function App() {
  return (
    <div>
      <Button onClick={() => console.log('Button clicked')}>Click me</Button>
      <Alert type="info">This is an info alert</Alert>
    </div>
  );
}

export default App;
