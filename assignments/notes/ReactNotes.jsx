import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
  useCallback,
  useMemo,
} from 'react';

// 1. useState: Manages state in a functional component
const Counter = () => {
  // Declaring state variable "count" and function "setCount"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// 2. useEffect: Runs side effects (e.g., data fetching, subscriptions)
const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching data from an API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => setData(json));

    // Optional: Cleanup (e.g., clearing subscriptions) on component unmount
    return () => console.log('Cleanup on unmount');
  }, []); // Empty dependency array ensures this effect runs once on mount

  return data ? <p>{data.title}</p> : <p>Loading...</p>;
};

// 3. useContext: Consumes values from a React context
const ThemeContext = React.createContext('light');

const ThemedComponent = () => {
  // Accesses the context value (provided from a parent component)
  const theme = useContext(ThemeContext);

  return <div>Current Theme: {theme}</div>;
};

// 4. useReducer: Manages more complex state logic (alternative to useState)
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterWithReducer = () => {
  // useReducer hook accepts a reducer function and an initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

// 5. useRef: Creates a mutable reference to a DOM element or value
const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Focuses on the input element when the button is clicked
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

// 6. useCallback: Memoizes a function to avoid re-creating it on every render
const CallbackExample = () => {
  const [count, setCount] = useState(0);

  // Memoizes the callback to avoid unnecessary re-renders
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// 7. useMemo: Memoizes a computed value to avoid unnecessary recalculations
const ExpensiveComputation = ({ number }) => {
  // useMemo ensures this computation only runs when "number" changes
  const squared = useMemo(() => {
    console.log('Calculating square...');
    return number * number;
  }, [number]);

  return <p>Squared: {squared}</p>;
};

// 8. useLayoutEffect: Runs synchronously after all DOM mutations (rarely used)
const LayoutEffectExample = () => {
  useLayoutEffect(() => {
    console.log('useLayoutEffect: runs before the browser paints');
  });

  return <div>useLayoutEffect Example</div>;
};

// 9. Custom Hook: Reusable logic across components
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const WindowWidthComponent = () => {
  const width = useWindowWidth();

  return <p>Window width: {width}px</p>;
};

// Main component rendering all examples
const App = () => {
  return (
    <div>
      <h1>React Cheat Sheet</h1>
      <Counter />
      <DataFetcher />
      <ThemedComponent />
      <CounterWithReducer />
      <FocusInput />
      <CallbackExample />
      <ExpensiveComputation number={4} />
      <LayoutEffectExample />
      <WindowWidthComponent />
    </div>
  );
};

export default App;
