
  class Tag {
    constructor( {tag_name , product_count} ) {
      this.tag_name = tag_name         
      this.product_count = product_count                  
    }
  }
  
  class SearchType {
    constructor( {type_name, tags} ) {
          this.type_name = type_name          
          this.tags = tags.map ( t => new Tag(t) )
    }
  }
   
  class Product {
    constructor({_id, source_id, source_url, last_updated, product_info} ) {
  
          this.id = _id         
          this.source_id = source_id                   
          this.source_url = source_url   
          this.last_updated = last_updated 
          this.info = new ProductInfo(product_info) 
    }
  }
  
  class ProductInfo {
      constructor({name, img_src, price, brand, category_str,info_url}) {
          this.name = name
          this.img_src = img_src
          this.price = price
          this.brand = brand
          this.category_str = category_str
          this.info_url = info_url
    }
  }

  module.exports = { Tag, ProductInfo, Product, SearchType }


  /*
class Init {
    async getSearchTypes(){
      console.log("gst")
  
      try{
        return (await fetchTagMetaData() ).map( tmd => new SearchType(tmd))
      }catch(err){
        console.log(err)
      }
      
    }
    async getInitProducts(){
      console.log("init pro")
  
      try{
        return  (await fetchProducts()).map( product => new Product(product))
      }catch(err){
        console.log(err)
      }
  
      
    }
  }
  */