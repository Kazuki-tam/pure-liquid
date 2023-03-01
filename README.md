# Pure Liquid

`Pure Liquid` is a starter kit with Liquid for front-end projects. This starter kit focuses on building a static website and suits small to medium projects like a landing page and a corporate website.

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/pure-liquid)](https://github.com/Kazuki-tam/pure-liquid/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/pure-liquid)](https://github.com/Kazuki-tam/pure-liquid/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2022)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/pure-liquid)

## Features

- Built-in static site generator
- Breaking HTML smaller files with Liquid
- HTML Validation with HTML-validate
- Lint TypeScript files with ESLint
- Lint SCSS files with Stylelint
- Format code with prettier
- Compress images
- Creating SVG sprites
- Built-in test runner with Jest and Playwright

## Requirements

- [Node v16+ (16.17.0)](https://nodejs.org/en/)

## Main Dependencies

- [Yarn](https://yarnpkg.com/)
- [11ty](https://www.11ty.dev/)
- [Liquid](https://shopify.github.io/liquid/)
- [TypeScript](https://www.typescriptlang.org/)
- [esbuild](https://esbuild.github.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [imagemin](https://github.com/imagemin/imagemin#readme)
- [svg-sprite](https://github.com/svg-sprite/svg-sprite#readme)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [HTML-vallidate](https://html-validate.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Playwright](https://playwright.dev/)

## How to Use

Clone this repository and install dependencies

```bash
yarn install
```

## Available Commands

Start your project in development mode

```bash
yarn start
```

Start your project in production mode

```bash
yarn serve
```

Build your project for development

```bash
yarn build
```

Build your project for production

```bash
yarn release
```

Lint your project files

```bash
yarn lint
```

Fix your project files

```bash
yarn lint:fix
```

<details>
<summary>Other support commands</summary>

Install missing TypeScript typings

```bash
yarn postInstall
```

Check the package's license

```bash
yarn checkLicense
```

Run unit testing.

```bash
yarn unit
```

```bash
yarn unit:watch
```

Run UI testing.

```bash
yarn e2e
```

```bash
yarn e2e:headed
```

</details>

## Liquid

[11ty](https://www.11ty.dev/) generates HTML files from the [Liquid](https://liquidjs.com/index.html) template.

[📖 Learn Liquid](https://liquidjs.com/index.html)

## Sass (Dart Sass)

You can manage style sheets logically with Sass.

[📖 Learn Sass](https://sass-lang.com/)

## TypeScript

This starter kit supports TypeScript.
`postInstall` command will help you to install typings in this project.

[📖 Learn TypeScript](https://www.typescriptlang.org/)

## Jest

Jest is built-in in this project. You can run Jest from the command line.

[📖 Learn Jest](https://jestjs.io/)

## Playwright

Playwright enables reliable end-to-end testing.

[📖 Learn Playwright](https://playwright.dev/)

## SVG sprites

Add SVG files into the icons folder.

```
src/assets/icon/
```

Call the icon with ID.

```html
<svg class="icon" role="img">
  <use xlink:href="/assets/svg-sprite/svg-sprite.svg#sample"></use>
</svg>
```

## Configurations

<details>
<summary>Configuration list</summary>

- [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- [tsconfig.json](https://www.typescriptlang.org/tsconfig)
- [.gitignore](https://github.com/github/gitignore)
- [.editorconfig](https://editorconfig.org/)
- [.eleventy.js](https://www.11ty.dev/docs/config/)
- [.eslintrc.json](https://eslint.org/docs/user-guide/configuring/)
- [.htmlvalidate.json](https://html-validate.org/usage/#configuration)
- [.postcssrc.json](https://github.com/postcss/postcss-load-config)
- [.prettierrc](https://prettier.io/docs/en/configuration.html)
- [.stylelintrc.json](https://stylelint.io/user-guide/configure)
- [imagemin.mjs](https://github.com/imagemin/imagemin)
- [jest.config.ts](https://jestjs.io/docs/configuration)
- [playwright.config.ts](https://playwright.dev/docs/test-configuration)
- [svgconfig.json](https://github.com/svg-sprite/svg-sprite#readme)
- [svgo.json](https://github.com/svg/svgo#readme)
- [esbuild.ts](https://esbuild.github.io/)

</details>

## Recommended IDE

- [Visual Studio Code](https://code.visualstudio.com/)

## Contributes

Pull requests are always welcome.

## License

MIT
