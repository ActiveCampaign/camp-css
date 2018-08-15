# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.12.1] - 2018-08-15
### Changed
- Updated npm packages to fix vulnerability.
- Type and icon styles were outputting px, changed those to rem.
- Halved padding for grid fallback.

## [0.12.0] - 2018-08-14
### Changed
- CSS Grid fallback now implements gap-sized padding on all sides of grid children instead of just padding-right.

### Added
- 'xs' icon size.
- Pointer events class

## [0.11.1] - 2018-08-10
### Changed
- Base icon size variables on the base scale value
- Update readme

## [0.11.0] - 2018-08-10
### Changed
- Base font color changed from $slate to $slate-120

### Added
- Add classes for icon

## [0.10.1] - 2018-08-08
### Added
- Create type classes that mirror styles from the type mixins
- Mixin for responsive breakpoints

### Changed
- Remove build process from the preversion the npm script
- Lead-in title letter spacing to 5% of its font size

## [0.9.0] - 2018-08-07
### Added
- Comments denoting the calculated px value for font-size, line-height, spacing, gap, and breakpoints.
- Font-size 60px and line-height 76px.
- Mixin for super h1 type style.
- This changelog.

### Changed
- Flex-grid class now has correct negative margins for a standard 24px gutter.
- w-33 and w-66 now declare 33.333% and 66.667% widths respectively.

### Fixed
- Minor lint errors.

## [0.8.0] - 2018-08-03
### Added
- Added br-circle and br-pill.
- Added variable $transition-duration-fast.

### Changed
- Changed the border-radius scale from a fixed scale to a numerical scale.
- Border-radius changed from using br-top-left-X, br-bottom-left-X, etc, to just using br-left-X.
- Border-color prefix changed from b- to bc-.
- Border-style for all and none changed from ba, bn to bs-solid, bs-none.
- Box-shadow prefix changed from shadow- to bs-.
- Variable $transition-duration changed to $transition-duration-slow.
- Class g-push-0 previously declared grid-column-start: auto. There is now a g-push-auto class that declares this and g-push-0 declares grid-column-start: 0;
