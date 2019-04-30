import React from "react"
import {Link} from 'gatsby'
import Header from '../components/header'
import Container from "../components/container"

export default () => (
    <Container>
        <div style={{ color: `purple`}}>
        <Link to="/contact/">Contact Us</Link>
        <Link to="/about/">About</Link>
        <Link to ="/about-css-modules/"> about-css-module</Link>
            <Header/>    
            <h1>Hello Gatsby!</h1>
            <p> New Paragraph</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
    </Container>
) 
