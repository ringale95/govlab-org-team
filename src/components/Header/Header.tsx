import { Icon } from "../Icon/Icon";

const Header = () => {
  return (
    <>
      {/* <header className="header-container">
      <Icon name="menu" size="md" color="icon-tertiary" />
      <Icon name="search" size="md" color="icon-tertiary" />
    </header> */}
      <header className="header-container">
        <div className="header-nav-group">
          <Icon
            name="menu"
            size="md"
            color="nav-icon-primary"
            sx={{ padding: "10px 15px" }}
          />
          <form className="header-nav-search-group" action="">
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

        <div className="e-logo">
          <a href="./">
            <img src="static/img/the-govlab-logo-white.png" alt="" />
          </a>
        </div>

        <div className="e-social-media e-nav-group">
          <a
            className="e-site-button"
            href="/our-sites"
            // style="color: rgba(255,255,255,0.7); background-color: rgba(255,255,255,0.2); padding: 5px; font-size: 12pt; font-weight: 600"
          >
            OUR SITES
          </a>
          <a
            href="https://twitter.com/TheGovLab"
            className="e-nav-item"
            target="_blank"
          >
            <i className="e-social-media-item fa fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/user/TheGovLab"
            className="e-nav-item"
            target="_blank"
          >
            <i className="e-social-media-item fa fa-youtube-play"></i>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
