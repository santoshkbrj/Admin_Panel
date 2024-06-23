import React from 'react'

function NavNotice() {
    return (

        <li className='nav-item dropdown'>
            <a className='nav-link nav-icon' href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className='badge bg-primary badge-number'>4</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                    You have 4 new notification<a href="#">
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>View all</span>
                    </a>
                </li>
                <li> <hr className="dropdown-divider" /></li>
                <li className='notification-item'>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>1 hr. ago</p>
                    </div>
                </li>
                <li className="notification-item">
                    <i className="bi bi-x-circle text-warning"></i>
                    <div>
                        <h4>Sit Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        <p>2 hr. ago</p>
                    </div>
                </li>
                <li> <hr className="dropdown-divider" /></li>
                <li className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>Sit Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        <p>4 hr. ago</p>
                    </div>
                </li>
                <li> <hr className="dropdown-divider" /></li>
                <li className="dropdown-footer">
                    <a href="#">Show all notification</a>
                </li>
            </ul>
        </li>

    )
}

export default NavNotice