import "./login.css"
import { useContext, useRef} from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Context/Context"
const Login = ()=> {
  const usercontext = useContext(UserContext)
  const email = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate()
  const handelLogin = async()=>{
  if(email.current.value !== "" && password.current.value !== ""){
    setInterval(()=>{
      navigate("/")
    },3000)
    usercontext.setUser(true)
  }
}
  return (
    <main className='main'>
        <section className="loginintro">
            <img src="wall3.jpg" alt="" />
        </section>
        <section className="loginform">
          <h3 className="loginTitle">Login</h3>
            <input type="text" placeholder='Name' ref={email} />
            <input type="password" placeholder='Password' ref={password} />
            <button className="btn" onClick={handelLogin}>Login</button>
            <h5 className="logincreate" onClick={()=>navigate("/register")} >Create an Account?</h5>
            {usercontext.user && <div><h2>Logged in</h2></div>}
        </section>
    </main>
  )
}

export default Login;