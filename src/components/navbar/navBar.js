import React from 'react'
import './navBar.css'

function NavBar() {
    return (
        <div className='navBar' id='navBar'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetFlix-Logo" />
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar-logo" />
            <div className="options">
                <p>Home</p>
                <p>Tv Shows</p>
                <p>Movies</p>
                <p>News & Popular</p>
                <p>My List</p>
                <p>Browse by Language</p>
            </div>
        </div>
    )
}

export default NavBar;
