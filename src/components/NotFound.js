import React from 'react'
import {Layout} from 'antd'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <Layout>
    <div style={{margin: 'auto'}}>
      <h1 style={{color: 'red', textAlign: 'center'}}>404 page not found</h1>
      <p>We are sorry but the page you are looking for does not exist.</p>
      <p style={{textAlign: 'center'}}>
        Try to go back or go to the <Link to="/">home page</Link>
      </p>
    </div>
  </Layout>
)

export default NotFound
