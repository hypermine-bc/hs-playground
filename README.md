# Hypersign Playground (hs-playground)

Its a playground to test Hypersign Authentication

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```
### Deploy to git-pages
```bash
quasar build
cp /dist/spa/ ../../hypermine-bc.github.io/

```
### Setup hypersign
```bash
Open quasar.conf.js
Look for ``build``
in that add a new variable called ```hypersign```
```
```
{
    url: 'http://localhost:8080/auth',
    realm: 'hypermine',
    clientId: 'hs-playground'
}
```

```

