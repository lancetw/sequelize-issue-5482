import co from 'co'
import models from './db/models'

const sequelizeVer = require('./node_modules/sequelize/package.json').version
const port = process.env.PORT || 3457

const testData = {
  startDate: '2016-02-28T00:00:00+08:00',
  endDate: '2016-02-28T00:00:00+08:00',
  openDate: '2016-02-28T00:00:00+08:00',
  closeDate: '2016-02-28T00:00:00+08:00',
  title: 'test only',
  content: 'test only',
  uid: 1
}

models.sequelize.sync({
    force: false,
    logging: console.log
  })
  .then(() => models.posts.create(testData))
  .then((cData) => {
      const cDataJSON = cData.toJSON()
      console.log(cDataJSON.startDate)
      console.log(cDataJSON.endDate)

      return models.posts.findOne({
        where: { id: cData.id }
      })
    }).then((post) => post.update(testData)
    ).then((uData) => {
      const uDataJSON = uData.toJSON()
      console.log(uDataJSON.startDate)
      console.log(uDataJSON.endDate)
    })
  .finally(() => models.sequelize.close())
