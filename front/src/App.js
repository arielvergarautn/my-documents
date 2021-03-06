import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/userAction';
import Home from './components/Home';
import './styles/app.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  return (
    <div className="App">
      <h1>Hello world h1</h1>
      <h2>Hello world h2</h2>
      <h3>Hello world h3</h3>
      <h4>Hello world h4</h4>
      <a href="#">Hello world</a>
      <p>Hello world p</p>
      {/* <input type="text" value='Hello world' /> */}
      <Home />
    </div>
  );
}

export default App;
