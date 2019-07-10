import * as React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <div>
    <h1>404: Page not found.</h1>
    <p>
      You've hit the void. <Link to="/">Go back.</Link>
    </p>
  </div>
)

export default NotFoundPage
