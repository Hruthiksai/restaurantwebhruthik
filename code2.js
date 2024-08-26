const vegetarian =  
     [
      {
        "name": "Vegetable Biryani",
        "description": "Aromatic rice cooked with mixed vegetables and spices.",
        "image": "https://www.dwarakaorganic.com/wp-content/uploads/2012/06/Veg-Biryani-Recipe.jpg",
        "price": 120
      },
      {
        "name": "Sambar Rice",
        "description": "Rice mixed with sambar, a lentil-based vegetable stew.",
        "image": "https://healthyliving.natureloc.com/wp-content/uploads/2018/09/Lentil-Rice-nk7ni4vepnykm5zoeu6pkcucm37phs246on3vmxdxc.jpg",
        "price": 90
      },
      {
        "name": "Rasam Rice",
        "description": "Rice served with a tangy and spicy tomato-based soup.",
        "image": "https://static.flickr.com/105/294695059_82f26df463.jpg",
        "price": 80
      },
      {
        "name": "Curd Rice",
        "description": "Rice mixed with yogurt, seasoned with mustard seeds and curry leaves.",
        "image": "https://vaya.in/recipes/wp-content/uploads/2018/03/Curd-Rice.jpg",
        "price": 70
      },
      {
        "name": "Avial",
        "description": "Mixed vegetables cooked in coconut and yogurt-based gravy.",
        "image": "https://foodgood.in/wp-content/uploads/2019/01/aviyal_2-1280x853.jpg",
        "price": 100
      },
      {
        "name": "Poriyal",
        "description": "Stir-fried vegetables with grated coconut.",
        "image": "https://st3.depositphotos.com/19960896/32849/i/450/depositphotos_328492620-stock-photo-tendli-kundroo-sabzi-kovakkai-poriyal.jpg",
        "price": 60
      },
      {
        "name": "Kootu",
        "description": "Vegetable stew made with lentils and coconut.",
        "image": "https://www.whiskaffair.com/wp-content/uploads/2017/12/Mix-Veg-Kootu-4.jpg",
        "price": 70
      },
      {
        "name": "Papadam",
        "description": "Crispy fried or roasted lentil crackers.",
        "image": "https://www.indische-rezepte.net/wp-content/uploads/2023/05/papadam-768x512.jpg",
        "price": 20
      },
      {
        "name": "Payasam",
        "description": "A sweet pudding made with milk, rice, and sugar.",
        "image": "https://shrifoods4u.com/wp-content/uploads/2022/03/48-paal-payasam.png",
        "price": 50
      },
      {
        "name": "Kesari",
        "description": "Sweet semolina dessert flavored with saffron and cardamom.",
        "image": "https://4.bp.blogspot.com/-O5nacT7ioWM/WNIULmkyMfI/AAAAAAAADAM/rCELSDmtNtgqWv3Nz-6nVgOSkVSNkSIqACLcB/s1600/Rava%2BKesari%2BRecipe.JPG",
        "price": 40
      }
    ]
   const non_vegetarian = [
      {
        "name": "Chicken Biryani",
        "description": "Aromatic rice cooked with chicken and spices.",
        "image": "https://wallpapercave.com/wp/wp4629231.jpg",
        "price": 150
      },
      {
        "name": "Mutton Biryani",
        "description": "Fragrant rice cooked with tender mutton and spices.",
        "image": "https://wallpapercave.com/wp/wp8518824.jpg",
        "price": 180
      },
      {
        "name": "Fish Curry",
        "description": "Fish cooked in a tangy and spicy curry sauce.",
        "image": "https://www.licious.in/blog/wp-content/uploads/2020/12/Kerala-Fish-Curry.jpg",
        "price": 140
      },
      {
        "name": "Chicken Chettinad",
        "description": "Spicy chicken curry made with a variety of roasted spices.",
        "image": "https://www.shanazrafiq.com/wp-content/uploads/2017/10/4-chicken-chettinad.jpg",
        "price": 160
      },
      {
        "name": "Mutton Curry",
        "description": "Rich and flavorful mutton curry with aromatic spices.",
        "image": "https://t3.ftcdn.net/jpg/04/18/22/44/360_F_418224468_53Zl6zdQh7PlFtMA8ebN4HO1lbMkzU0v.jpg",
        "price": 170
      },
      {
        "name": "Chicken 65",
        "description": "Spicy deep-fried chicken appetizer.",
        "image": "https://i.ytimg.com/vi/0KdboN6Rkck/maxresdefault.jpg",
        "price": 120
      },
      {
        "name": "Mutton Sukka",
        "description": "Dry mutton dish cooked with spices and coconut.",
        "image": "https://i.pinimg.com/originals/3d/ad/c0/3dadc08748523692526c86afd84142e1.jpg",
        "price": 150
      },
      {
        "name": "Fish Fry",
        "description": "Marinated fish, fried to a crispy perfection.",
        "image": "https://i.ytimg.com/vi/QizOEaCGTc4/maxresdefault.jpg",
        "price": 130
      },
      {
        "name": "Egg Poriyal",
        "description": "Scrambled eggs cooked with onions, spices, and curry leaves.",
        "image": "https://www.yummytummyaarthi.com/wp-content/uploads/2015/12/1.-2.jpg",
        "price": 80
      },
      {
        "name": "Chicken Keema",
        "description": "Minced chicken cooked with spices and peas.",
        "image": "https://greatcurryrecipes.net/wp-content/uploads/2013/05/chickenkeema5.jpg",
        "price": 110
      }
    ]

    const menu2 = document.getElementById('lunch1');

    vegetarian.forEach(function(m) {
        const divCard = document.createElement('div');
        divCard.classList.add('divMenu');
        divCard.classList.add('card'); //class="card"
        const cardSub = document.createElement('div');
        cardSub.classList.add('card-body');
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');
    
        const name = document.createElement('h2');
        name.classList.add('card-title');
        const image = document.createElement('img');
        image.classList.add('card-img-top');
    
        const description = document.createElement('p');
        description.classList.add('card-text');
        const price = document.createElement('p');
        price.classList.add('card-text');
    
        name.textContent = m.name;
        image.src = m.image;
        image.alt = m.name;
    
        // Create bold element for "description :"
        const boldDescription = document.createElement('strong');
        boldDescription.textContent = "Description :";
        description.appendChild(boldDescription);
    
        // Append the actual description after the bold text
        const descText = document.createTextNode(m.description);
        description.appendChild(descText);
    
        // Create bold element for "price :"
        const boldPrice = document.createElement('strong');
        boldPrice.textContent = "Price : ";
        price.appendChild(boldPrice);
    
        // Append the actual price after the bold text
        const priceText = document.createTextNode(m.price + " Rs\\-");
        price.appendChild(priceText);
    
        button.textContent = "Add";
        button.addEventListener('click', function() {
          cart.push(m); // Add the item to the cart array
          localStorage.setItem('cart', JSON.stringify(cart));// Store the updated cart in localStorage
          updateCartCount(); // Update the cart count
          
        });
    
        // Append elements to the card
        cardSub.append(description,price,button);
        divCard.append(name,image,cardSub);
        menu2.appendChild(divCard);
    });
    
    
    

  //   const menu2 = document.getElementById('lunch1')

  //  vegetarian.forEach(function(m){
  //       const divCard = document.createElement('div');
  //       divCard.classList.add('divMenu');
  //       divCard.classList.add('card');//class="card"
  //       const cardSub = document.createElement('div');
  //       cardSub.classList.add('card-body');
  //       const button = document.createElement('button');
  //       button.classList.add('btn');
  //       button.classList.add('btn-primary');

  //       const name = document.createElement('h2');
  //         name.classList.add('card-title');
  //       const image = document.createElement('img');
  //         image.classList.add('card-img-top');
  //         // const bold = document.createElement('b');
  //       const description = document.createElement('p');
  //         description.classList.add('card-text');
  //       const price = document.createElement('p');
  //         price.classList.add('card-text');

  //       name.textContent=m.name;
  //       image.src=m.image;
  //       image.alt=m.name;

  //       // bold.textContent="description :";
        
  //       description.textContent="Description :"+m.description;
  //       price.textContent="Price :"+m.price+"Rs\\-";
  //       button.textContent="Add";

  //       // description.append(bold);
  //       cardSub.append(description,price,button);
  //       divCard.append(name,image,cardSub);
  //       menu2.appendChild(divCard);

  //   })

    const menu3 = document.getElementById('lunch2')

    non_vegetarian.forEach(function(m){
        const divCard = document.createElement('div');
        divCard.classList.add('divMenu');
        divCard.classList.add('card');//class="card"
        const cardSub = document.createElement('div');
        cardSub.classList.add('card-body');
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');

        const name = document.createElement('h2');
          name.classList.add('card-title');
        const image = document.createElement('img');
          image.classList.add('card-img-top');
        const description = document.createElement('p');
          description.classList.add('card-text');
        const price = document.createElement('p');
          price.classList.add('card-text');

        name.textContent=m.name;
        image.src=m.image;
        image.alt=m.name;


        
        const boldDescription = document.createElement('strong');
        boldDescription.textContent = "Description :";
        description.appendChild(boldDescription);
        const descText = document.createTextNode(m.description);
        description.appendChild(descText);
    
        const boldPrice = document.createElement('strong');
        boldPrice.textContent = "Price : ";
        price.appendChild(boldPrice);
        const priceText = document.createTextNode(m.price + " Rs\\-");
        price.appendChild(priceText);

        button.textContent="Add";
        button.addEventListener('click', function() {
          cart.push(m); 
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartCount(); 
          
        });

        cardSub.append(description,price,button);
        divCard.append(name,image,cardSub);
        menu3.appendChild(divCard);

    })

//dinner section


  const menu_dinner = {
    "vegetarian": [
      {
        "name": "Paneer Butter Masala",
        "description": "Cottage cheese cubes cooked in a rich tomato-based gravy with butter and cream.",
        "image": "https://i2.wp.com/spicecravings.com/wp-content/uploads/2018/03/Paneer-Butter-Masala-1.jpg?fit=1800,1200&ssl=1",
        "price": 200
      },
      {
        "name": "Vegetable Pulao",
        "description": "Aromatic basmati rice cooked with mixed vegetables and spices.",
        "image": "https://tastypics.s3.us-west-1.amazonaws.com/35c3a7ff8fed469eb0b6dff0e538d65b.jpg",
        "price": 180
      },
      {
        "name": "Dal Tadka",
        "description": "Yellow lentils tempered with cumin, garlic, and spices.",
        "image": "https://i2.wp.com/vegecravings.com/wp-content/uploads/2020/01/Moong-Dal-Recipe-Step-By-Step-Instructions-scaled.jpg?w=2560&quality=65&strip=all&ssl=1",
        "price": 150
      },
      {
        "name": "Aloo Gobi",
        "description": "Potato and cauliflower cooked with spices and herbs.",
        "image": "https://4.bp.blogspot.com/-yLQujmLmx8o/URs9pnMZZWI/AAAAAAAADuw/fXQRn-cw9Mg/s1600/aloo%2Bgobi1.jpg",
        "price": 160
      },
      {
        "name": "Bhindi Masala",
        "description": "Okra cooked with onions, tomatoes, and spices.",
        "image": "https://i.pinimg.com/originals/db/c8/68/dbc8682cc28a8046a466330efe312b26.jpg",
        "price": 170
      },
      {
        "name": "Matar Paneer",
        "description": "Paneer and green peas cooked in a spiced tomato-based gravy.",
        "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg",
        "price": 190
      },
      {
        "name": "Jeera Rice",
        "description": "Basmati rice flavored with cumin seeds.",
        "image": "https://thumbs.dreamstime.com/b/indian-traditional-dal-fry-jeera-rice-also-known-as-dal-chawal-indian-traditional-dal-fry-jeera-rice-also-known-as-dal-193290607.jpg",
        "price": 120
      },
      {
        "name": "Tandoori Roti",
        "description": "Whole wheat flatbread cooked in a clay oven.",
        "image": "https://punjabdadhaba.com/wp-content/uploads/2020/06/TANDOORI-ROTI-scaled.jpg",
        "price": 30
      },
      // {
      //   "name": "Gulab Jamun",
      //   "description": "Deep-fried dough balls soaked in sugar syrup flavored with cardamom.",
      //   "image": "https://bolnews.s3.amazonaws.com/wp-content/uploads/2020/12/2-12.jpg",
      //   "price": 80
      // },
      {
        "name": "Raita",
        "description": "Yogurt mixed with grated vegetables or fruits, flavored with cumin and salt.",
        "image": "https://myfoodstory.com/wp-content/uploads/2018/08/Indian-Raita-How-to-make-it-2.jpg",
        "price": 50
      }
    ],
    "non_vegetarian": [
      {
        "name": "Chicken Tikka Masala",
        "description": "Grilled chicken pieces cooked in a creamy tomato sauce.",
        "image": "https://wallpapercave.com/wp/wp3059572.jpg",
        "price": 250
      },
      {
        "name": "Mutton Rogan Josh",
        "description": "Tender mutton cooked in a rich, aromatic gravy with spices.",
        "image": "https://mrbutlers.com/recipes/wp-content/uploads/2022/05/29-scaled.jpg",
        "price": 280
      },
      {
        "name": "Butter Chicken",
        "description": "Chicken cooked in a creamy tomato-based gravy with butter and cream.",
        "image": "https://www.shemins.com/wp-content/uploads/2017/05/Shemins-Butter-Chicken-LR.jpg",
        "price": 260
      },
      {
        "name": "Fish Curry",
        "description": "Fish cooked in a spicy and tangy curry sauce.",
        "image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/CHETTINAD_SURA_MEEN_KUZHAMBU__SHARK_FISH_CURRY.jpg",
        "price": 220
      },
      {
        "name": "Prawn Masala",
        "description": "Prawns cooked in a spiced tomato and onion gravy.",
        "image": "https://vismaifood.com/storage/app/uploads/public/8c6/190/485/thumb__700_0_0_0_auto.jpg",
        "price": 300
      },
      {
        "name": "Chicken Biryani",
        "description": "Aromatic basmati rice cooked with marinated chicken and spices.",
        "image": "https://wallpaperaccess.com/full/4622468.jpg",
        "price": 240
      },
      {
        "name": "Mutton Biryani",
        "description": "Fragrant basmati rice cooked with marinated mutton and spices.",
        "image": "https://wallpapercave.com/wp/wp8518824.jpg",
        "price": 300
      },
      {
        "name": "Naan",
        "description": "Soft, leavened flatbread cooked in a clay oven.",
        "image": "https://media.istockphoto.com/photos/bread-tandoori-indian-cuisine-picture-id1150376593?b=1&k=20&m=1150376593&s=170667a&w=0&h=0Yf3B4a5tl9NPytKpKKNzZFHVj0_rIqLJ0H492wPN2c=",
        "price": 40
      },
      {
        "name": "Kheer",
        "description": "A creamy rice pudding flavored with cardamom and garnished with nuts.",
        "image": "https://api.vip.foodnetwork.ca/wp-content/uploads/2023/03/kheer-feat.jpg?w=3840&quality=75",
        "price": 90
      },
      {
        "name": "Raita",
        "description": "Yogurt mixed with grated vegetables or fruits, flavored with cumin and salt.",
        "image": "https://myfoodstory.com/wp-content/uploads/2018/08/Indian-Raita-How-to-make-it-2.jpg",
        "price": 50
      }
    ]
  }
  

   // vegetarian
  const menu_dinner1 = document.getElementById('dinner1')

   menu_dinner.vegetarian.forEach(function(m){
        const divCard = document.createElement('div');
        divCard.classList.add('divMenu');
        divCard.classList.add('card');//class="card"
        const cardSub = document.createElement('div');
        cardSub.classList.add('card-body');
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');

        const name = document.createElement('h2');
          name.classList.add('card-title');
        const image = document.createElement('img');
          image.classList.add('card-img-top');
        const description = document.createElement('p');
          description.classList.add('card-text');
        const price = document.createElement('p');
          price.classList.add('card-text');

        name.textContent=m.name;
        image.src=m.image;
        image.alt=m.name;

        const boldDescription = document.createElement('strong');
        boldDescription.textContent = "Description :";
        description.appendChild(boldDescription);
        const descText = document.createTextNode(m.description);
        description.appendChild(descText);
    
        const boldPrice = document.createElement('strong');
        boldPrice.textContent = "Price : ";
        price.appendChild(boldPrice);
        const priceText = document.createTextNode(m.price + " Rs\\-");
        price.appendChild(priceText);

        button.textContent="Add";
        button.addEventListener('click', function() {
          cart.push(m); 
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartCount();
          
        });

        cardSub.append(description,price,button);
        divCard.append(name,image,cardSub);
        menu_dinner1.appendChild(divCard);

    })

    //non_vegetarian

    const menu_dinner2 = document.getElementById('dinner2')

    non_vegetarian.forEach(function(m){
        const divCard = document.createElement('div');
        divCard.classList.add('divMenu');
        divCard.classList.add('card');//class="card"
        const cardSub = document.createElement('div');
        cardSub.classList.add('card-body');
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');

        const name = document.createElement('h2');
          name.classList.add('card-title');
        const image = document.createElement('img');
          image.classList.add('card-img-top');
        const description = document.createElement('p');
          description.classList.add('card-text');
        const price = document.createElement('p');
          price.classList.add('card-text');

        name.textContent=m.name;
        image.src=m.image;
        image.alt=m.name;

        const boldDescription = document.createElement('strong');
        boldDescription.textContent = "Description :";
        description.appendChild(boldDescription);
        const descText = document.createTextNode(m.description);
        description.appendChild(descText);
    
        const boldPrice = document.createElement('strong');
        boldPrice.textContent = "Price : ";
        price.appendChild(boldPrice);
        const priceText = document.createTextNode(m.price + " Rs\\-");
        price.appendChild(priceText);
        
        button.textContent="Add";
        button.addEventListener('click', function() {
          cart.push(m); 
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartCount();
          
        });

        cardSub.append(description,price,button);
        divCard.append(name,image,cardSub);
        menu_dinner2.appendChild(divCard);

    })

// DESSERT scetion



  const menu_dessert = {
    "desserts": [
      {
        "name": "Gulab Jamun",
        "description": "Deep-fried dough balls soaked in sugar syrup flavored with cardamom.",
        "image": "https://www.wallpapertip.com/wmimgs/246-2460677_gulab-jamun-large-view.jpg",
        "price": 80
      },
      {
        "name": "Rasgulla",
        "description": "Soft and spongy balls made from chhena, soaked in sugar syrup.",
        "image": "https://foodiewish.com/wp-content/uploads/2020/05/Bengali-Sweets-Bengali-Rasgulla-1152x787.jpg",
        "price": 70
      },
      {
        "name": "Kheer",
        "description": "A creamy rice pudding flavored with cardamom and garnished with nuts.",
        "image": "https://api.vip.foodnetwork.ca/wp-content/uploads/2023/03/kheer-feat.jpg?w=3840&quality=75",
        "price": 90
      },
      {
        "name": "Rasmalai",
        "description": "Soft paneer balls soaked in sweetened, flavored milk.",
        "image": "https://www.kindpng.com/picc/m/247-2477349_ras-malai-i-png-transparent-png.png",
        "price": 100
      },
      {
        "name": "Jalebi",
        "description": "Crispy, spiral-shaped deep-fried dessert soaked in sugar syrup.",
        "image": "https://www.sugarspicenmore.com/wp-content/uploads/2022/04/Jalebi.jpg",
        "price": 60
      },
      {
        "name": "Kulfi",
        "description": "Traditional Indian ice cream made with thickened milk, flavored with cardamom, saffron, or pistachios.",
        "image": "https://i.timesnowhindi.com/stories/kulfi_recipes.jpg",
        "price": 120
      },
      {
        "name": "Malpua",
        "description": "Sweet pancakes made from flour, sugar, and cardamom, often served with rabri.",
        "image": "https://www.sailusfood.com/wp-content/uploads/2014/03/indian-malpua.jpg",
        "price": 110
      },
      {
        "name": "Ice Cream Sundae",
        "description": "Layers of vanilla ice cream, chocolate sauce, nuts, and whipped cream.",
        "image": "https://wallpaperaccess.com/full/564253.jpg",
        "price": 150
      },
      {
        "name": "Chocolate Brownie with Ice Cream",
        "description": "Warm chocolate brownie served with a scoop of vanilla ice cream.",
        "image": "https://thumbs.dreamstime.com/b/chocolate-brownie-ice-cream-hazelnut-powder-dessert-concept-chocolate-brownie-ice-cream-hazelnut-powder-112556666.jpg",
        "price": 180
      },
      {
        "name": "Fruit Salad with Ice Cream",
        "description": "Fresh mixed fruit salad topped with a scoop of vanilla or mango ice cream.",
        "image": "https://www.ranchmarket.co.id/cfind/source/thumb/images/tips-recipe/cover_w770_h440_img-resep.jpg",
        "price": 130
      },
      {
        "name": "Butterscotch Ice Cream",
        "description": "Creamy butterscotch flavored ice cream with crunchy caramel bits.",
        "image": "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2021/12/Butterscotch-ice-cream-hero-4-1024x768.jpg",
        "price": 100
      },
      {
        "name": "Peda",
        "description": "Sweet, round, and soft, made from condensed milk, sugar, and flavored with cardamom.",
        "image": "https://thumbs.dreamstime.com/b/indian-traditional-sweet-pedha-peda-peday-made-milk-khoya-some-other-ingredient-like-cardamom-seeds-pistachio-nuts-128491908.jpg",
        "price": 50
      },
      {
        "name": "Sandesh",
        "description": "Bengali sweet made from chhena, flavored with saffron and cardamom.",
        "image": "https://thumbs.dreamstime.com/b/sandesh-bengali-sweet-dish-traditional-prepared-cottage-cheese-38525608.jpg",
        "price": 85
      },
      {
        "name": "Halwa",
        "description": "A dense, sweet confection made from flour, ghee, sugar, and often garnished with nuts.",
        "image": "https://i.ytimg.com/vi/q7_ZIyKCqyU/maxresdefault.jpg",
        "price": 100
      }
    ]
  }
   
      //   cartIcon.addEventListener('click', function() {
      //     window.location.href = './cart.html'; // Redirect to the cart page
      // });
  const menu_dessert1 = document.getElementById('DESSERT')
    const cartCountSpan = document.querySelector('.cart1 .count'); // Select the cart count span
    // let cart = []; // Initialize an empty array to store cart items
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage
    cartCountSpan.textContent = cart.length;

  menu_dessert.desserts.forEach(function(m){
        const divCard = document.createElement('div');
        divCard.classList.add('divMenu');
        divCard.classList.add('card');//class="card"
        const cardSub = document.createElement('div');
        cardSub.classList.add('card-body');
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');

        const name = document.createElement('h2');
          name.classList.add('card-title');
        const image = document.createElement('img');
          image.classList.add('card-img-top');
        const description = document.createElement('p');
          description.classList.add('card-text');
        const price = document.createElement('p');
          price.classList.add('price');
          price.classList.add('card-text');

        name.textContent=m.name;
        image.src=m.image;
        image.alt=m.name;

        const boldDescription = document.createElement('strong');
        boldDescription.textContent = "Description :";
        description.appendChild(boldDescription);
        const descText = document.createTextNode(m.description);
        description.appendChild(descText);
    
        const boldPrice = document.createElement('strong');
        boldPrice.textContent = "Price : ";
        price.appendChild(boldPrice);
        const priceText = document.createTextNode(m.price + " Rs\\-");
        price.appendChild(priceText);

        button.textContent="Add";
          // Event listener for "Add" button
            button.addEventListener('click', function() {
              cart.push(m); // Add the item to the cart array
              localStorage.setItem('cart', JSON.stringify(cart));// Store the updated cart in localStorage
              updateCartCount(); // Update the cart count
              
            });

        cardSub.append(description,price,button);
        divCard.append(name,image,cardSub);
        menu_dessert1.appendChild(divCard);

    })

    // Function to update cart count
        function updateCartCount() {
              if (cart.length > 0) {
                cartCountSpan.style.visibility = 'visible'; // Make the span visible
            }
            cartCountSpan.textContent = cart.length;
          }
          
         if(cart.length==0) cartCountSpan.style.visibility = 'hidden'; // Hide the span if the cart is empty

// COCKTAIL SECTION

    

  const menu_cocktail = {
    "cocktails": [
      {
        "name": "Mojito",
        "description": "A refreshing cocktail made with white rum, sugar, lime juice, soda water, and mint.",
        "image": "https://wallsdesk.com/wp-content/uploads/2017/01/Mojito-HD-Wallpaper.jpg",
        "price": 150
        
      },
      {
        "name": "Martini",
        "description": "A classic cocktail made with gin and vermouth, garnished with an olive or lemon twist.",
        "image": "https://besthqwallpapers.com/Uploads/2-1-2020/117670/martini-cocktail-4k-bokeh-glass-with-drink-cocktails.jpg",
        "price": 180
      },
      {
        "name": "Margarita",
        "description": "A tangy cocktail made with tequila, lime juice, and Cointreau, served with a salted rim.",
        "image": "https://wallpaperbat.com/img/241851-an-11-margaritas-wallpaper.jpg",
        "price": 160
      },
      {
        "name": "Pina Colada",
        "description": "A tropical cocktail made with rum, coconut cream, and pineapple juice.",
        "image": "https://s2.glbimg.com/sXVgPVt3jWx0QXfkEyIzz8EcKGM=/e.glbimg.com/og/ed/f/original/2021/07/16/pina-colada-5.jpeg",
        "price": 170
      },
      {
        "name": "Cosmopolitan",
        "description": "A sophisticated cocktail made with vodka, triple sec, cranberry juice, and lime juice.",
        "image": "https://fthmb.tqn.com/x5VCT5MlLBt_j24w1iihSvKR2Ok=/4843x3636/filters:fill(auto,1)/two-cosmopolitan-cocktail-drinks-98629317-5893c0dd5f9b5874ee2cc5e0.jpg",
        "price": 150
      },
      {
        "name": "Old Fashioned",
        "description": "A classic whiskey cocktail made with bourbon, sugar, bitters, and a twist of citrus peel.",
        "image": "https://media.30seconds.com/tip/lg/How-to-Make-an-Old-Fashioned-Cocktail-14229-4efcba4270-1497637170.jpg",
        "price": 190
      },
      {
        "name": "Bloody Mary",
        "description": "A savory cocktail made with vodka, tomato juice, and various spices and flavorings.",
        "image": "https://img.freepik.com/premium-photo/bloody-mary-cocktail-4k_1038458-224.jpg",
        "price": 160
      },
      {
        "name": "Daiquiri",
        "description": "A sweet and sour cocktail made with rum, lime juice, and sugar.",
        "image": "https://feed-your-sole.com/wp-content/uploads/2020/02/Frozen-Daiquri-Mocktail-800x638.png",
        "price": 140
      },
      {
        "name": "Negroni",
        "description": "A bitter and sweet cocktail made with gin, vermouth, and Campari, garnished with an orange peel.",
        "image": "https://howtomakerecipes.com/wp-content/uploads/2023/02/classic-negroni-cocktail-recipe1-1024x682.jpg",
        "price": 170
      },
      {
        "name": "Mai Tai",
        "description": "A tropical cocktail made with rum, lime juice, orgeat syrup, and orange liqueur.",
        "image": "https://cocktailbart.de/wp-content/uploads/2019/05/Mai-Tai-Cocktail.jpg",
        "price": 180
      }
    ]
  }
   

  const menu_cocktail1 = document.getElementById('COCKTAIL')

  menu_cocktail.cocktails.forEach(function(m){
        const divCard = document.createElement('div');
        divCard.classList.add('divMenu');
        divCard.classList.add('card');//class="card"
        const cardSub = document.createElement('div');
        cardSub.classList.add('card-body');
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');

        const name = document.createElement('h2');
          name.classList.add('card-title');
        const image = document.createElement('img');
          image.classList.add('card-img-top');
        const description = document.createElement('p');
          description.classList.add('card-text');
        const price = document.createElement('p');
          price.classList.add('price');
          price.classList.add('card-text');

        name.textContent=m.name;
        image.src=m.image;
        image.alt=m.name;

        const boldDescription = document.createElement('strong');
        boldDescription.textContent = "Description :";
        description.appendChild(boldDescription);
        const descText = document.createTextNode(m.description);
        description.appendChild(descText);
    
        const boldPrice = document.createElement('strong');
        boldPrice.textContent = "Price : ";
        price.appendChild(boldPrice);
        const priceText = document.createTextNode(m.price + " Rs\\-");
        price.appendChild(priceText);

        button.textContent="Add";
        // Event listener for "Add" button
        button.addEventListener('click', function() {
          cart.push(m); // Add the item to the cart array
          localStorage.setItem('cart', JSON.stringify(cart));// Store the updated cart in localStorage
          updateCartCount(); // Update the cart count
          
        });
        
     

        cardSub.append(description,price,button);
        divCard.append(name,image,cardSub);
        menu_cocktail1.appendChild(divCard);

    })