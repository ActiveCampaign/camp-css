# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.14.7] - 2019-01-16
### Changed
- Use $base-font-size var in rem() function instead of hard-coded value.

## [0.14.6] - 2018-10-31
### Fixed
- Place margin column classes inside the media query loop.
- On this spooky Halloween day, I've come to my senses and remembered `text-decoration` is not a property that can be transitioned. It has been removed from the `link` classes.

## [0.14.5] - 2018-10-25
### Fixed
- Add text-decoration transition to `link` pseudo classes.

## [0.14.4] - 2018-10-22
### Changed
- Add text-decoration transition to the `link` class.

## [0.14.3] - 2018-10-10
### Changed
- XL breakpoint is now 67.5rem (1080px) to match the `mw-grid` class that is the same value.

## [0.14.2] - 2018-10-09
### Fixed
- `p*-*-col` classes were not correctly nested in their breakpoint loops, causing all class names to be applied regardless of breakpoint

## [0.14.1] - 2018-10-09
### Fixed
- `px-*-col` rules were using margin instead of padding

## [0.14.0] - 2018-10-09
### Added
- column-based margin and padding classes based on 12-column grid, which includes:
  - `mx-*-col`
  - `mr-*-col`
  - `ml-*-col`
  - `px-*-col`
  - `pr-*-col`
  - `pl-*-col`
- `g-start-*` class to eventually replace `g-push-*`, which is semantically inaccurate because it uses the `grid-column-start` rule.

## [0.13.1] - 2018-09-26
### Added
- `mw-grid` class to represent a max-width of 67.5rem. We were previously using the mw-64 class as the full width of our grid, but it should have always been 67.5rem so we had to add this class.

## [0.13.0] - 2018-09-14
### Fixed
- Lead in title 1 and 2 now renders appropriate font sizes of 14px and 16px and are bolded by default
- Title classes are set to bolded by default
- Rem-ified some missed values that outputting pixels

## [0.12.3] - 2018-08-30
### Fixed
- Responsive center-y and center-xy classes are now correct.

## [0.12.2] - 2018-08-28
### Added
- Pointer events all
- Centering x, y, and xy classes
- Hover underline effect
- Line height 0

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
