# GovLab Team page

To develop a dynamic and responsive web page to showcase the team members of GovLab. The goal is to recreate the team page from TheGovLab website, ensuring that it accurately represents team data provided via an API.

## Project Setup

Initialize a new Vite project named `govlab-team-page` with the React and TypeScript template:

```
npm create vite@latest govlab-team-page --template react-ts && cd govlab-team-page
```


## Run Commands

**Install dependencies:**
  ```bash
  npm install
  ```

**Start the development server:**
  ```bash
  npm run dev
  ```

**Build the project for production:**
  ```bash
  npm run build
  ```

Here’s an updated version of your README that incorporates the additional information about the `components` and `container` folders:

---

## Styling Foundations

Global styles are used to create a pseudo-framework for building reusable components. The `css` folder at the root level contains:

- [`fonts`](./src/css/fonts/index.css)
- [`colors`](./src/css/colors/index.css)

### Proxima Nova Fonts

For this project, we've chosen [Proxima Nova](https://online-fonts.com/fonts/proxima-nova) as the default font family. Relevant file changes can be found in `css/fonts` within `index.css`.

### Color Palette

This stylesheet highlights the various colors that would be used throughout this website. Each color is defined as a custom CSS variable and is used to maintain a consistent look and feel across the website.

### Components and Containers

In addition to global styles, specific styles for individual components and containers are maintained in separate folders:

- **`components` Folder:** Contains CSS files for all the individual React components developed for this app, such as:
  - `header`
  - `copyright`
  - `avatar`
  - `dropdown`
  - `project-item`
  - `team-member`
  - `footer`

- **`containers` Folder:** Includes styles specific to the layout and structure of various containers used throughout the application.

By organizing styles in this manner, we ensure a modular and maintainable approach to styling, with clear separation between global styles and component-specific styles.

