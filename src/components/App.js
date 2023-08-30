
import React from "react";
import './../styles/App.css';
import { useDispatch,useSelector } from "react-redux";
import { increase,decrease } from "../redux/actions/counterAction";


const App = () => {

  const dispatch = useDispatch()

  const count = useSelector((state)=>state.count)


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch(increase())}>increase</button>
        <button onClick={()=>dispatch(decrease())}>decrease</button>
    </div>
  )
}

export default App
