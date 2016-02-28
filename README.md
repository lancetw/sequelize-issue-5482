## SQLite updating DATE column return wrong format #5482


This strange bug only discovered on an existing sqlite DB file.


## sequelize@3.19.3

```bash
$ npm install
$ node index.js
```

#### Sample output:

```
App started listening on port 3457
Sequelize version: 3.19.3
---- create ----
Sun Feb 28 2016 00:00:00 GMT+0800 (CST)
Sun Feb 28 2016 00:00:00 GMT+0800 (CST)
---- update ----
2016-02-27 16:00:00.000 +00:00
2016-02-27 16:00:00.000 +00:00
```

## sequelize@3.4.0
```bash
$ npm install sequelize@3.4.0
$ node index.js
```

#### Sample output:

```
App started listening on port 3457
Sequelize version: 3.4.0
---- create ----
Sun Feb 28 2016 00:00:00 GMT+0800 (CST)
Sun Feb 28 2016 00:00:00 GMT+0800 (CST)
---- update ----
Sun Feb 28 2016 00:00:00 GMT+0800 (CST)
Sun Feb 28 2016 00:00:00 GMT+0800 (CST)
```