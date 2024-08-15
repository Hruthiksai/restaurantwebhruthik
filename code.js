const menu =  [
    {
      "name": "Idli",
      "description": "Steamed rice cakes served with coconut chutney and sambar.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEygqkERkBevt3H9lXfBjaygB2cHXxeXpETdCf059u3DKqUcI_fUh8gM&s=10",
      "price": 50
    },
    {
      "name": "Dosa",
      "description": "Crispy fermented rice and lentil crepe, served with chutney and sambar.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12tY20xGg4nWiOd2texxHzstYVw1XJsIjIi7F51nSvtNPWSqBVuhi2Ck&s=10",
      "price": 70
    },
    {
      "name": "Vada",
      "description": "Deep-fried savory doughnut made from lentil batter, served with chutney and sambar.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0oz96C9OfZIctUvDAj-3qSzbxJLP-zjNBA&usqp=CAU",
      "price": 40
    },
    {
      "name": "Uttapam",
      "description": "Thick rice and lentil pancake topped with vegetables, served with chutney and sambar.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxAEF_HQSXm2enFaYPrpum-JNX-3eoP3IgQ&usqp=CAU",
      "price": 60
    },
    {
      "name": "Pongal",
      "description": "Savory rice and lentil dish seasoned with black pepper and ghee.",
      "image": "https://i.ytimg.com/vi/KuqIAwUz5Z8/maxresdefault.jpg",
      "price": 55
    },
    {
      "name": "Upma",
      "description": "A dish made from semolina, seasoned with mustard seeds and curry leaves.",
      "image": "https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg",
      "price": 50
    },
    {
      "name": "Appam",
      "description": "Soft, spongy rice pancakes served with stew or coconut milk.",
      "image": "https://vismaifood.com/storage/app/uploads/public/8a4/fe0/5c0/thumb__1200_0_0_0_auto.jpg",
      "price": 65
    },
    {
      "name": "Puttu",
      "description": "Steamed rice flour and coconut cylinders served with banana and curry.",
      "image": "https://www.keralatourism.org/images/cuisine/large/Puttu_and_Kadala_Curry20131126123929_43_1.jpg",
      "price": 50
    },
    {
      "name": "Masala Dosa",
      "description": "A dosa stuffed with a spicy potato filling, served with chutney and sambar.",
      "image": "https://ranveerbrar.com/wp-content/uploads/2021/02/Masala-dosa-scaled.jpg",
      "price": 80
    },
    {
      "name": "Medu Vada",
      "description": "Crispy and fluffy deep-fried lentil fritters, served with chutney and sambar.",
      "image": "https://cdn.tasteatlas.com/images/dishes/8b47ef43b3ea4bb88ef6131d63d873c9.jpg",
      "price": 45
    }
  ]


  const menu1 = document.getElementById('BREAKFAST')

   menu.forEach(function(m){
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

        cardSub.append(description,price,button);
        divCard.append(name,image,cardSub);
        menu1.appendChild(divCard);

    })


    