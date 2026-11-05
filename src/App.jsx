import React, { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Show / Hide Paragraph</h1>

      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Paragraph' : 'Show Paragraph'}
      </button>

      {show && (
        <p>
          React is a popular JavaScript library used for building
          interactive user interfaces. The useState hook helps us
          manage data and update the screen dynamically whenever
          a user interacts with the application.
        </p>
      )}
    </div>
  );
}

export default App;