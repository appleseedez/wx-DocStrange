import Koa from 'koa'
import ejsEngine from 'koa-ejs'
import Path from 'path'
import Favicon from 'koa-favicon'
import Logger from 'koa-logger'
import StaticFile from 'koa-static'
import _ from 'lodash'
import { apiRouter } from './routes'
import { siteRouter } from './routes'
const ReactServer = Koa()

ejsEngine(ReactServer,{
  root:Path.join(__dirname,'views'),
  layout:'layout',
  viewExt:'html',
  cache:true,
  debug:true
})

process.env.NODE_ENV === 'development' && ReactServer.use(Logger())
ReactServer.use(Favicon(__dirname + '/assets/images/favicon.png')) // favico
ReactServer.use(StaticFile('./assets',{'maxage':3*60*1000})) // 其他静态资源：js/images/css


ReactServer.use(apiRouter.routes())
ReactServer.use(siteRouter.routes())

/**服务器异常处理**/
if (process.env.NODE_ENV === 'test') {
  module.exports = ReactServer.callback();
} else {
  ReactServer.listen(8001);
  console.log((process.env.NODE_ENV === 'production')?'open http://cq.jsbn.com':'open http://cd.jsbn.com:8001')
}

ReactServer.on('error', function (err) {
  console.log(err.stack)
})
