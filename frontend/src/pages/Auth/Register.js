import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [phone,setPhone] = useState("");
const [address,setAddress] = useState("");
const navigate = useNavigate()
// form function
const handleSubmit = async (e) => {
e.preventDefault();
console.log(name,email,password,phone,address);

try {
    const res = await axios.post('http://localhost:8080/api/v1/auth/register',{
            name,email,password,phone,address
        }
    )
    if(res.data.success){
        toast.success("Register Successfully");
        toast.success(res.data.message);
        navigate('/login')
    }else{
        toast.error(res.data.message);
    }
} catch (error) {
    
}
}

  return (
    <Layout title="Register Page">
   <div className="container">
 <div className="row">
 <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div className="col-lg-6 col-10">
          <form className="p-3 shadow mt-2" onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
               Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
              
            </div>
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
              <label htmlFor="exampleInputAddress" className="form-label">
               Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAddress"
                aria-describedby="emailHelp"
                value={address}
                onChange={(e)=>{setAddress(e.target.value)}}
              />
              
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">
               Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPhone"
                aria-describedby="emailHelp"
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
              />
              
            </div>
            <div className="mb-3">
             <p>Already register? <Link to="/login">login</Link> </p>
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Register/signUp
            </button>
          </form>
        </div>
      </div>
 </div>
   </div>

    </Layout>
  );
};

export default Register;
