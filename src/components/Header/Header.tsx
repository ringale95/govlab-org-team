import { Icon } from "../Icon/Icon";

const Header = () => {
  return (
    <>
      <header className="gvl-header">
        <div className="gvl-header-group">
          <Icon
            name="menu"
            size="md"
            color="nav-icon-primary"
            sx={{ padding: "10px 15px" }}
          />
          <div className="gvl-header-search-form gvl-header-search-trigger">
            <Icon
              name="search"
              size="md"
              color="nav-icon-primary"
              sx={{ padding: "10px 15px" }}
            />

            <input className="gvl-header-search-input" type="text" />
            <input
              className="gvl-header-search-submit"
              type="submit"
              value="Search"
            />
          </div>
        </div>

        <div className="gvl-header-logo logo">
          <a href="./">
            <img
              src="src/assets/images/govlablogo1x/the-govlab-logo-white.png"
              alt="The GovLab Logo"
            />
          </a>
        </div>

        <div className="gvl-header-group">
          <a className="gvl-header-site-button" href="/our-sites">
            OUR SITES
          </a>
          <a
            href="https://twitter.com/TheGovLab"
            className="gvl-header-nav-item"
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
            className="gvl-header-nav-item"
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
