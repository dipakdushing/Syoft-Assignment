import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../../../redux/userData/action";

export const Navbar = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user.isUserLoggedIn);
  const user = useSelector((state) => state.user.userData.user);

  function handleLogout() {
    dispatch(userLogoutAction());
  }
  return (
    <section className="navbar">
      <nav className="navbar__container">
        <Link to="/" className="links">
          <h1 className="site-logo">SYOFT PRODUCT'S</h1>
        </Link>

        <Link to="/" className="links">
          <h1 className="site-logo">SYOFT</h1>
        </Link>
        {userStatus ? (
          <div className="navbar__user">
            <p>Welcome {user.name}</p>
            <p id="waving-hand">👋</p>
          </div>
        ) : null}

        {userStatus ? (
          <span className="user_status" onClick={handleLogout}>
            Sign Out
          </span>
        ) : (
          <Link to="/login">
            <span className="user_status">Sign In</span>
          </Link>

        )
        
        }

      </nav>
    </section>
  );
};
