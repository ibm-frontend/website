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

## 🚀 Build

Runing the build commands generates all the files and places them in the `public` folder.

Build site

```
yarn build
```

## Deploy to private cloud (staging environment)

You must be added to the private cloud to deploy to the IBMDesignOrg `front-end` space. The files in the `public` distribution folder are deployed so a build must be done prior to pushing.

```
yarn build 
cf push -f manifest.internal.yml
```

