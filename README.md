# camp-css

> CSS behind the distinctive style of ActiveCampaign

[![npm](https://img.shields.io/npm/v/camp-css.svg)](https://www.npmjs.com/package/camp-css)
![license](https://img.shields.io/github/license/activecampaign/camp-css.svg)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/min/camp-css.svg)](https://bundlephobia.com/result?p=camp-css)
[![David](https://img.shields.io/david/dev/activecampaign/camp-css.svg)](https://david-dm.org/activecampaign/camp-css?type=dev)

## Usage

### From the CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/camp-css@latest/css/camp.min.css">
```

### From yarn

```sh
yarn add camp-css
```

### From npm

```sh
npm install camp-css
```

Now import the package wherever your css is compiled:

```css
@import 'camp-css';
```


If you have installed camp as a package and would like to reference the variables used by the package itself, you may import the source scss file rather than the compiled css file. From your projects scss add the following

```scss
@import 'camp-css/scss/camp';
```

## Contributing

1. Create a fork of the `ActiveCampaign/camp-css` repository.
2. Create a new branch to do your work on.
3. Make your fixes, edits, changes, updates, etc. Commit your changes and push to your branch.
4. Update CHANGELOG.md with your changes.
5. When you're ready to merge, create a pull request.
6. Once the PR is approved, run `npm version <major|minor|patch>` to version the node module.
7. Merge the files and delete the branch.
8. Run `npm publish` to publish the updated node module.
9. If necessary, update any relevant documentation according to your changes. If your merge creates breaking changes, have a plan in place to ensure the necessary people are aware of your changes.
