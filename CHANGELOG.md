# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
