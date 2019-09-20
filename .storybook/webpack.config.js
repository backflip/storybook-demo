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
          globalname: "htl"
        }
      }
    ],
    include: path.resolve(__dirname, "../")
  });

  config.node = {
    fs: "empty"
  };

  return config;
};
