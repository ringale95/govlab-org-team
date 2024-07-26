import { MouseEventHandler } from "react";
import { Icon } from "../Icon/Icon";

interface HeaderProps {
  menuActive: boolean;
  toggleMenu: MouseEventHandler<HTMLDivElement>;
}

const Header = ({ menuActive, toggleMenu }: HeaderProps) => {
  return (
    <>
      <header className="gvl-header">
        <div className="gvl-header-group">
          <div
            className="e-nav-item js-nav-trigger e-nav-trigger"
            onClick={toggleMenu}
          >
            <Icon
              name="menu"
              size="md"
              color="nav-icon-primary"
              sx={{ padding: "10px 15px" }}
            />
          </div>
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
      <nav className={`b-main-menu ${menuActive ? "m-active" : ""}`}>
        <a href="./">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/events">Events</a>
        <a href="/publications">Publications</a>
        <a href="/team">Team</a>
        <a href="/global-advisory-council">Global Advisory Council</a>
        <a href="/our-transparency">Our Transparency</a>
        <a href="/job-board">Job Board</a>
        <a href="/contact">Contact</a>
      </nav>
    </>
  );
};

export default Header;
