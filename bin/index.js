#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

const packageJson = require('../package.json')
const init = require('../lib/init')



program.version(packageJson.version)

console.log('您正在使用' + chalk.yellow(`v${packageJson.version}`) + `版本脚手架`)

program
  .command('create <name>')
  .alias('i')
  .description('浩汉智能项目初始化工具')
  .action(name => {
    init(name)
  })

program.parse(process.argv)