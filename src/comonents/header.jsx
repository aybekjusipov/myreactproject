function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav>
          <h1>
            <img src="" alt="" />
          </h1>

          <div className="nav-links">
            <ul className="nav-links_List">
              <li className="link">
                <Link to="/"> Home </Link>
              </li>
              <li className="link">
                <Link to="/signin"> Signin </Link>
              </li>
              <li className="link">
                <Link to="/signup"> Signup </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
