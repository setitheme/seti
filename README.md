# Seti Theme

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/0cf08a1176e74e10ae51c58c6bdd7771)](https://www.codacy.com/gh/setitheme/seti/dashboard?utm_source=github.com&utm_medium=referral&utm_content=setitheme/seti&utm_campaign=Badge_Grade)
![License](https://img.shields.io/github/license/setitheme/seti)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](code_of_conduct.md)

The seti theme was made to be a subtle but visually pleasing color scheme for text environments. It pairs a dark background with a carefully selected muted color palette. It was originally developed as a ui & syntax theme pair for [Atom](https://atom.io/), but is now in use one many differerant platforms.

It's evolded subtly over the years, but the core remains the same. At it's core, seti is just a collection of colors & icons, combined in a collection of packages.

The name is a nod to outer space and the SETI Institute on account of its darkness, but has no other affiliation.

You can find more info at the website:
[https://setitheme.org](https://setitheme.org)

## Donate

- [Donate to the real SETI](https://www.seti.org/donate)
- [Donate to the seti theme](https://setitheme.org/donate)

---

## About This Repo

This goal of this repository is to hold all of the source code for the various seti themes & packages, as well as the website source.

There are currently seti themes for various platforms spread around the internet, with varying quality and support. The colors can vary, and are hard-coded in many locations, making it dificult to update, and not very simple to extend. The goal of this repo is to consolidate as much as possible into one location, and provide tools to make it easier to utilize the seti theme accross platforms.

It's currently a work in-progress and should be considered beta at this point. More updates will be posted, and documentation added as it progresses.

Currently, it holds a new shared global configuration & color specs, as well a WIP collection of icon utilities. New on the roadmap will be to utilize these new utilities to update & modernize seti across platforms.

## Atom

The Atom themes and VS Code icons have not yet been migrated to the new org, and can still be found in the original locations:

- [Seti UI](https://github.com/jesseweed/seti-ui)
- [Seti Syntax](https://github.com/jesseweed/seti-syntax)

These are badly in need of updating, and will modernized when they are migrated to this repo.

## VS Code

There's not yet an officially supported seti theme for VS Code, but one is the work and will be added here. However, the seti icons used in the [VS Code icon theme](https://github.com/microsoft/vscode/blob/master/extensions/theme-seti/icons/vs-seti-icon-theme.json), still pull from [here](https://github.com/jesseweed/seti-ui).

This will be updated to point to @setitheme/icons once stylesheets are completed.

## Future Updates

Future updates in current order of prority are:

- Add Web Component, Styled Component, Vue & Angular versions of icon component similar to React version
- VS Code Theme
- iTerm Theme
- Slack Theme
- Icon updates modernizing
