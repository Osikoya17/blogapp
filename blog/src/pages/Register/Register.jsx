import { useContext, useRef} from "react"
import UserContext from "../../Context/Context"
import {useNavigate} from "react-router-dom"
import "./Register.css"

const Register = ()=> {
  const usercontext = useContext(UserContext)
  const email= useRef(null)
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
    <main className='container'>
        <section className="registerintro">
            <img src="wall4.jpg" alt="" />
        </section>
        <section className="registerform">
          <h3 className="registerTitle">Register</h3>
            {/* <input type="text" placeholder='Username' onChange={f=>setUsername(f.target.value)} /> */}
            <input type="email" placeholder='Email' ref={email} />
            <input type="password" placeholder='Password' ref={password} />
            <button className="btn" onClick={handelLogin}>Register</button>
            <h5 className="registercreate" onClick={()=> navigate("/login")}>Already have an Account?</h5>
        </section>
    </main>
  )
}

export default Register;