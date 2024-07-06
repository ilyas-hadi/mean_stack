import { FaUserCircle, FaCaretDown, FaEyeSlash } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import face9 from '/face-9.png'

function LogoutContainer() {
    const [showLogout, setShowLogout]=useState(false);
    const {user, logoutUser} = useDashboardContext();
    console.log(user.name);
    return (
    <Wrapper>
        <button className="btn logout-btn" type='button' onClick={()=>{setShowLogout(!showLogout)}}>
 <FaUserCircle />
 {user?.name}
 <FaCaretDown />
        </button>
        <div className={showLogout?'dropdown show-dropdown': 'dropdown'}>
            <button type='button' className="dropdown-btn" onClick={logoutUser}>Logout</button>
        </div>

        <ul className="dropdown-menu dropdown-menu-end show">
                  <li>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar avatar-online">
                            <img src={face9} alt="face-nine" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <span className="fw-semibold d-block">John Doe</span>
                          <small className="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="changePassword.html">
                      <FaEyeSlash />
                      <span className="align-middle">Change Password</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="login.html">
                      <i className="bx bx-power-off me-2"></i>
                      <span className="align-middle">Log Out</span>
                    </a>
                  </li>
        </ul>
    </Wrapper>
  )
}

export default LogoutContainer