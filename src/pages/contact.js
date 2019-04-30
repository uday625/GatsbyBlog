import React from 'react';
import {Link} from 'gatsby'
import Header from '../components/header'

const contact = () => {
    return ( 
        <div>
            <Header headerText ="Contact Us"/>
            <Link to ="/">Home</Link>
            <p> This is the contact page.</p>
        </div>
     );
}

export default contact;