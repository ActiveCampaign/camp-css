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

### As a package

```sh
yarn add camp-css
```

With npm:

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
