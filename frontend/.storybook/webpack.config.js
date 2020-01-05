const path = require("path");

module.exports = (config, mode) => {
    // if (!config) var config = { module: { rules: [] }, resolve: { extensions: [] } };

    // console.log(config);
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "../src"),
        loader: require.resolve("awesome-typescript-loader")
    });

    // addon-storysource使うときだけ
    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [
            {
                loader: require.resolve("@storybook/addon-storysource/loader"),
                options: { parser: "typescript" }
            }
        ],
        enforce: "pre"
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
};
