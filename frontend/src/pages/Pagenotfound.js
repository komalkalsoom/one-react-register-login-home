import React from 'react'
import Layout from '../components/Layout/Layout'

const Pagenotfound = () => {
  return (
  <Layout title={"Page Not Found"}>
     <div className='center-div'>
     <div>
     <h1>404</h1>
     <p>Oop ! Page Not Found</p>
    <button className='btn btn-outline-dark'>Go Back</button>
     </div>
     </div>
  </Layout>
  )
}

export default Pagenotfound