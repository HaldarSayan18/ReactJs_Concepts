// import logo from './logo.svg';
import './App.css';
import IndexPage from './CRUD operation/IndexPage';
/* import HookParent from './hooks_concept/useContext_hook/HookParent';
import ExampleCarComponent from './props_concept/props_drilling/ExampleCarComponent';
import Props1 from './props_concept/Props1';  */
import ParentState from './state_concept/ParentState';
import { Clock } from './state_concept/class_component/Clock';
import UseState from './hooks_concept/useState_hook/UseState';
import UseEffect from './hooks_concept/useEffect_hook/UseEffect';

function App() {
  return (
    <div className="App">
      <div className='props_concept'>
        {/* Props application
      <Props1/>
      {/* fetching car name, car info to car component and showing it on the browser -> application of props
      <ExampleCarComponent/> */}

        {/* useContext() hook application 
      <HookParent />
      */}

        {/* useContext() hook application 
        <HookParent/>
        */}
      </div>
      {/* <div className='state_concept'>
        <ParentState/>
      </div> */}
      {/* <div className='hook_concept'>
        <UseState/>
      </div> */}
      <UseEffect/>
      {/* <Clock/> */}
      {/* <IndexPage/> */}
    </div>
  );
}

export default App;
