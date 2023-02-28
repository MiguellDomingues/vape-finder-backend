var { buildSchema } = require('graphql');

module.exports = buildSchema(`

  type Init {
    getSearchTypes : [SearchType!]
    getInitProducts: [Product!]
  }

  type SearchType {
    type_name: String!
    tags:      [Tag!] 
  }

  type Tag {
    tag_name:      String!
    product_count: Int!
  }

  type Product {
    id:           ID!
    source_id:    String!                
    source_url:   String!
    last_updated: String! 
    info:         ProductInfo!
  }

  type ProductInfo {
    name:             String!                 
    img_src:          String
    info_url:         String!               
    price:            Float!             
    brand:            String             
    category_str:     String   
  }

  type Query {
    
    getProducts(last_product_id: ID!, category: String!, stores: [String!], brands: [String!], page: Int): [Product!]
    getInit: Init
    getSearchTypes: [SearchType!]
  }
`);