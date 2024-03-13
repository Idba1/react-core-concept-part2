
import './App.css'

function App() {

  function clickMe(){
    alert('hello from ClickMe function');
  }

  return (
    <>
      <h1>React Core concept part 2</h1>
      <button onClick={clickMe}>Click me</button>
    </>
  )
}

export default App
