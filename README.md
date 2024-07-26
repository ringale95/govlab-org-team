# GovLab Team page

To develop a dynamic and responsive web page to showcase the team members of GovLab. The goal is to recreate the team page from TheGovLab website, ensuring that it accurately represents team data provided via an API.

## Project Setup

Initialize a new Vite project named `govlab-team-page` with the React and TypeScript template:

```
npm create vite@latest govlab-team-page --template react-ts && cd govlab-team-page
```


## Run Commands

**Clone Repository:**
```
git clone https://github.com/ringale95/govlab-org-team.git 
```

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

Here’s how you can include the updated information about the components in your README:

---

## Reusable Components

While recreating the team members page, several key visual components were identified, including Avatar, Text, Icon, Dropdown, and TeamCard. To streamline development and ensure consistency across the website, these components were implemented as reusable, standalone elements with dynamic inputs. This approach enhances maintainability and facilitates the integration of these components throughout the site.

- **Avatar Component:** The `Avatar` component is a reusable element for displaying profile images, with customizable size and optional inline styles. It takes a URL for the image and an `AvatarType` to adjust its size, defaulting to a placeholder image if none is provided.

- **Icon Component:** The `Icon` component is a reusable element that allows for customizable icons with dynamic properties such as name, size, color, and optional hover effects.

- **Dropdown Component:** The `Dropdown` component is a reusable element that toggles visibility to display its children and optionally handles click events.

- **Text Component:** The `Text` component is a versatile and reusable element that supports different variants, HTML tags, colors, and optional links.

Additionally, JSDoc comments have been integrated across all React components wherever possible, enhancing IntelliSense and improving the overall development experience.

