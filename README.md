# Storybook Demo

Example setup using `Vue`, `Handlebars` and `HTL/Sightly` templates. Uses `@storybook/vue` as a base, handles `.hbs` and `.htl` templates via Webpack loaders precompiling them.

## Issues

Webpack isn't particularly happy with `@adobe/htlengine` and logs some warnings:

```
WARNING in ./node_modules/@adobe/htlengine/src/compiler/Compiler.js 156:32-39
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/@adobe/htlengine/src/index.js
 @ ./src/components/header-htl/header.htl
 @ ./src/components/header-htl/header.stories.js
 @ ./src/components sync \.stories\.js$
 @ ./.storybook/config.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/config.js (webpack)-hot-middleware/client.js?reload=true&quiet=true

WARNING in ./node_modules/@adobe/htlengine/src/runtime/Runtime.js 110:16-56
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/@adobe/htlengine/src/index.js
 @ ./src/components/header-htl/header.htl
 @ ./src/components/header-htl/header.stories.js
 @ ./src/components sync \.stories\.js$
 @ ./.storybook/config.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/config.js (webpack)-hot-middleware/client.js?reload=true&quiet=true
 ```

However, the resulting code works fine anyway.
