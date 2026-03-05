# goff

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> Sync GitHub issues offline into a local folder

🚧 This CLI is heavily in development - and contribution is welcome! But do expect changes in the public API...

## Usage

Run the sync command within the root of a Git repo. It will create a `.goff` folder and populate it with Markdown files corresponding to the GitHub issues in your repository.

```sh
npx goff@latest sync

# npx goff@latest sync --closed --repo unjs/fontaine
```

If you are hitting a GitHub rate limit you can create a token [here](https://github.com/settings/tokens/new) and provide it:

```sh
npx goff@latest auth --token <GitHub token>
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with ❤️

Published under [MIT License](./LICENCE).

<!-- Badges -->

[npm-version-src]: https://npmx.dev/api/registry/badge/version/goff
[npm-version-href]: https://npmx.dev/package/goff
[npm-downloads-src]: https://npmx.dev/api/registry/badge/downloads/goff
[npm-downloads-href]: https://npm.chart.dev/goff
[github-actions-src]: https://img.shields.io/github/actions/workflow/status/danielroe/goff/ci.yml?branch=main&style=flat-square
[github-actions-href]: https://github.com/danielroe/goff/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/danielroe/goff/main?style=flat-square
[codecov-href]: https://codecov.io/gh/danielroe/goff
