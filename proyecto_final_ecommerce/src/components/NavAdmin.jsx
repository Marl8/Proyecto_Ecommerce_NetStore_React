import {Link} from 'react-router-dom';

const NavAdmin = () => {
  return (
    <>
      <li className="link">
          <Link to="/admin">Admin</Link>
      </li>
      <li className="link">
        <button className="navButton">
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </li>
    </>
  );
};

export default NavAdmin;
