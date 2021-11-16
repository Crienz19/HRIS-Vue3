module.exports = {
    devServer: {
        host: 'hris-api.test'
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: "javascript/auto"
                }
            ] 
        }
    }
}