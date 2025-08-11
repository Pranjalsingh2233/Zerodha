import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const Logout = async () => {
    const { data } = await axios.post(
      "https://zerodha-6yfr.onrender.com/logout",
      {},
      { withCredentials: true }
    );
    const { status, message } = data;
    if (status) {
      console.log(message);
    }
    setUser("");
    navigate("/signup");
  };

  return (
    <nav
      class="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "white" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="images/logo.svg" alt="logo" style={{ width: "128px" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ flexGrow: "0" }}
        >
          <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {user ? (
                  <div className="dropdown">
                    <a
                      class="nav-link dropdown-toggle d-flex align-items-center"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="profile">{user[0]?.toUpperCase()}</div>
                      <div className="pb-1">{user}</div>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="https://zeroddha-dashboard.netlify.app"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <div class="dropdown-item hover" onClick={Logout}>
                          <i class="fa-solid fa-arrow-right-from-bracket"></i>
                          &nbsp;&nbsp;Logout
                        </div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    Singup
                  </Link>
                )}
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
