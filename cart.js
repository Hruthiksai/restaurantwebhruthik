document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the container where cart items will be displayed
    const cartItemsContainer = document.getElementById('cartItems');
    // const cartCountSpan = document.getElementById('cartCount'); // Assuming there's a span with id 'cartCount'
    const cartCountSpan = document.querySelector('.cart1 .count');
    // Function to update the cart count
    function updateCartCount() {
        if (cart.length > 0) {
            cartCountSpan.style.visibility = 'visible'; // Make the span visible if there are items in the cart
            cartCountSpan.textContent = cart.length;
        } else {
            cartCountSpan.style.visibility = 'hidden'; // Hide the span if the cart is empty
        }
    }

    // Function to display cart items
    function displayCartItems() {
        // Clear the container first
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            // Display a message if the cart is empty
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        // Iterate over the cart items and create the card elements
        cart.forEach(function(item, index) {
            const divCard = document.createElement('div');
            divCard.classList.add('divMenu');
            divCard.classList.add('card');
            
            const cardSub = document.createElement('div');
            cardSub.classList.add('card-body');
            
            const name = document.createElement('h2');
            name.classList.add('card-title');
            
            const image = document.createElement('img');
            image.classList.add('card-img-top');
            
            const description = document.createElement('p');
            description.classList.add('card-text');
            
            const price = document.createElement('p');
            price.classList.add('price');
            price.classList.add('card-text');

            const removeButton = document.createElement('button');
            removeButton.classList.add('btn', 'btn-danger');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                removeItemFromCart(index);
            });

            name.textContent = item.name;
            image.src = item.image;
            image.alt = item.name;

            const boldDescription = document.createElement('strong');
            boldDescription.textContent = "Description: ";
            description.appendChild(boldDescription);
            const descText = document.createTextNode(item.description);
            description.appendChild(descText);
            
            const boldPrice = document.createElement('strong');
            boldPrice.textContent = "Price: ";
            price.appendChild(boldPrice);
            const priceText = document.createTextNode(item.price + " Rs\\-");
            price.appendChild(priceText);

            cardSub.append(description, price, removeButton);
            divCard.append(name, image, cardSub);
            cartItemsContainer.appendChild(divCard);
        });

        // Update the cart count after displaying items
        updateCartCount();
    }

    // Function to remove an item from the cart
    function removeItemFromCart(index) {
        cart.splice(index, 1); // Remove the item from the cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart in localStorage
        if (cart.length > 0) {
            cartCountSpan.style.visibility = 'visible'; // Make the span visible
        }
        displayCartItems(); // Re-render the cart items
    }

    // Display cart items and update cart count when the page loads
    displayCartItems();
    updateCartCount();
});
