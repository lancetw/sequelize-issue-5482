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

co(function *() {
  const connection = yield models.sequelize.sync()
  if (connection) {
    console.log(`App started listening on port ${port}`)
    console.log(`Sequelize version: ${sequelizeVer}`)

    console.log('---- create ----')
    const cData = yield models.posts.create(testData)
    const cDataJSON = cData.toJSON()
    console.log(cDataJSON.startDate)
    console.log(cDataJSON.endDate)

    console.log('---- update ----')
    const post = yield models.posts.findOne({
      where: { id: cData.id }
    })
    const uData = yield post.update(testData)
    const uDataJSON = uData.toJSON()
    console.log(uDataJSON.startDate)
    console.log(uDataJSON.endDate)
  }
})
