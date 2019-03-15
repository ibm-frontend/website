# FED@IBM

This is the FED@IBM website which is built using GatsbyJS.

## 📂 Structure

```
src
├── components
├── content
├── data
├── layouts
├── pages
├── styles
├── templates
```

## 👩‍💻 Development

- 🤝 [Contribution Guidelines](.github/CONTRIBUTING.md)
- 📚 [Content/Markdown Guidelines](docs/CONTENT.md)
- 🗺 [Navigation Guidelines](docs/NAVIGATION.md)

Install dependencies

```
yarn
```

Build website-addons package
```
cd packages/addons-website
yarn build
```

Run dev environment

```
yarn dev
```

Run internal dev environment

```
yarn dev:internal
```

## 🚀 Build

Runing the build commands generates all the files and places them in the `public` folder.

Build external site

```
yarn build:external
```

Build internal site

```
yarn build:internal
```
