
import './App.css'

function App() {

  function clickMe() {
    alert('hello from ClickMe function');
  }

  const clickMe2 = () => {
    alert('hello from Arrow function');
  }
  return (
    <>
      <h1>React Core concept part 2</h1>
      <button onClick={clickMe}>Click me</button>
      <button onClick={clickMe2}>Click me2</button>
    </>
  )
}

export default App
