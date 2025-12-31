
# drcrowther-webd

This project is a modern React + TypeScript web app, now powered by [Vite](https://vitejs.dev/) for fast development and builds. It uses [Yarn](https://yarnpkg.com/) for package management.

## Getting Started

1. **Clone the repo:**
  ```sh
  git clone https://github.com/crowtherdr/drcrowther-webd.git
  cd drcrowther-webd
  ```
2. **Install dependencies:**
  ```sh
  yarn install
  ```
3. **Start the dev server:**
  ```sh
  yarn dev
  ```
  Open [http://localhost:5173](http://localhost:5173) to view it in the browser (default Vite port).

## Available Scripts

All scripts below are run with Yarn:

### Development
- `yarn dev` — Start the Vite development server (auto-opens browser)
- `yarn build` — Build the app for production (output in `dist/`)
- `yarn preview` — Preview the production build locally

### Testing
- `yarn test` — Run Jest unit tests
- `yarn test:watch` — Run Jest in watch mode for development
- `yarn test:ci` — Run all tests (Jest + Cypress) for CI/CD (headless, no browser)
- `yarn cypress:open` — Open Cypress test runner (interactive)
- `yarn cypress:run` — Run Cypress E2E tests (headless)

### Code Quality
- `yarn lint` — Run ESLint and Prettier checks on all JS/TS files
- `yarn lint:fix` — Auto-fix lint and formatting issues

## Tooling & Features

- **Vite** for fast dev/build
- **React 19** with **TypeScript**
- **Node 24** required
- **ESLint** (flat config) and **Prettier** for code quality and formatting
- **Jest** + **React Testing Library** for unit/component testing
- **Cypress** for E2E testing
- **framer-motion** for animation (replacing react-reveal)
- **react-parallax-tilt** for tilt effects (replacing react-tilt)
- **Linaria** for zero-runtime CSS-in-JS

## Testing

This project uses both Jest and Cypress for comprehensive testing:

- **Jest**: Unit and component tests with React Testing Library
- **Cypress**: End-to-end testing

### Running Tests Locally
```sh
# Unit tests only
yarn test

# E2E tests (interactive)
yarn cypress:open

# All tests (CI mode)
yarn test:ci
```

### CI/CD Testing
The `test:ci` script is optimized for continuous integration:
- Starts the Vite dev server automatically
- Runs Jest tests in CI mode
- Runs Cypress tests headlessly
- Cleans up background processes

### Browser Control
The `.env` file can control whether Vite opens a browser:
- Set `VITE_CI=true` to suppress browser opening (useful for CI)
- Omit or set to empty for normal browser behavior

## Migration Notes

- This project was originally bootstrapped with Create React App, but is now fully migrated to Vite. All references to CRA, react-app-rewired, and customize-cra have been removed.
- All animation and tilt effects use modern, actively maintained libraries.
- Linting uses ESLint v9+ flat config. See `eslint.config.js` for details.

## Deployment

Build the app with:
```sh
yarn build
```
The output will be in the `dist/` folder, ready for static hosting or deployment.

---

To learn more about the tools used:
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint Flat Config Migration](https://eslint.org/docs/latest/use/configure/migration-guide)
