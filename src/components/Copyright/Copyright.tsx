/**
 * Copyright component that displays a Creative Commons license badge and license information.
 * @returns {JSX.Element} The rendered Copyright component.
 */
export const Copyright = () => {
  return (
    <div className="copyright-container">
      <div className="copyright-wrapper">
        <a
          className="cc-badge"
          rel="license"
          href="http://creativecommons.org/licenses/by-sa/4.0/"
        >
          <img
            alt="Creative Commons License"
            style={{ borderWidth: 0 }}
            src="src/assets/images/cc.png"
          />
        </a>
        This work is licensed under a
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
          {" "}
          Creative Commons Attribution-ShareAlike 4.0 International License
        </a>
      </div>
    </div>
  );
};
