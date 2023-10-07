import React from 'react';

function App() {
  React.useEffect(() => {
    console.log('Effect setup code runs');

    return () => {
      console.log('Effect cleanup code runs');
    };
  }, []);

  React.useLayoutEffect(() => {
    console.log('Layout effect setup code runs');

    return () => {
      console.log('Layout effect cleanup code runs');
    };
  }, []);

  console.log('React renders the component');

  return <h1>Strict Effects In React 18</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
