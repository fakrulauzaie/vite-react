import '../assets/App.css'
import ComplexWires from '../components/complexWires./complexWires';

function ComplexWiresPage() {
  
  return (
    <>
      <h1>Complex Wires</h1>
      <p className="read-the-docs">
        Go through each available wire one by one (if the defuser doesn&#39;t memorize what to do), step by step
      </p>

      <p className="read-the-docs">
        <b>Look at the answer at the bottom (if visible) ONLY AFTER YOU&#39;VE CHECKED ALL THE VALUES ARE CORRECT</b>
      </p>
      <ComplexWires />
    </>
  )
}

export default ComplexWiresPage;