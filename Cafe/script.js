const MENU = {
  categories: [
    {
      id: 'cafes',
      name: 'Cafés',
      tagline: 'Clásicos de barra',
      icon: 'cup',
      items: [
          {
              name: 'Espresso',
              price: '$32',
              ingredients: [' Café puro', ' Cuerpo intenso']
          },
          {
              name: 'Americano',
              price: '$38',
              ingredients: [' Espresso', ' Agua caliente']
          },
        { 
          name: 'Cappuccino', 
          price: '$45', 
            ingredients: [' Espresso', ' Leche vaporizada', ' Espuma cremosa'] 
        },
        { 
          name: 'Latte', 
          price: '$48', 
          ingredients: [' Espresso', ' Leche cremosa', '  Toque de canela'] 
        },
      ]
    },
    {
      id: 'frappes',
      name: 'Frappés',
      tagline: 'Fríos y cremosos',
      icon: 'glass',
      items: [
          {
              name: 'Frappé de café',
              price: '$58',
              ingredients: [' Café frío', ' Hielo', ' Leche', ' Toque de azúcar']
          },
          {
              name: 'Frappé de caramelo',
              price: '$62',
              ingredients: ['Café', 'Caramelo', 'Hielo', 'Crema batida']
          },
          {
              name: 'Frappé de chocolate',
              price: '$62',
              ingredients: ['Cacao', 'Leche', 'Hielo', 'Crema batida']
          },
          {
              name: 'Frappé de vainilla',
              price: '$60',
              ingredients: ['Café', 'Jarabe de vainilla', 'Hielo', 'Leche']
          },
      ]
    },
    {
      id: 'aperitivos',
      name: 'Aperitivos',
      tagline: 'Para acompañar',
      icon: 'pastry',
      items: [
          {
              name: 'Croissant',
              price: '$35',
              ingredients: ['Hojaldre mantequilloso', 'horneado al momento']
          },
          {
              name: 'Pan de plátano',
              price: '$38',
              ingredients: ['Plátano, nuez, canela']
          },
          {
              name: 'Bagel con queso crema',
              price: '$42',
              ingredients: ['Bagel tostado', 'queso crema', 'ajonjolí']
          },
          {
              name: 'Waffle con miel',
              price: '$48',
              ingredients: ['Waffle belga', 'miel de abeja', 'fruta de temporada']
          },
      ]
    },
    {
      id: 'bolsas',
      name: 'Bolsas de café',
      tagline: 'Para llevar a casa',
      icon: 'bag',
      items: [
          {
              name: 'Grano entero 250g',
              price: '$180',
              ingredients: ['Tueste medio', 'Notas a chocolate', 'Nuez']
          },
          {
              name: 'Molido 250g',
              price: '$170',
              ingredients: ['Tueste medio', 'Listo para tu cafetera']
          },
          {
              name: 'Descafeinado 250g',
              price: '$190',
              ingredients: ['Tueste suave', 'Mismo sabor', 'Sin cafeína']
          },
          {
              name: 'Edición especial 250g',
              price: '$220',
              ingredients: ['Lote limitado', 'Origen único', 'Notas frutales']
          },
      ]
    },
  ]
};

const ICONS = {
  cup: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M28,40 H70 V58 A21,20 0 0 1 49,78 A21,20 0 0 1 28,58 Z" fill="var(--coffee-700)"/>
    <path d="M70,46 a11,9 0 1 1 0,18" fill="none" stroke="var(--coffee-700)" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="49" cy="82" rx="26" ry="5" fill="var(--coffee-500)" opacity="0.5"/>
    <path d="M40,34 q4,-6 0,-12" stroke="var(--coffee-500)" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M54,34 q4,-6 0,-12" stroke="var(--coffee-500)" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`,
  glass: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M34,28 H66 L60,80 A11,6 0 0 1 40,80 Z" fill="var(--coffee-700)"/>
    <path d="M38,44 H62" stroke="var(--cream-2)" stroke-width="3" opacity="0.55"/>
    <path d="M40,58 H60" stroke="var(--cream-2)" stroke-width="3" opacity="0.55"/>
    <rect x="58" y="8" width="6" height="34" rx="3" fill="var(--coffee-500)" transform="rotate(10 61 25)"/>
  </svg>`,
  pastry: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M18,58 Q50,18 82,58 Q64,46 50,50 Q36,46 18,58 Z" fill="var(--coffee-700)"/>
    <path d="M34,48 L30,58" stroke="var(--coffee-500)" stroke-width="3" stroke-linecap="round"/>
    <path d="M50,45 L47,56" stroke="var(--coffee-500)" stroke-width="3" stroke-linecap="round"/>
    <path d="M66,48 L70,58" stroke="var(--coffee-500)" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  bag: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,38 L38,20 H62 L70,38 Z" fill="var(--coffee-500)"/>
    <rect x="28" y="38" width="44" height="44" rx="6" fill="var(--coffee-700)"/>
    <rect x="28" y="58" width="44" height="9" fill="var(--coffee-500)" opacity="0.55"/>
    <circle cx="50" cy="52" r="3.5" fill="var(--cream-2)"/>
  </svg>`,
};

const catGrid = document.getElementById('catGrid');
const itemGrid = document.getElementById('itemGrid');
const categoriesView = document.getElementById('categoriesView');
const menuView = document.getElementById('menuView');
const menuTitle = document.getElementById('menuTitle');
const menuSub = document.getElementById('menuSub');
const backRow = document.getElementById('backRow');
const modalOverlay = document.getElementById('modalOverlay');
const modalIcon = document.getElementById('modalIcon');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalIngredients = document.getElementById('modalIngredients');
const modalClose = document.getElementById('modalClose');
const miniHeader = document.getElementById('miniHeader');

/**
 * Función helper: Transforma cualquier formato de ingredientes
 * en un texto limpio listo para saltar renglones.
 */
function formatIngredients(ingredients) {
  if (Array.isArray(ingredients)) {
    return ingredients.map(ing => `• ${ing}`).join('\n');
  }
  if (typeof ingredients === 'string') {
    return ingredients.replace(/<br\s*\/?>/gi, '\n');
  }
  return '';
}

function renderCategories() {
  catGrid.innerHTML = MENU.categories.map(cat => `
    <button class="cat-card" data-id="${cat.id}">
      <div class="icon-wrap">${ICONS[cat.icon]}</div>
      <h3>${cat.name}</h3>
      <p>${cat.tagline}</p>
      <span class="count">${cat.items.length} productos</span>
    </button>
  `).join('');

  catGrid.querySelectorAll('.cat-card').forEach(btn => {
    btn.addEventListener('click', () => openCategory(btn.dataset.id));
  });
}

function openCategory(id) {
  const cat = MENU.categories.find(c => c.id === id);
  if (!cat) return;
  menuTitle.textContent = cat.name;
  menuSub.textContent = cat.tagline;

  itemGrid.innerHTML = cat.items.map((item, idx) => {
    const textFormatted = formatIngredients(item.ingredients);
    return `
      <button class="item-card" data-cat="${cat.id}" data-idx="${idx}">
        <div class="img-wrap">${ICONS[cat.icon]}</div>
        <h4>${item.name}</h4>
        <div class="price">${item.price}</div>
        <div class="ingredients">${textFormatted}</div>
      </button>
    `;
  }).join('');

  itemGrid.querySelectorAll('.item-card').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.cat, Number(btn.dataset.idx)));
  });

  categoriesView.classList.add('hidden');
  menuView.classList.add('active');
  window.scrollTo({ top: menuView.offsetTop - 70, behavior: 'smooth' });
}

function backToCategories() {
  menuView.classList.remove('active');
  categoriesView.classList.remove('hidden');
  window.scrollTo({ top: categoriesView.offsetTop - 70, behavior: 'smooth' });
}

function openModal(catId, idx) {
  const cat = MENU.categories.find(c => c.id === catId);
  const item = cat.items[idx];
  modalIcon.innerHTML = ICONS[cat.icon];
  modalName.textContent = item.name;
  modalPrice.textContent = item.price;
  
  modalIngredients.textContent = formatIngredients(item.ingredients);
  
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

backRow.addEventListener('click', backToCategories);
backRow.addEventListener('keydown', e => { if (e.key === 'Enter') backToCategories(); });
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const heroEl = document.querySelector('.hero');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    miniHeader.classList.toggle('visible', !entry.isIntersecting);
  });
}, { threshold: 0.15 });
io.observe(heroEl);

renderCategories();