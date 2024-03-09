import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate()
// form function
const handleSubmit = async (e) => {
e.preventDefault();
console.log(email,password);

try {
    const res = await axios.post('http://localhost:8080/api/v1/auth/login',{
            email,password
        }
    )
    if(res.data.success){
        // toast.success("Register Successfully");
        // toast.success(res.data.message);
        navigate('/')
    }else{
        // toast.error(res.data.message);
    }
} catch (error) {
    
}
}
  return (
    <Layout title="Register Page">
    <div className="container">
  <div className="row">
  <div style={{height:"70vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
         <div className="col-lg-6 col-10">
         <form className="p-5 shadow mt-2" onSubmit={handleSubmit}>
           <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div className="mb-3">
             <p>Already have an account? <Link to="/login">register</Link> </p>
            </div>
            <button type="submit" className="btn btn-dark w-100">
              LogIn/signIn
            </button>
           </form>
         </div>
       </div>
  </div>
    </div>
 
     </Layout>
  )
}

export default Login