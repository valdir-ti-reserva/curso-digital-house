const http = require('http');

const Cache = require('./utils/cache');
const mercadolivre = require('./services/MercadoLivre');
const zoom = require('./services/Zoom');

const PORT = 3325;

const app = http.createServer();
  
app.on('request', async(req, res)=>{

  let term = req.url.replace('/', '');
  // let term = req.url.replace('/', '').replace(/-/g, "%20");
  
  if(term.length <= 0){
    res.writeHead(400, {'Content-Type': 'application/json; charset=utf-8'});
    res.write(JSON.stringify("Termo de busca não informado"));
    return res.end();
  }

  const cacheProducts = Cache.getCache(term);
  if(cacheProducts){
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    res.write(cacheProducts);
    return res.end();
  }

  //const products = await mercadolivre.getProductsByTerm(term);
  const products = await zoom.getProductsByTerm(term);

  if(products.error == true){
    res.writeHead(503, {'Content-Type': 'application/json; charset=utf-8'});
    res.write(JSON.stringify(products.details));
    return res.end();
  }

  Cache.setCache(term, JSON.stringify(products));

  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  res.write(JSON.stringify(products));
  return res.end();

});


app.listen(PORT);