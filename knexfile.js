const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mastery_dev',
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  }

}
