
import './App.css'

function App() {

  function clickMe() {
    alert('hello from ClickMe function');
  }

  const clickMe2 = () => {
    alert('hello from Arrow function');
  }


  const clickMe4 = (num) => {
    alert(num + 6);
  }
  return (
    <>
      <h1>React Core concept part 2</h1>
      <button onClick={clickMe}>Click me</button>
      <button onClick={clickMe2}>Click me2</button>
      <button onClick={() => {alert('click from arrow function in onClick')}}>Click me3</button>
      <button onClick={() => clickMe4(5)}>Click me4</button>
    </>
  )
}

export default App
