    module.exports = {
        configureWebpack: {
            resolve: {
                alias: {
                    "assets": "./src/assets",
                    "common": "./src/common",
                    "components": "./src/components",
                    "network": "./src/network",
                    "views": "./src/views"
                }
            }
        }
    }

/*
const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
*/

/*module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            //设置“src”目录别名为“@”
            .set("@", resolve("src"))
             .set("views", resolve("src/views"))
            .set("components", resolve("src/components"))
            .set("assets", resolve("src/assets"))
            .set("network", resolve("src/network"))

    }
}*/

