import { useSelector, useDispatch } from 'react-redux';
import { countIncrement } from './redux/action';
let App = () => {

  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <>

      <button onClick={() => {
        dispatch(countIncrement());
      }} >+</button>
      <p>{state}</p>
      <button>-</button>
    </>
  )
}

export default App;