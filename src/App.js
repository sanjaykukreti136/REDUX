import { useSelector, useDispatch } from 'react-redux';
import { countIncrement, countDecrement } from './redux/action';
let App = () => {

  let state = useSelector((state) => console.log(state));
  let dispatch = useDispatch();

  return (
    <>

      {/* <button onClick={() => {
        dispatch(countIncrement());
      }} >+</button>
      <p>{state}</p>
      <button onClick={() => {
        dispatch(countDecrement())
      }} >-</button> */}
    </>
  )
}

export default App;