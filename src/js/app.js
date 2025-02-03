const services = [
    // Streaming (originales)
    {
        id: 1, image: "../src/img/netflix.png", title: "Netflix",
        description: "Accede a miles de películas y series exclusivas.",
        price: "C$100/mes", link: "https://wa.me/50589600977"
    },

    {
        id: 2, image: "../src/img/spotify.png", title: "Spotify",
        description: "Disfruta de música sin límites en cualquier momento.",
        price: "C$120/mes", link: "https://wa.me/50589600977"
    },

    {
        id: 3, image: "../src/img/ymusic.png", title: "YouTube Music",
        description: "Escucha tus canciones favoritas y descubre nuevos artistas.",
        price: "C$100/mes", link: "https://wa.me/50589600977"
    },

    {
        id: 4, image: "../src/img/hbomax.jpg", title:
            "HBO Max", description: "Ve las series y películas más populares del momento.",
        price: "C$100/mes", link: "https://wa.me/50589600977"
    },

    {
        id: 5, image: "../src/img/amazon.png", title: "Amazon Prime",
        description: "Entretenimiento para toda la familia en un solo clic.",
        price: "C$110/mes", link: "https://wa.me/50589600977"
    },

    // Servicios mejorados
    {
        id: 6, image: "../src/img/pcgta.png", title: "Compras Juegos",
        description: "Compra skins, DLCs y contenido especial para cualquier juego con garantía y entrega inmediata.",
        price: "Preguntar Precios", link: "https://wa.me/50589600977"
    },

    {
        id: 7, image: "../src/img/FF.png", title: "Free Fire",
        description: "Recarga diamantes al instante y desbloquea personajes exclusivos, armas élite y más.",
        price: "Preguntar Precios", link: "https://wa.me/50589600977"
    },

    {
        id: 8, image: "../src/img/8ballp.png", title: "8 Ball Pool",
        description: "Paquetes premium de diamantes y acceso VIP a mesas exclusivas para competencias globales.",
        price: "Preguntar Precios", link: "https://wa.me/50589600977"
    },

    {
        id: 9, image: "../src/img/cod.png", title: "Call Of Duty",
        description: "Desbloquea CP (COD Points), armas legendarias y packs de temporada para ventaja competitiva.",
        price: "Preguntar Precios", link: "https://wa.me/50589600977"
    },

    // Crunchyroll (mejorado)
    {
        id: 10, image: "../src/img/cruch.png", title: "Crunchyroll",
        description: "Anime sin anuncios: estrenos simultáneos con Japón, mangas digitales y contenido premium.",
        price: "C$90", link: "https://wa.me/50589600977"
    },

    {
        id: 11, image: "../src/img/target.png", title: "Tarjetas de Regalo",
        description: "Tarjetas digitales para Steam, Google Play, iTunes y más. ¡Entrega en menos de 5 minutos!",
        price: "Preguntar Precios", link: "https://wa.me/50589600977"
    },

    {
        id: 12, image: "../src/img/ClashRoyale.png", title: "Clash Royale",
        description: "Pass Royale, gemas y cofres épicos para acelerar tu progreso en la arena.",
        price: "Preguntar Precios", link: "https://wa.me/50589600977"
    }
];
const cart = [];

// Función para renderizar las tarjetasdo
function renderCards(data) {
    const container = document.getElementById('services-container');
    container.innerHTML = '';

    data.forEach(service => {
        const card = `
            <div class="card">
                <img src="${service.image}" alt="${service.title}">
                <h2>${service.title}</h2>
                <p>${service.description}</p>
                <p class="price">${service.price}</p>
                <button class="contact-button" data-id="${service.id}">Añadir 🛒</button>
            </div>
        `
        container.innerHTML += card;
    });

    document.querySelectorAll('.contact-button').forEach(button => {
        button.addEventListener('click', function () {
            const serviceId = parseInt(this.getAttribute('data-id'));
            addToCart(serviceId);
        });
    });
}

// Función para añadir al carrito
function addToCart(serviceId) {
    const service = services.find(item => item.id === serviceId);
    const cartItem = cart.find(item => item.id === serviceId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...service, quantity: 1 });
    }

    updateCart();
}

// Función para actualizar el carrito
function parsePrice(priceStr) {
    if (priceStr === "Precios variables") return 0;
    const match = priceStr.match(/(\d+\.?\d*)/);
    return match ? parseFloat(match[1]) : 0;
}

// Actualizar carrito
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('cart-total');
    cartList.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
         <img class="img-logo" src="${item.image}" alt="${item.title}">
             ${item.title} (x${item.quantity})
            <button class="remove-from-cart" data-id="${item.id}">Eliminar</button>
        `;
        cartList.appendChild(listItem);
        total += parsePrice(item.price) * item.quantity;
    });

    totalElement.textContent = `Total: C$${total.toFixed(2)}`;
    document.getElementById('checkout-button').style.display = cart.length > 0 ? 'block' : 'none';

    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', function () {
            const serviceId = parseInt(this.getAttribute('data-id'));
            removeFromCart(serviceId);
        });
    });
    updateCartIcon();
}

// Función para eliminar del carrito
function removeFromCart(serviceId) {
    const cartItem = cart.find(item => item.id === serviceId);
    if (cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity === 0) {
            const index = cart.findIndex(item => item.id === serviceId);
            cart.splice(index, 1);
        }
    }

    updateCart();
}

// Función para actualizar el ícono del carrito
function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartIcon.textContent = `(${totalItems})`;
}

// Función para filtrar los servicios
function filterServices(searchTerm) {
    const filtered = services.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const container = document.getElementById('services-container');
    if (filtered.length === 0) {
        container.innerHTML = '<p class="error304">Servicio no Encontrado</p>';
    } else {
        renderCards(filtered);
    }
}

document.getElementById('btn-Kart').addEventListener('click', () => {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = cartContainer.style.display === 'flex' ? 'none' : 'flex';
});

// Evento del botón de checkout
document.getElementById('checkout-button').addEventListener('click', function () {
    const message = cart.map(item => `${item.title}  (x${item.quantity})`).join('\n');
    const total = cart.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);
    const encodedMessage = encodeURIComponent(
        `¡Hola!, quiero comprar:\n\n --------Servicios--------\n${message}\n\n----------------\n Total: C$${total.toFixed(2)}`
    ); 
    window.open(`https://wa.me/50583753076?text=${encodedMessage}`, '_blank');
});


// Evento de búsqueda
document.getElementById('search').addEventListener('input', function () {
    filterServices(this.value);
});



// Renderizar todas las tarjetas al cargar la página
window.onload = () => {
    renderCards(services);
    updateCartIcon();
};
