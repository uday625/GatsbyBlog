import React from 'react';
import {Link} from 'gatsby'
import Header from '../components/header'

const about = () => {
    return ( 
        <div>
            <Link to ="/">Home</Link>
            <Link to="/contact/">Contact Us</Link>       
            <div style={{ color: `teal` }}>
                <Header headerText ="About Getsby"/>
                <p>Such wow. Very React.</p>
            </div>
      </div>
     );
}

export default about;