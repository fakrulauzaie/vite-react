import { 
    Outlet,
    Link,
} from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>WOW</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`page/1`}>Page 1</Link>
              </li>

              <li>
                <Link to={`page/password`}>Password</Link>
              </li>
              <li>
                <Link to={`page/simple-wires`}>Simple Wires</Link>
              </li>
              <li>
                <Link to={`page/complex-wires`}>Complex Wires</Link>
              </li>
            </ul>
          </nav>
          <nav>
        </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }