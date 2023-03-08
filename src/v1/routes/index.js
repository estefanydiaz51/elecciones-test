const home = require('./home.routes')
const services = require('./services.routes')


module.exports = (app) => {
  app.use(home)
  app.use(services)
}