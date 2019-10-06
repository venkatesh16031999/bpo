import React from 'react';
import Navigation from '../navigation/navigation';


const Layout=(props)=>{
    return(
        <div>
            <div>
            <Navigation />
            </div>

            {props.children}


        </div>
    )
}

export default Layout;