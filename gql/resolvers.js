const { Product, SearchType } = require('./classes.js')
//const { fetchSampleProducts, fetchProductsByCategoryBrandStore, fetchTagMetaData } = require('../database/CRUD/read.js')

const mock = [
  {
    _id: "63ec067f2eb31ba449ddc2ad",
    source: 'ezvape',
    source_id: '33180',
    source_url: 'https://ezvape.com',
    last_updated: '2023-02-14',
    categories: [ 'Pods' ],
    product_info: {
      name: 'Flavour Beast Pod Lit Lychee Watermelon Iced X 20mg 3/Pk',
      img_src: 'https://ezvape.com/wp-content/uploads/2022/12/DSC_6088-300x300.png',
      info_url: 'https://ezvape.com/product/flavour-beast-pod-lit-lychee-watermelon-iced-x-20mg-3-pk/',  
      price: 17.99,
      brand: 'Flavour Beast',
      category_str: 'E-Juice,Pre-Filled Pods,Flavour Beast'
    }
  },
  {
    _id: "63ec067f2eb31ba449ddc4e9",
    source: 'thunderbirdvapes',
    source_id: '7522117157104',
    source_url: 'https://thunderbirdvapes.com',
    last_updated: '2023-02-14',
    categories: [ 'Starter Kits' ],
    product_info: {
      name: 'G-Core, 2ml Disposable - Frozen Grape',
      img_src: 'https://cdn.shopify.com/s/files/1/0656/2117/products/8e9407459bd76aef345cd9aa4f788ad7.jpg?v=1676067502',
      info_url: 'https://www.thunderbirdvapes.com/products/g-core-frozen-grape',
      price: 17.99,
      brand: 'G-Core',
      category_str: 'Hardware,Starter Kit,Disposable'
    }
  },
  {
    _id: "63ec067f2eb31ba449ddc311",
    source: 'surreyvapes',
    source_id: '1565',
    source_url: 'https://surreyvapes.com',
    last_updated: '2023-02-14',
    categories: [ 'Pods' ],
    product_info: {
      name: 'Voopoo TPP 2ML Pod',
      img_src: 'https://cdn11.bigcommerce.com/s-f8le7jshax/images/stencil/300x300/products/1565/1924/Screen-Shot-2022-11-07-at-3-38-20-PM__00979.1667874332.png?c=1',
      info_url: 'https://surreyvapes.com/voopoo-tpp-2ml-pod/',
      price: 4.99,
      brand: 'Voopoo',
      category_str: 'E-Cigs,ReplacementPods'
    }
  },
  {
    _id: "63ec067f2eb31ba449ddc3b5",
    source: 'thunderbirdvapes',
    source_id: '8197175804144',
    source_url: 'https://thunderbirdvapes.com',
    last_updated: '2023-02-14',
    categories: [ 'Juices' ],
    product_info: {
      name: 'Oro SALT - Mango',
      img_src: 'https://cdn.shopify.com/s/files/1/0656/2117/products/d4e5b9e03ca8b60fc161c430bbe243df.jpg?v=1675218986',
      info_url: 'https://www.thunderbirdvapes.com/products/oro-salt-mango',
      price: 24.99,
      brand: 'Oro',
      category_str: 'E-Liquid'
    }
  },
  {
    _id: "63ec067f2eb31ba449ddc400",
    source: 'thunderbirdvapes',
    source_id: '8145363370224',
    source_url: 'https://thunderbirdvapes.com',
    last_updated: '2023-02-14',
    categories: [ 'Starter Kits' ],
    product_info: {
      name: 'Crystal Bar 600 - Mango Ice',
      img_src: 'https://cdn.shopify.com/s/files/1/0656/2117/products/d4137a9d3e49a63ec8cbc31e78937b01.jpg?v=1676143789',
      info_url: 'https://www.thunderbirdvapes.com/products/crystal-bar-600-mango-ice',
      price: 13.99,
      brand: 'SKE',
      category_str: 'Hardware,Starter Kit,Disposable'
    }
  },
  {
    _id: "63ec067f2eb31ba449ddc3b9",
    source: 'thunderbirdvapes',
    source_id: '8197174493424',
    source_url: 'https://thunderbirdvapes.com',
    last_updated: '2023-02-14',
    categories: [ 'Juices' ],
    product_info: {
      name: 'Oro SALT - Fresa',
      img_src: 'https://cdn.shopify.com/s/files/1/0656/2117/products/72f697cceb46527a6fc1143015750208.jpg?v=1674508311',
      info_url: 'https://www.thunderbirdvapes.com/products/oro-salt-fresa',
      price: 24.99,
      brand: 'Oro',
      category_str: 'E-Liquid'
    }
  },
  {
    _id: "63ec067f2eb31ba449ddc195",
    source: 'ezvape',
    source_id: '5525',
    source_url: 'https://ezvape.com',
    last_updated: '2023-02-14',
    categories: [ 'Replacement Glass' ],
    product_info: {
      name: 'Crown 5 Replacement Glass 2 mL',
      img_src: 'https://ezvape.com/wp-content/uploads/2021/03/crown-5-replacement-glass-2ml-833-300x300.jpg',
      info_url: 'https://ezvape.com/product/crown-5-replacement-glass-2ml/',
      price: 3.99,
      brand: 'Uwell',
      category_str: 'Tanks & Rebuildables,Replacement Glass'
    }
  },
  {
    _id: "63ec067f2eb31ba449ddc480",
    source: 'thunderbirdvapes',
    source_id: '7971879223536',
    source_url: 'https://thunderbirdvapes.com',
    last_updated: '2023-02-14',
    categories: [ 'Starter Kits' ],
    product_info: {
      name: 'G-Core, 2ml Disposable - Peach Ice',
      img_src: 'https://cdn.shopify.com/s/files/1/0656/2117/products/7c4afee1b3b1e0d991d5bf999a56de45.jpg?v=1675802653',
      info_url: 'https://www.thunderbirdvapes.com/products/g-core-2ml-disposable-peach-ice',
      price: 17.99,
      brand: 'G-Core',
      category_str: 'Hardware,Starter Kit,Disposable'
    }
  },
  {
    _id: "63ec067f2eb31ba449ddc220",
    source: 'ezvape',
    source_id: '31110',
    source_url: 'https://ezvape.com',
    last_updated: '2023-02-14',
    categories: [ 'Juices' ],
    product_info: {
      name: 'Splash Drop Ice',
      img_src: 'https://ezvape.com/wp-content/uploads/2022/10/DSC_5990-300x300.png',
      info_url: 'https://ezvape.com/product/splash-drop-ice-d/',
      price: 20.99,
      category_str: 'E-Juice,Freebase,SPLASH'
    }
  },
  {
    _id: "63ec067f2eb31ba449ddc534",
    source: 'thunderbirdvapes',
    source_id: '7022579613869',
    source_url: 'https://thunderbirdvapes.com',
    last_updated: '2023-02-14',
    categories: [ 'Starter Kits' ],
    product_info: {
      name: 'Ghost XL Disposable 2ml  - Green Apple ICE 20mg',
      img_src: 'https://cdn.shopify.com/s/files/1/0656/2117/products/b4b1d3fab3e195870ef08bd216d7c777.jpg?v=1675451737',
      info_url: 'https://www.thunderbirdvapes.com/products/ghost-xl-disposable-2ml-green-apple-ice-20mg',      
      price: 13.99,
      brand: 'Ghost',
      category_str: 'Hardware,Starter Kit,Disposable'
    }
  },
  {
    _id: "63ec067f2eb31ba449ddc665",
    source: 'thunderbirdvapes',
    source_id: '4436694794320',
    source_url: 'https://thunderbirdvapes.com',
    last_updated: '2023-02-14',
    categories: [ 'Coils' ],
    product_info: {
      name: 'UWELL Nunchaku Coils',
      img_src: 'https://cdn.shopify.com/s/files/1/0656/2117/products/c760b316008e3eca909b5bb5ae255f27.jpg?v=1674850613',
      info_url: 'https://www.thunderbirdvapes.com/products/uwell-nunchaku-coils',
      price: 17.99,
      brand: 'Uwell',
      category_str: 'Parts,Coils'
    }
  }
]

const st = [
  {
    _id: "63ec066c998fc6b05a87fa16",
    type_name: 'CATEGORIES',
    tags: [
      {
        tag_name: 'Replacement Glass',
        product_count: 74,
        _id: "63ec066c998fc6b05a87fa17"
      },
      {
        tag_name: 'Tanks',
        product_count: 32,
        _id: "63ec066c998fc6b05a87fa18"
      },
      {
        tag_name: 'Starter Kits',
        product_count: 344,
        _id: "63ec066c998fc6b05a87fa19"
      },
      {
        tag_name: 'Coils',
        product_count: 165,
        _id: "63ec066c998fc6b05a87fa1a"
      },
      {
        tag_name: 'Juices',
        product_count: 571,
        _id: "63ec066c998fc6b05a87fa1b"
      },
      {
        tag_name: 'Batteries',
        product_count: 34,
        _id: "63ec066c998fc6b05a87fa1c"
      },
      {
        tag_name: 'Mods',
        product_count: 21,
        _id: "63ec066c998fc6b05a87fa1d"
      },
      {
        tag_name: 'Accessories/Miscellaneous',
        product_count: 41,
        _id: "63ec066c998fc6b05a87fa1e"
      },
      {
        tag_name: 'Pods',
        product_count: 306,
        _id: "63ec066c998fc6b05a87fa1f"
      },
      {
        tag_name: 'Chargers',
        product_count: 33,
        _id: "63ec066c998fc6b05a87fa20"
      }
    ]
  },
  {
    _id: "63ec066c998fc6b05a87fa21",
    type_name: 'BRANDS',
    tags: [
        {
          tag_name: 'Smok',
          product_count: 75,
          _id: "63ec066c998fc6b05a87fa22"
        },
        {
          tag_name: 'Eleaf',
          product_count: 27,
          _id: "63ec066c998fc6b05a87fa23"
        },
        {
          tag_name: 'Aspire',
          product_count: 64,
          _id: "63ec066c998fc6b05a87fa24"
        },
        {
          tag_name: 'GeekVape',
          product_count: 25,
          _id: "63ec066c998fc6b05a87fa25"
        },
        {
          tag_name: 'All Day Vapor',
          product_count: 8,
          _id: "63ec066c998fc6b05a87fa26"
        }
      ]
  },
  {
    _id: "63ec066c998fc6b05a87fab4",
    type_name: 'STORES',
    tags: [
      {
        tag_name: 'ezvape',
        product_count: 536,
        _id: "63ec066c998fc6b05a87fab5"
      },
      {
        tag_name: 'surreyvapes',
        product_count: 174,
        _id: "63ec066c998fc6b05a87fab6"
      },
      {
        tag_name: 'thunderbirdvapes',
        product_count: 911,
        _id: "63ec066c998fc6b05a87fab7"
      }
    ]
  }
]

function buildQuery(last_product_id, category, stores, brands){

    const query_str = {}
  
    if(last_product_id)     query_str["_id"] = { "$gt" : last_product_id }
    if(category.length > 0) query_str["categories"] = { "$in" : category }
    if(stores.length > 0)   query_str["source"] = { "$in" : stores}
    if(brands.length > 0)   query_str["product_info.brand"] = { "$in" : brands }
  
    console.log("/// query string: ", query_str)
  //[
   // { $sort : { age : -1, posts: 1 } }
 // ]
    return query_str
  }
  
  var root = {

      getProducts: async ( {last_product_id, category, stores, brands, page} ) => {

        await (() => new Promise(resolve => setTimeout(resolve, 2500)))()
  
        //console.log("///// query: getProducts ", "l_id:", last_product_id, "c:", category, "s:", stores, "b:", brands, " page: ", page)
  
        //if(category.length === 0 && stores.length === 0 && brands.length === 0){

          //const products = await fetchSampleProducts()

          return mock.map( product => new Product(product))

       // }
          
          
        //let result = (await fetchProductsByCategoryBrandStore( buildQuery(last_product_id,category, stores, brands)) )
       
       // result = result.map( product => new Product(product))
       // last_product_id && console.log("from ", last_product_id)
       // console.log(result.length)
       // return result
      },
      getSearchTypes: async ({}) => {
        await (() => new Promise(resolve => setTimeout(resolve, 2500)))()
        //console.log("///// query: getSearchTypes")
        //const st = await fetchTagMetaData()
        return (st).map( tmd => new SearchType(tmd))
      },
  };

module.exports = { root } 