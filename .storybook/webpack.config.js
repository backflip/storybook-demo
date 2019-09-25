const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.hbs$/,
    use: ["handlebars-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.module.rules.push({
    test: /\.htl$/,
    use: [
      {
        loader: "htl-loader",
        options: {
          // Remove directives `@adobe/htlengine` does not understand
          transformSource: source => {
            const output = source
              .replace(/data-sly-use\.templates?="(.*?)"/g, "")
              .replace(/<sly[^>]+data-sly-call=(["']).*?\1.*?><\/sly>/g, "");

            return output;
          },
          // Allow for custom models in data from `use` directives
          transformCompiled: (compiled, settings) => {
            const output = compiled.replace(
              /(new Runtime\(\);)/,
              `$1
              const originalUse = runtime.use.bind(runtime);
              runtime.use = function(uri, options) {
                const settings = Object.assign({
                  model: '${settings.model}'
                }, options);
                return originalUse(uri, settings);
              }`
            );

            return output;
          },
          useDir: path.resolve(__dirname, "../src/htlmocks")
        }
      }
    ],
    include: path.resolve(__dirname, "../")
  });

  return config;
};
