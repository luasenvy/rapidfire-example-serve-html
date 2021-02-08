const path = require('path')

const {
  Interfaces: { Service },
} = require('@luasenvy/rapidfire')

class HtmlService extends Service {
  /**
   * [constructor description]
   * @return {[type]} options.router     [description]
   */
  constructor({ router }) {
    super()

    router.get('*', async (req, res, next) => await this.serveHtml(req, res).catch(next))

    this.router = router
  }

  async serveHtml(req, res) {
    const filename = /^\/?$/.test(req.url) ? '/index.html' : req.url
    res.sendFile(path.join(this.docroot, filename))
  }

  get docroot() {
    return path.join(this.$rapidfire.env.paths.root, 'src/public')
  }
}

module.exports = HtmlService
