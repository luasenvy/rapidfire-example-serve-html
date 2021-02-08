const path = require('path')

const { RapidFire } = require('@luasenvy/rapidfire')

const rapidFire = new RapidFire({
  host: 'localhost',
  port: 8000,
  paths: {
    services: path.join(__dirname, 'services'),
  },
})

rapidFire.ignition()
