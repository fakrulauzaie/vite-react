import '../assets/App.css'
import Password from '../components/password/Password'

function PasswordPage() {
  
  return (
    <>
      <h1>Password</h1>
      <p className="read-the-docs">
        Just type all the possible letter for each position.
      </p>
      <Password />
    </>
  )
}

export default PasswordPage;