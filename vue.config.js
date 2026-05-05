module.exports = {
    // 配置webpack属性，需要添加configureWebpack属性来对webpack进行配置
    configureWebpack: {
        devtool: 'source-map' // 打开源码地图，就可以使用debugger来进行页面调试了
    },
    devServer: {
        hot: true,
        proxy: {
            '/api': {
                target: 'https://www.zhihu.com'
            }
        }
    }
}