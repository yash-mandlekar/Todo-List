import React from 'react'
import TodoList from './TodoList';
const App = () => {
  // const ref = React.useRef(null);
  // const handleScroll = () => {
  //   ref.current.scrollBy(0, 100);
  // }

  return (
    <>
        <TodoList/>
        {/* <div ref={ref} className="box-cnt">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </div>
        <button onClick={handleScroll}>scroll</button> */}
    </>
  );
}

export default App;
