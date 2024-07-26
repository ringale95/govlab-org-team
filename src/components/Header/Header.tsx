import { Icon } from "../Icon/Icon";

const Header = () => {
  return (
    <>
      {/* <header className="header-container">
      <Icon name="menu" size="md" color="icon-tertiary" />
      <Icon name="search" size="md" color="icon-tertiary" />
    </header> */}
      <header className="header-container">
        <div className="header-group">
          <Icon
            name="menu"
            size="md"
            color="nav-icon-primary"
            sx={{ padding: "10px 15px" }}
          />
          <form className="header-group" action="">
            <div className="e-nav-item js-search-trigger e-search-trigger">
              <Icon
                name="search"
                size="md"
                color="nav-icon-primary"
                sx={{ padding: "10px 15px" }}
              />
            </div>
            <input className="header-search" type="text" />
            <input
              className="header-search-submit"
              type="submit"
              value="Search"
            />
          </form>
        </div>

        <div className="header-group">
          <a href="./">
            <img
              src="src/assets/images/govlablogo1x/the-govlab-logo-white.png"
              alt=""
            />
          </a>
        </div>

        <div className="header-group">
          <a
            className="e-site-button"
            style={{ color: "white" }}
            href="/our-sites"
          >
            OUR SITES
          </a>
          <a
            href="https://twitter.com/TheGovLab"
            className="e-nav-item"
            style={{ color: "white" }}
            target="_blank"
          >
            <Icon
              name="twitter"
              size="md"
              color="nav-icon-primary"
              sx={{ padding: "10px 15px" }}
            />
          </a>
          <a
            href="https://www.youtube.com/user/TheGovLab"
            className="e-nav-item"
            style={{ color: "white" }}
            target="_blank"
          >
            <Icon
              name="youtube"
              size="md"
              color="nav-icon-primary"
              sx={{ padding: "10px 15px" }}
            />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
