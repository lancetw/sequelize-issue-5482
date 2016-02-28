module.exports = function (sequelize, Sequelize) {
  const Post = sequelize.define('posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT
    },
    uid: {
      allowNull: false,
      type: Sequelize.BIGINT
    },
    order: {
      defaultValue: 0,
      type: Sequelize.INTEGER
    },
    fee: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    type: {
      defaultValue: 0,
      type: Sequelize.INTEGER
    },
    prop: {
      defaultValue: 0,
      type: Sequelize.INTEGER
    },
    startDate: {
      allowNull: false,
      defaultValue: Sequelize.NOW,
      type: Sequelize.DATE,
      field: 'start_date'
    },
    endDate: {
      allowNull: false,
      defaultValue: Sequelize.NOW,
      type: Sequelize.DATE,
      field: 'end_date'
    },
    openDate: {
      allowNull: false,
      defaultValue: Sequelize.NOW,
      type: Sequelize.DATE,
      field: 'open_date'
    },
    closeDate: {
      allowNull: false,
      defaultValue: Sequelize.NOW,
      type: Sequelize.DATE,
      field: 'close_date'
    },
    dateType: {
      defaultValue: 0,
      type: Sequelize.INTEGER,
      field: 'date_type'
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING
    },
    content: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    ocname: {
      allowNull: true,
      type: Sequelize.STRING
    },
    cid: {
      allowNull: true,
      type: Sequelize.BIGINT
    },
    lat: {
      validate: { min: -90, max: 90 },
      allowNull: true,
      defaultValue: null,
      type: Sequelize.DOUBLE
    },
    lng: {
      validate: { min: -180, max: 180 },
      allowNull: true,
      defaultValue: null,
      type: Sequelize.DOUBLE
    },
    country: {
      allowNull: true,
      type: Sequelize.STRING
    },
    city: {
      allowNull: true,
      type: Sequelize.STRING
    },
    place: {
      allowNull: true,
      type: Sequelize.STRING
    },
    zipcode: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    address: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    url: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    img: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    file: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    status: {
      defaultValue: 0,
      type: Sequelize.INTEGER
    }
  })

  return Post
}
