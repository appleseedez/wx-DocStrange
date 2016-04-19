import Router from 'koa-router'
import React,{ PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import _ from 'lodash'

import { ComponentsIndex } from './components/config/components-index'
const apiRouter = new Router({ 'prefix':'/api' })
apiRouter.get('/',function* apiRoot(next){
  yield next
  this.body = {
    '/api/':'home: load userinfo'
  }
})

export { apiRouter }

const renderConfig = (templateName,params,title)=>{
  let p = params || {}
  return {
    'reactMarkup':renderToString(ComponentsIndex[templateName]),
    'main':templateName,
    'params':JSON.stringify(p),
    'mode':(process.env.NODE_ENV === 'production')?'production':'development',
    'title':title || 'papi酱'
  }
}
const siteRouter = new Router()
siteRouter.get('/',function* home(next){
  yield this.render('modules/default',renderConfig('home'))
})
siteRouter.get('/personal-center',function* home(next){
  yield this.render('modules/default',renderConfig('personal-center'))
})
siteRouter.get('/place-order',function* home(next){
  yield this.render('modules/default',renderConfig('place-order'))
})
siteRouter.get('/waiting',function* home(next){
  yield this.render('modules/default',renderConfig('waiting'))
})
export { siteRouter }
