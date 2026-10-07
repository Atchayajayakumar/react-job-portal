function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-5 py-3">

      {/* Logo */}
      <a className="navbar-brand fw-bold " href="/">
        JobNest
      </a>

      {/* Right side */}
      <div className="d-flex align-items-center gap-4">


        {/* Notification Bell */}
        <button className="btn btn-link text-white position-relative">
          <i className="bi bi-bell-fill fs-4"></i>

          {/* Notification dot */}
          <span className="position-absolute top-0 start-100 translate-middle 
                           badge rounded-pill bg-danger">
            3
          </span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
