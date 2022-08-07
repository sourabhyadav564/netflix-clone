import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false)

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar)
    }, []);

    return (
        <div className={'nav ${show && "nav_black"}'}>
            <div className='nav_content'>
                <img className="nav_logo" src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="" />
                <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
                {/* <h1>This is a NavBar</h1> */}
            </div>
        </div>
    )
}

export default Nav