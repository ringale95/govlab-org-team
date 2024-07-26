import { MouseEventHandler } from "react";
import { Icon } from "../Icon/Icon";

interface HeaderProps {
  /**
   * Indicates whether the menu is currently active or not.
   * @type {boolean}
   */
  menuActive: boolean;

  /**
   * Function to toggle the menu state when the menu button is clicked.
   * @param {React.MouseEventHandler<HTMLDivElement>} event - The click event handler for toggling the menu.
   * @type {MouseEventHandler<HTMLDivElement>}
   */
  toggleMenu: MouseEventHandler<HTMLDivElement>;
}

/**
 * Renders the header component with a navigation trigger, logo, and navigation links.
 * Includes a menu toggle button and a search form.
 *
 * @param {HeaderProps} props - The properties for the header component.
 * @param {boolean} props.menuActive - Indicates if the menu is active.
 * @param {MouseEventHandler<HTMLDivElement>} props.toggleMenu - Click event handler to toggle the menu.
 * @returns {JSX.Element} - The JSX for the header component.
 */
const Header = ({ menuActive, toggleMenu }: HeaderProps) => {
  return (
    <>
      <header className="gvl-header">
        <div className="header-nav-trigger">
          <div className="nav-trigger-button" onClick={toggleMenu}>
            <Icon
              name="menu"
              size="md"
              color="nav-icon-primary"
              hoverable={true}
              sx={{ padding: "10px 15px" }}
            />
          </div>
          <div className="header-search-form">
            <Icon
              name="search"
              size="md"
              color="nav-icon-primary"
              hoverable={true}
              sx={{ padding: "10px 15px" }}
            />
            <input className="header-search-input" type="text" />
            <input
              className="header-search-submit"
              type="submit"
              value="Search"
            />
          </div>
        </div>
        <div className="header-logo">
          <a href="./">
            <img
              src="src/assets/images/govlablogo1x/the-govlab-logo-white.png"
              alt="The GovLab Logo"
            />
          </a>
        </div>
        <div className="header-nav-links">
          <a className="header-site-button" href="/our-sites">
            OUR SITES
          </a>
          <a
            href="https://twitter.com/TheGovLab"
            className="nav-social-link"
            target="_blank"
          >
            <Icon
              name="twitter"
              size="md"
              color="nav-icon-primary"
              hoverable={true}
              sx={{ padding: "10px 15px" }}
            />
          </a>
          <a
            href="https://www.youtube.com/user/TheGovLab"
            className="nav-social-link"
            target="_blank"
          >
            <Icon
              name="youtube"
              size="md"
              color="nav-icon-primary"
              hoverable={true}
              sx={{ padding: "10px 15px" }}
            />
          </a>
        </div>
      </header>
      <nav className={`main-menu ${menuActive ? "menu-active" : ""}`}>
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
