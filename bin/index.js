#!/usr/bin/env node

const program = require('commander')

const packageJson = require('../package.json')
const init = require('../lib/init')



program.version(packageJson.version)

program
  .command('create <name>')
  .alias('i')
  .description('浩汉智能项目初始化工具')
  .action(name => {
    init(name)
  })

program.parse(process.argv)