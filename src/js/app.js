const services = [
    // Streaming (originales)
    {
        id: 1, image: "../src/img/netflix.png", title: "Netflix",
        description: "Accede a miles de películas y series exclusivas.",
        price: "C$100/mes", link: "https://wa.me/50589600977",category:"Straming",
         isHot: true,
         blackFriday: false,
            porcentaje: 10
    },

    {
        id: 2, image: "../src/img/spotify.png", title: "Spotify",
        description: "Disfruta de música sin límites en cualquier momento.",
        price: "C$120/mes", link: "https://wa.me/50589600977",category:"Straming",
         isHot: true,
          blackFriday: false,
             porcentaje: 10
    },

    {
        id: 3, image: "../src/img/ymusic.png", title: "YT Music",
        description: "Escucha tus canciones favoritas y descubre nuevos artistas.",
        price: "C$100/mes", link: "https://wa.me/50589600977",category:"Straming",
         isHot: false,
          blackFriday: false,
             porcentaje: 10
    },

    {
        id: 4, image: "../src/img/hbomax.jpg", title:
            "HBO Max", description: "Ve las series y películas más populares del momento.",
        price: "C$100/mes", link: "https://wa.me/50589600977",category:"Straming",
         isHot: false,
          blackFriday: false,
             porcentaje: 10
    },

    {
        id: 5, image: "../src/img/amazon.png", title: "Prime Video",
        description: "Entretenimiento para toda la familia en un solo clic.",
        price: "C$105/mes", link: "https://wa.me/50589600977",category:"Straming",
         isHot: false,
          blackFriday: false,
             porcentaje: 10
    },  
    
    {
        id: 6, image: "../src/img/cruch.png", title: "Crunchyroll",
        description: "Anime sin anuncios: estrenos simultáneos con Japón, mangas digitales y contenido premium.",
        price: "C$85", link: "https://wa.me/50589600977",category:"Straming",
         isHot: false,
        blackFriday: true,
        porcentaje: 15
    },

    // Servicios mejorados

    {
        id: 7, image: "../src/img/FF.png", title: "Free Fire",
        description: "Recarga diamantes al instante y desbloquea personajes exclusivos, armas élite y más.",
        price: "Preguntar Precios", link: "https://wa.me/50589600977",category:"Juegos",
         isHot: true,
          blackFriday: false,
             porcentaje: 10
    },

    {
        id: 8, image: "../src/img/8ballp.png", title: "8 Ball Pool",
        description: "Paquetes premium de diamantes y acceso VIP a mesas exclusivas para competencias globales.",
        price: "Preguntar Precios", link: "https://wa.me/50589600977",category:"Juegos",
         isHot: false,
          blackFriday: false,
             porcentaje: 10
    },

    {
        id: 9, image: "../src/img/cod.png", title: "Call Of Duty",
        description: "Desbloquea CP (COD Points), armas legendarias y packs de temporada para ventaja competitiva.",
        price: "Preguntar Precios", link: "https://wa.me/50589600977",category:"Juegos",
         isHot: false,
          blackFriday: false,
             porcentaje: 10
    },

    {
        id: 10, image: "../src/img/vix.png", title: "Vix",
        description: "La mejor plataforma para disfrutar de tus telenovelas y cualquier deporte.",
        price: "C$100/mes", link: "https://wa.me/50589600977",category:"Straming",
         isHot: true,
          blackFriday: false,
             porcentaje: 10
    },
 

    {
        id: 11, image: "../src/img/coc.png", title: "Clash Of Clans",
        description: "Skins, Gemas Pack de eventos. ",
        price: "Preguntar Precios", link: "https://wa.me/50589600977",category:"Juegos",
         isHot: false,
          blackFriday: false,
             porcentaje: 30
      
    },

    {
        id: 12, image: "../src/img/ClashRoyale.png", title: "Clash Royale",
        description: "Pass Royale, gemas y cofres épicos para acelerar tu progreso en la arena.",
        price: "Preguntar Precios", link: "https://wa.me/50589600977",category:"Juegos",
         isHot: false,
          blackFriday: false,
             porcentaje: 10
    }

    ,

    {
        id: 13, image: "../src/img/paramount.png", title: "Paramount",
        description: "Disfruta de la gran variedad de contenido, series, pelicula mas populares.",
        price: "C$100/mes", link: "https://wa.me/50589600977",category:"Straming",
         isHot: false,
          blackFriday: false,
             porcentaje: 10
    }
];


let lastScroll = 0; // Almacena la última posición del scroll

window.addEventListener("scroll", () => {
  const subHeader = document.querySelector(".sub-header");
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // Scroll hacia abajo: fija el sub-header
    subHeader.style.transform = "translateY(0)";
  } else {
    // Scroll hacia arriba: muestra el sub-header
    subHeader.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para renderizar las tarjetasdo
function renderCards(data) {
    const container = document.getElementById('services-container');
    container.innerHTML = '';

    data.forEach(service => {
        let hotLabel = '';
        if (service.isHot) {
            // Puedes personalizar el estilo y texto de la etiqueta
            hotLabel = `<span class="hot-label">Top Ventas 🔥</span>`;
        }

        let oferta =""

        if(service.blackFriday){
            oferta = `<span class="black-friday">¡Ahorra ${service.porcentaje}%!</span>`;
        }

        
        const card = `
            <div class="card">
             ${hotLabel}
             ${oferta}
                <img src="${service.image}" alt="${service.title}">
                <h2>${service.title}</h2>
                <p>${service.description}</p>
                <p class="price">${service.price}</p>
                <button class="contact-button" data-id="${service.id}"> Añadir <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M12.5 17h-6.5v-14h-2"></path>
                <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
              </svg>
                </button>
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


// Modificar el JavaScript
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        applyFilters(filter);
    });
});

function applyFilters(category) {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    let filtered = services.filter(service => 
        (service.title.toLowerCase().includes(searchTerm) || 
         service.description.toLowerCase().includes(searchTerm)) &&
        (category === 'all' || service.category === category)
    );
    renderCards(filtered);
}

document.getElementById('search').addEventListener('input', () => {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    applyFilters(activeFilter);
});


function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
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
    showToast('✅ Producto añadido al carrito');
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Función para actualizar el carrito
function parsePrice(priceStr) {
    if (priceStr === "Preguntar Precios") return 0;
    const numericPart = priceStr.replace(/[^0-9.]/g, '');
    return parseFloat(numericPart) || 0;
}


// Actualizar carrito
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('cart-total');
    cartList.innerHTML = ''; // Limpiar lista

    let total = 0;

    if (cart.length === 0) {
        // Mostrar mensaje cuando el carrito está vacío
        const emptyMessage = document.createElement('span');
        emptyMessage.classList.add('emptyMessage');
        emptyMessage.textContent = "🛒 Tu carrito está vacío";
        cartList.appendChild(emptyMessage);
    } else {
        // Mostrar items del carrito
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img class="img-logo" src="${item.image}" alt="${item.title}">
                ${item.title},  ${item.price} (x${item.quantity})
                <button class="remove-from-cart" data-id="${item.id}">Eliminar</button>
            `;
            cartList.appendChild(listItem);
            total += parsePrice(item.price) * item.quantity;
        });
    }

    // Actualizar total y botón de checkout
    totalElement.textContent = cart.length > 0 ? `Total: C$${total.toFixed(2)}` : '';
    document.getElementById('checkout-button').style.display = cart.length > 0 ? 'block' : 'none';

    // Agregar eventos de eliminación solo si hay items
    if (cart.length > 0) {
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', function() {
                const serviceId = parseInt(this.getAttribute('data-id'));
                removeFromCart(serviceId);
            });
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
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
    showToast('🗑️ Producto eliminado del carrito');
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Función para actualizar el ícono del carrito
function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartIcon.textContent = `${totalItems}`;
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
    const message = cart.map(item => ` ✓ ${item.title}   ${item.price}  (x${item.quantity})`).join('\n');
    const total = cart.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);
    const encodedMessage = encodeURIComponent(
        `¡Hola!  , quiero comprar:\n  \n  --------Servicios--------\n${message}\n\n----------------\n Total: C$${total.toFixed(2)}`
    );
    window.open(`https://wa.me/50587914699?text=${encodedMessage}`, '_blank');
});


// Evento de búsqueda
document.getElementById('search').addEventListener('input', function () {
    filterServices(this.value);
});



// Renderizar todas las tarjetas al cargar la página
window.onload = () => {
    renderCards(services);
    updateCart();
    updateCartIcon();
    applyFilters('all');
};
