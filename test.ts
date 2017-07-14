import {
  Identify_fn,
  toLong,
  Ice_queryCursor,
  InfoQuery_fn
} from './public';
const ice = require('ice').Ice;
const HashMap = ice.HashMap;
const ctx = new HashMap();

// console.log(Identify_fn,toLong,Ice_queryCursor);

Identify_fn.login(JSON.stringify({mobile: '22222222222'}), '222222',ctx)
  .flatMap(token=>{
    ctx.set('token',token);
    let page = new Ice_queryCursor(10,0);
    return InfoQuery_fn.spaceQuery(JSON.stringify({
      areas:[11010100, 11010200, 11010500]
    }),page,ctx)
  })
  .subscribe(val=>{
    console.log('val',val);
  })