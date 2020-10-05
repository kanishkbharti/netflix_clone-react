import React, { useEffect, useState } from 'react'



const Nav = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }


        });

        return () => {
            window.removeEventListener("scroll");
        }

    }, []);

    return (
        <div className={`nav ${show && "nav__black"} `}>
            <img className="nav__logo" src="https://www.underconsideration.com/brandnew/archives/netflix_app_icon.jpg" alt="Netflix Logo" />
            <img className="nav__avatar" src="https://i.pinimg.com/236x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d.jpg" alt="Avatar" />

        </div>
    )
}

export default Nav
