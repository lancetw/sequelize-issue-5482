const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const dbconfig = require('../../config/sequelize/config')['development']
const account = { DATABASE: '', USERNAME: '', PASSWORD: '' }
const sequelize = new Sequelize(
  account.DATABASE,
  account.USERNAME,
  account.PASSWORD,
  dbconfig
)
const db = {}

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename)
  })
  .forEach(function (file) {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  /* istanbul ignore else */
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
