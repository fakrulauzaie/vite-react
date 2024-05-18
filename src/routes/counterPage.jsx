import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../assets/App.css'
import Counter from '../components/counter/Counter'

function CounterPage() {
  
  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <Counter/>
      </div>
      <p className="read-the-docs">
        wow
      </p>
    </>
  )
}

export default CounterPage;
