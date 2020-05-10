import React from 'react'
import { Link } from 'gatsby'

const Home = () => <div>
  <h1>So you are Home</h1>
	<p>You IS now logged in! <Link to="/app/profile">View profile</Link></p>
	<p><Link to="/app/profile">another link to View profile</Link></p>
	<p>Now go build something great and deploy it using the <a href="https://console.amplify.aws">AWS Amplify Console</a></p>
	</div>

export default Home
