/**
 * 用户相关业务操作层
 */

const db = require('../config/db')
const userModel = '../models/users'

const NodeProjectDB = db.NodeProject
const User = NodeProjectDB.import(userModel)

const findUserByName = async name => {
  try {
    const userInfo = await User.findOne({
      where: { user_name: name }
    })
    return userInfo
  } catch (error) {
    console.log(`[Service_User] find user by name error: ${error}`)
    return null
  }
}

const createUser = async userInfo => {
  try {
    const result = await User.create({
      user_name: userInfo.name,
      password: userInfo.password
    })
    return true
  } catch (error) {
    console.log(`[Service_User] create user error: ${error}`)
    return false
  }
}

module.exports = {
  findUserByName,
  createUser
}