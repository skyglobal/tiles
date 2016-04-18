Tiles
=====

## Purpose

This is a first step to share Polaris tile styles to meet Technology deadlines. A more comprehensive toolkit will replace this repo.

## Usage

[Demo page](http://skyglobal.github.io/tiles/)

### NPM

Install the repo via NPM:

```sh
npm install --save-dev git+ssh://git@github.com/skyglobal/tiles.git
```

Include the SASS module:

```scss
import '../node_modules/tiles/src/tile';
```

### Browser Support

IE8 is not officially supported.

## Releasing
Merge your PR then pull master locally

- `npm version minor` will create a commit and tag bumping the version by one minor increment
- `git push origin master` will push the new version commit
- `git push --tags` will push your new tag

