const chalk = require('chalk')
const Prompt = require('inquirer')

const clone = require('./clone')

// 模板代码地址
const remote = 'github:fzz14hao/my-react-app'

const initQuestions = name => [{
  type: 'confirm',
  name: 'isInit',
  message: `确定要在${chalk.green(name)}文件夹下创建项目?`,
  prefix: '?'
}]


/**
 * 初始化项目
 * @param {*} name 
 */
const init = async name => {
  try {
    const {
      isInit
    } = await Prompt.prompt(initQuestions(name))

    if (isInit) {
      await clone(remote, name)
    } else {
      console.log(chalk.red('您取消了创建项目'))
    }
  } catch (error) {
    console.log(chalk.red(error))
  }
}

module.exports = init