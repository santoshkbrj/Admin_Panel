import React from 'react';
import profileImg from '../images/user.jpg';
import './navavatar.css'

function NavAvatar() {
    return (
        <li className="nav-item dropdown pe-3">
            <a href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                <img src={profileImg} alt="profile" className='rounded-circle' />
                <span className='d-none d-md-block dropdown-toggle ps-2'>F. David</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-start dropdown-menu-arrow profile">
                <li className="dropdown-header">
                    <h6>David</h6>
                    <span>Web developer</span>
                </li>
                <li><hr className='dropdown-divider' /></li>
                <li>
                    <a className='dropdown-item d-flex align-items-center' href="users-profile.html">
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                </li>
            </ul>
        </li>
    )
}

export default NavAvatar