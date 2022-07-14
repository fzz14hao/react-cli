const {
  promisify
} = require('util')
const ora = require('ora')
const chalk = require('chalk')
const download = promisify(require('download-git-repo'))
const shelljs = require('shelljs')
const path = require('path')




/**
 * 安装依赖
 * @param {} name 
 */
const npminstall = (name) => {

  const dir = path.resolve('.')
  const createDir = dir + '/' + name

  shelljs.cd(createDir)

  const process = ora(`${chalk.blue('开始安装依赖\n\n')} `)
  process.start()
  process.color = 'yellow'
  process.text = `正在安装依赖..... `

  shelljs.exec('npm install')

  process.text = `安装依赖完成 \n`
  process.succeed()

  console.log(chalk.green('安装依赖完成,执行 npm run start 启动项目'))

  // shelljs.exec('npm run dev')
}


/**
 * 下载模板代码
 * @param {*} repo 
 * @param {*} dir 
 * @param {*} opotions 
 */
const clone = async function (repo, dir, opotions = {}) {
  const process = ora(`开始下载 ${chalk.blue(repo)}`)
  process.start()
  process.color = 'yellow'
  process.text = `正在下载..... ${chalk.yellow(repo)} `

  try {
   const res= await download(repo, dir, opotions)

   console.log(res)
    process.color = 'green'
    process.text = `下载成功 ${chalk.green(repo)} `
    process.succeed()

    npminstall(dir)

  } catch (error) {
    process.color = 'red'
    process.text = '下载失败'
    process.fail()

    console.log(error)
  }
}

module.exports = clone