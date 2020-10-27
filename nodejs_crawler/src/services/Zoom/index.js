const fetch = require('node-fetch');
const cheerio = require('cheerio');

const Zoom = {

  name: 'Zoom',
  baseUrl: 'https://www.zoom.com.br/search?q',
  async getProductsByTerm(term){
    try {

      const link = `${this.baseUrl}=${term}`;
      const response = await fetch(link);
      const body = await response.text();
      const $ = cheerio.load(body);  
      const listOfProducts = [];
      
      $('div.card--prod').each((index, element)=>{        
        const priceHtml = $(element).find('div.cardBody span.mainValue').text();        
        const product = {
          title: $(element).find('div.cardBody a').text(),
          price: priceHtml,
          provider: this.name
        }
        listOfProducts.push(product);
      });

      return listOfProducts;

    } catch (err) {
      console.log(err);
      return {
        error: true,
        details: err.message
      }
    }
  }

}

module.exports = Zoom;