'use strict'

const fs = require('fs')
const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

const join = path.join

function getEntries (path) {
  const files = fs.readdirSync(resolve(path))
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory()
    if (isDir) {
      ret[item] = resolve(join(itemPath, 'index.js'))
    } else {
      const [name] = item.split('.')
      ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  return entries
}

const devConfig = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('~', resolve('packages'))
      .set('@', resolve('examples'))
      .set('assets', resolve('src/assets'))
      .set('styles', resolve('src/assets/styles'))

    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}

const buildConfig = {
  css: {
    sourceMap: true,
    extract: {
      filename: 'styles/[name].css'
    }
  },
  configureWebpack: {
    entry: {
      ...getEntries('packages')
    },
    output: {
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'vimi-ui'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('~', resolve('packages'))
      .set('@', resolve('examples'))
      .set('assets', resolve('src/assets'))
      .set('styles', resolve('src/assets/styles'))

    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })

    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
  },
  outputDir: 'lib',
  productionSourceMap: false
}

module.exports =
  process.env.NODE_ENV === 'development' ? devConfig : buildConfig
