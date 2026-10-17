/**
 * BurgerHub - Interactive Application Logic
 * Supports: Cart State, User Authentication, Menu Filtering, Modals, Drawer Navigation
 */

// Initial Sample Menu Data (Used for dynamic matching, cart images, and details)
const MENU_DATA = [
    {
        id: "classic-crunch",
        name: "Classic Crunch",
        category: "burgers",
        price: 149,
        badge: "BEST SELLER",
        diet: "non-veg",
        rating: "4.9",
        reviews: 320,
        desc: "Juicy handcrafted beef patty with crisp lettuce, ripe tomatoes, cheddar cheese and signature relish.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "cheesy-blast",
        name: "Cheesy Blast",
        category: "burgers",
        price: 179,
        badge: "POPULAR",
        diet: "veg",
        rating: "4.8",
        reviews: 284,
        desc: "Double melted gouda and cheddar poured over a crispy golden veggie patty with smoky chipotle mayo.",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "chicken-crunch",
        name: "Chicken Crunch",
        category: "burgers",
        price: 199,
        badge: "CHEF SPECIAL",
        diet: "non-veg",
        rating: "4.9",
        reviews: 410,
        desc: "Buttermilk marinated crispy fried chicken breast tossed in hot Korean spices with creamy garlic herb sauce.",
        image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "smoky-bbq-bacon",
        name: "Smoky BBQ Monster",
        category: "burgers",
        price: 249,
        badge: "MUST TRY",
        diet: "non-veg",
        rating: "5.0",
        reviews: 190,
        desc: "Char-grilled double patty layered with smoky bacon rashers, caramelized onions and bourbon BBQ glaze.",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "truffle-mushroom",
        name: "Truffle Swiss Smash",
        category: "burgers",
        price: 229,
        badge: "GOURMET",
        diet: "veg",
        rating: "4.7",
        reviews: 145,
        desc: "Sautéed wild portobello mushrooms, creamy Swiss cheese and black truffle garlic aioli on brioche.",
        image: "https://images.unsplash.com/photo-1583032015879-c5500e57263b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "fiery-jalapeno",
        name: "Fiery Peri Jalapeño",
        category: "burgers",
        price: 189,
        badge: "SPICY 🔥",
        diet: "veg",
        rating: "4.8",
        reviews: 215,
        desc: "Zesty Mexican jalapeño coins, habanero chili cheese spread, shredded lettuce and crispy fried onions.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "classic-french-fries",
        name: "Golden Peri Fries",
        category: "fries",
        price: 99,
        badge: "FAVORITE",
        diet: "veg",
        rating: "4.8",
        reviews: 520,
        desc: "Skin-on extra crispy potatoes dusted with signature fiery African peri-peri herb seasoning.",
        image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "loaded-truffle-fries",
        name: "Loaded Cheesy Bacon Fries",
        category: "fries",
        price: 159,
        badge: "TOP PICK",
        diet: "non-veg",
        rating: "4.9",
        reviews: 310,
        desc: "A hot heap of crispy fries smothered in melted four-cheese sauce, crispy bacon bits and chopped scallions.",
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "crispy-onion-rings",
        name: "Beer-Battered Onion Rings",
        category: "fries",
        price: 119,
        badge: "CRISPY",
        diet: "veg",
        rating: "4.6",
        reviews: 180,
        desc: "Sweet Vidalia onion rings enveloped in crisp golden tempura batter, served with tangy comeback dip.",
        image: "https://images.unsplash.com/photo-1639024471287-032f6645558d?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "belgian-chocolate-shake",
        name: "Thick Belgian Shake",
        category: "drinks",
        price: 139,
        badge: "SWEET SPOT",
        diet: "veg",
        rating: "4.9",
        reviews: 440,
        desc: "Decadent melted 70% dark Belgian chocolate spun with velvety vanilla bean ice cream and whipped cream.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "strawberry-milkshake",
        name: "Strawberry Bliss Shake",
        category: "drinks",
        price: 129,
        badge: "FRESH",
        diet: "veg",
        rating: "4.7",
        reviews: 290,
        desc: "Hand-picked alpine strawberries blended with rich sweet cream, topped with fresh strawberry drizzle.",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "citrus-mint-lemonade",
        name: "Iced Citrus Mint Cooler",
        category: "drinks",
        price: 89,
        badge: "REFRESHING",
        diet: "veg",
        rating: "4.8",
        reviews: 230,
        desc: "Freshly squeezed Meyer lemons, crushed garden mint leaves, sparkling soda and hints of ginger.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "ultimate-feast-combo",
        name: "Ultimate Feast Combo",
        category: "combos",
        price: 349,
        badge: "BEST VALUE",
        diet: "non-veg",
        rating: "5.0",
        reviews: 620,
        desc: "Any Signature Burger + Large Peri-Peri Fries + Handcrafted Shake + Warm Cookie. Save ₹120!",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "duo-party-combo",
        name: "Duo Squad Party Box",
        category: "combos",
        price: 499,
        badge: "FOR 2 PEOPLE",
        diet: "non-veg",
        rating: "4.9",
        reviews: 430,
        desc: "2 Classic Crunch or Chicken Crunch Burgers + 1 Cheesy Bacon Fries + 2 Chilled Drinks + 2 Brownies.",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=700&q=80"
    }
];

// Active applied discount
let appliedDiscount = 0; // percentage e.g. 20 for BURGER20

// ==========================================
// 1. CART MANAGEMENT (localStorage persisted)
// ==========================================

function getCart() {
    try {
        const stored = localStorage.getItem('burgerhub_cart');
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem('burgerhub_cart', JSON.stringify(cart));
    } catch (e) {
        console.error("Cart save error", e);
    }
    updateCartBadge();
    renderCart();
}

function updateCartBadge() {
    const cart = getCart();
    const count = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const badges = document.querySelectorAll('#cart-count, .cart-count-badge');
    badges.forEach(b => {
        b.textContent = count;
        b.style.display = count > 0 ? 'inline-block' : 'inline-block';
    });
}

function addCart(name, price, image, category) {
    // If only name provided, search MENU_DATA
    const found = MENU_DATA.find(item => item.name.toLowerCase() === name.toLowerCase());
    
    const finalPrice = price || (found ? found.price : 149);
    const finalImg = image || (found ? found.image : "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80");
    const finalCategory = category || (found ? found.category : "burgers");

    let cart = getCart();
    const existingIndex = cart.findIndex(item => item.name.toLowerCase() === name.toLowerCase());

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            name: name,
            price: finalPrice,
            image: finalImg,
            category: finalCategory,
            quantity: 1
        });
    }

    saveCart(cart);
    showToast(`Added ${name} to your cart! 🍔`);

    // Animate cart button
    const cartBtns = document.querySelectorAll('.cart-btn');
    cartBtns.forEach(btn => {
        btn.classList.add('pulse-pop');
        setTimeout(() => btn.classList.remove('pulse-pop'), 400);
    });
}

function updateQty(name, delta) {
    let cart = getCart();
    const index = cart.findIndex(item => item.name.toLowerCase() === name.toLowerCase());
    if (index > -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
            showToast(`Removed from cart`, '🗑️');
        }
        saveCart(cart);
    }
}

function removeFromCart(name) {
    let cart = getCart();
    cart = cart.filter(item => item.name.toLowerCase() !== name.toLowerCase());
    saveCart(cart);
    showToast(`Item removed from cart`, '🗑️');
}

function clearCart() {
    saveCart([]);
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty-state');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const deliveryEl = document.getElementById('cart-delivery');
    const discountRow = document.getElementById('cart-discount-row');
    const discountEl = document.getElementById('cart-discount');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('cart-checkout-btn');

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'flex';
        if (subtotalEl) subtotalEl.textContent = '₹0';
        if (taxEl) taxEl.textContent = '₹0';
        if (deliveryEl) deliveryEl.textContent = '₹0';
        if (discountRow) discountRow.style.display = 'none';
        if (totalEl) totalEl.textContent = '₹0';
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = '0.5';
            checkoutBtn.style.cursor = 'not-allowed';
        }
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
        checkoutBtn.style.cursor = 'pointer';
    }

    let subtotal = 0;
    let html = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        html += `
            <div class="cart-item-row">
                <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <span class="cart-item-unit-price">₹${item.price} each</span>
                    <div class="cart-qty-controls">
                        <button class="qty-btn" onclick="updateQty('${item.name.replace(/'/g, "\\'")}', -1)">−</button>
                        <span class="qty-num">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQty('${item.name.replace(/'/g, "\\'")}', 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-right">
                    <span class="cart-item-total">₹${itemTotal}</span>
                    <button class="cart-remove-btn" onclick="removeFromCart('${item.name.replace(/'/g, "\\'")}')" title="Remove">✕</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // Delivery is free above ₹299
    const delivery = subtotal >= 299 ? 0 : 35;
    const taxes = Math.round(subtotal * 0.05); // 5% GST
    let discountAmount = 0;

    if (appliedDiscount > 0) {
        discountAmount = Math.round(subtotal * (appliedDiscount / 100));
        if (discountRow) discountRow.style.display = 'flex';
        if (discountEl) discountEl.textContent = `-₹${discountAmount} (${appliedDiscount}%)`;
    } else {
        if (discountRow) discountRow.style.display = 'none';
    }

    const finalTotal = Math.max(0, subtotal + taxes + delivery - discountAmount);

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    if (taxEl) taxEl.textContent = `₹${taxes}`;
    if (deliveryEl) deliveryEl.textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
    if (totalEl) totalEl.textContent = `₹${finalTotal}`;
}

function applyCoupon() {
    const input = document.getElementById('coupon-input');
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (code === 'BURGER20') {
        appliedDiscount = 20;
        showToast('Promo code applied: 20% OFF! 🎉', '🏷️');
        input.value = '';
        renderCart();
    } else if (code === 'FIRST100') {
        appliedDiscount = 15;
        showToast('Promo code applied: 15% OFF! 🍔', '🏷️');
        input.value = '';
        renderCart();
    } else if (code === '') {
        showToast('Please enter a coupon code', '⚠️');
    } else {
        showToast('Invalid coupon code. Try BURGER20', '❌');
    }
}

function showCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        renderCart();
    }
}

function closeCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function handleCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        showToast('Your cart is empty! Add some delicious burgers first.', '🛒');
        return;
    }

    closeCart();
    
    // Show order confirmation modal
    const modal = document.getElementById('order-success-modal');
    const orderNumEl = document.getElementById('order-num-display');
    const orderAmountEl = document.getElementById('order-amount-display');

    if (orderNumEl) {
        orderNumEl.textContent = '#' + Math.floor(100000 + Math.random() * 900000);
    }
    if (orderAmountEl) {
        const total = document.getElementById('cart-total')?.textContent || '₹349';
        orderAmountEl.textContent = total;
    }

    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        alert('🎉 Order Placed Successfully! Your delicious burger is being prepared hot & fresh.');
    }

    clearCart();
}

function closeOrderModal() {
    const modal = document.getElementById('order-success-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}


// ==========================================
// 2. MOBILE NAVIGATION MENU
// ==========================================

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-drawer');
    const mobileOverlay = document.getElementById('mobile-drawer-overlay');
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        navbar.classList.toggle('mobile-nav-visible');
    }
    if (mobileMenu) {
        mobileMenu.classList.toggle('open');
    }
    if (mobileOverlay) {
        mobileOverlay.classList.toggle('open');
    }
}

function closeMenu() {
    const mobileMenu = document.getElementById('mobile-drawer');
    const mobileOverlay = document.getElementById('mobile-drawer-overlay');
    const navbar = document.querySelector('.navbar');

    if (navbar) navbar.classList.remove('mobile-nav-visible');
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
}

// Toggle Navbar Menu between Vertical (one below another) and Horizontal
function toggleNavLayout() {
    const navbar = document.querySelector('.navbar');
    const btn = document.getElementById('menu-layout-toggle-btn');
    if (!navbar) return;

    navbar.classList.toggle('horizontal-menu');
    const isHorizontal = navbar.classList.contains('horizontal-menu');
    localStorage.setItem('burgerhub_nav_layout', isHorizontal ? 'horizontal' : 'vertical');

    if (btn) {
        btn.innerHTML = isHorizontal ? '↕ Vertical Menu' : '⇄ Horizontal Menu';
    }
    showToast(isHorizontal ? 'Navigation: Horizontal layout' : 'Navigation: One below another (Vertical)', '🧭');
}

// Set Food Menu layout (one-below-another list or grid)
function setFoodView(layout) {
    const containers = document.querySelectorAll('.food-grid');
    const btnList = document.getElementById('view-btn-list');
    const btnGrid = document.getElementById('view-btn-grid');

    containers.forEach(container => {
        if (layout === 'list') {
            container.classList.add('one-below-another');
        } else {
            container.classList.remove('one-below-another');
        }
    });

    if (btnList && btnGrid) {
        if (layout === 'list') {
            btnList.classList.add('active');
            btnGrid.classList.remove('active');
        } else {
            btnGrid.classList.add('active');
            btnList.classList.remove('active');
        }
    }

    localStorage.setItem('burgerhub_food_layout', layout);
    showToast(layout === 'list' ? 'Food Menu: One below another (List view)' : 'Food Menu: 3-Column Grid view', '🍔');
}

function initMenuLayouts() {
    const savedNav = localStorage.getItem('burgerhub_nav_layout') || 'vertical';
    const navbar = document.querySelector('.navbar');
    const navBtn = document.getElementById('menu-layout-toggle-btn');

    if (navbar && savedNav === 'horizontal') {
        navbar.classList.add('horizontal-menu');
        if (navBtn) navBtn.innerHTML = '↕ Vertical Menu';
    } else if (navbar) {
        navbar.classList.remove('horizontal-menu');
        if (navBtn) navBtn.innerHTML = '⇄ Horizontal Menu';
    }

    const savedFood = localStorage.getItem('burgerhub_food_layout') || 'list';
    setFoodView(savedFood);
}


// ==========================================
// 3. TOAST NOTIFICATION SYSTEM
// ==========================================

function showToast(message, icon = '🍔') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-bubble';
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-text">${message}</span>
    `;

    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Animate out
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3200);
}


// ==========================================
// 4. USER AUTHENTICATION & SESSION STATE
// ==========================================

function getAuthUser() {
    try {
        const data = localStorage.getItem('burgerhub_user');
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
}

function setAuthUser(user) {
    if (user) {
        localStorage.setItem('burgerhub_user', JSON.stringify(user));
    } else {
        localStorage.removeItem('burgerhub_user');
    }
    updateNavbarUser();
}

function updateNavbarUser() {
    const user = getAuthUser();
    const loginLinks = document.querySelectorAll('.nav-login-btn, #nav-auth-link');
    
    loginLinks.forEach(el => {
        if (user) {
            el.innerHTML = `👤 ${user.name.split(' ')[0]}`;
            el.setAttribute('href', 'login.html');
            el.title = `Signed in as ${user.name}`;
            el.classList.add('user-logged-in');
        } else {
            el.innerHTML = `Sign In`;
            el.setAttribute('href', 'login.html');
            el.classList.remove('user-logged-in');
        }
    });

    // If on login page, toggle login forms vs profile dashboard
    renderLoginPageState();
}

function handleLoginSubmit(e) {
    if (e) e.preventDefault();
    const emailInput = document.getElementById('login-email');
    const passInput = document.getElementById('login-password');

    if (!emailInput || !emailInput.value.trim()) {
        showToast('Please enter your email address', '⚠️');
        return;
    }

    const email = emailInput.value.trim();
    const mockUser = {
        name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Burger Lover",
        email: email,
        tier: "Gold VIP Member",
        points: 480,
        memberSince: "March 2026",
        phone: "+91 98765 43210"
    };

    setAuthUser(mockUser);
    showToast(`Welcome back, ${mockUser.name}! 🍔`, '✨');
    renderLoginPageState();
}

function handleRegisterSubmit(e) {
    if (e) e.preventDefault();
    const nameInput = document.getElementById('reg-name');
    const emailInput = document.getElementById('reg-email');
    const phoneInput = document.getElementById('reg-phone');
    const passInput = document.getElementById('reg-password');
    const confirmInput = document.getElementById('reg-confirm');

    if (!nameInput || !nameInput.value.trim()) {
        showToast('Please enter your name', '⚠️');
        return;
    }

    if (passInput && confirmInput && passInput.value !== confirmInput.value) {
        showToast('Passwords do not match!', '❌');
        return;
    }

    const newUser = {
        name: nameInput.value.trim(),
        email: emailInput ? emailInput.value.trim() : 'guest@burgerhub.com',
        phone: phoneInput ? phoneInput.value.trim() : '+91 98765 43210',
        tier: "Silver Newbie (100 Bonus HubPoints)",
        points: 100,
        memberSince: "Just Now"
    };

    setAuthUser(newUser);
    showToast(`Account created! Welcome to BurgerHub VIP, ${newUser.name}! 🎉`, '🍔');
    renderLoginPageState();
}

function fillDemoLogin() {
    const email = document.getElementById('login-email');
    const pass = document.getElementById('login-password');
    if (email) email.value = "alex.foodie@gmail.com";
    if (pass) pass.value = "BurgerHub2026!";
    showToast("Filled demo login credentials! Click Sign In.", "🔑");
}

function logoutUser() {
    setAuthUser(null);
    showToast("You have been signed out.", "👋");
    renderLoginPageState();
}

function renderLoginPageState() {
    const user = getAuthUser();
    const authWrapper = document.getElementById('auth-forms-wrapper');
    const dashboardWrapper = document.getElementById('user-dashboard-wrapper');
    const profileName = document.getElementById('dashboard-user-name');
    const profileEmail = document.getElementById('dashboard-user-email');
    const profilePoints = document.getElementById('dashboard-user-points');
    const profileTier = document.getElementById('dashboard-user-tier');

    if (!authWrapper || !dashboardWrapper) return;

    if (user) {
        authWrapper.style.display = 'none';
        dashboardWrapper.style.display = 'block';

        if (profileName) profileName.textContent = user.name;
        if (profileEmail) profileEmail.textContent = user.email;
        if (profilePoints) profilePoints.textContent = user.points + ' HubPoints';
        if (profileTier) profileTier.textContent = user.tier;
    } else {
        authWrapper.style.display = 'block';
        dashboardWrapper.style.display = 'none';
    }
}

function switchAuthTab(tabName) {
    const loginTabBtn = document.getElementById('tab-btn-login');
    const regTabBtn = document.getElementById('tab-btn-register');
    const loginForm = document.getElementById('form-login');
    const regForm = document.getElementById('form-register');

    if (!loginTabBtn || !regTabBtn || !loginForm || !regForm) return;

    if (tabName === 'login') {
        loginTabBtn.classList.add('active');
        regTabBtn.classList.remove('active');
        loginForm.style.display = 'flex';
        regForm.style.display = 'none';
    } else {
        regTabBtn.classList.add('active');
        loginTabBtn.classList.remove('active');
        regForm.style.display = 'flex';
        loginForm.style.display = 'none';
    }
}

function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
        input.type = 'text';
        btn.textContent = '🙈';
    } else {
        input.type = 'password';
        btn.textContent = '👁️';
    }
}

function openForgotModal() {
    const modal = document.getElementById('forgot-password-modal');
    if (modal) modal.classList.add('active');
}

function closeForgotModal() {
    const modal = document.getElementById('forgot-password-modal');
    if (modal) modal.classList.remove('active');
}

function handleForgotSubmit(e) {
    if (e) e.preventDefault();
    const email = document.getElementById('forgot-email')?.value;
    closeForgotModal();
    showToast(`Password reset link sent to ${email || 'your email'}! 📩`, '🔑');
}


// ==========================================
// 5. MENU PAGE FILTERING & SEARCH
// ==========================================

let activeCategory = 'all';

function filterMenuCategory(cat, btn) {
    activeCategory = cat;

    // Update active button state
    const buttons = document.querySelectorAll('.category-filter-btn');
    buttons.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    applyMenuFilters();
}

function handleMenuSearch() {
    applyMenuFilters();
}

function applyMenuFilters() {
    const searchInput = document.getElementById('menu-search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const cards = document.querySelectorAll('.menu-item-card');
    const noResults = document.getElementById('menu-no-results');
    let visibleCount = 0;

    cards.forEach(card => {
        const title = card.getAttribute('data-name')?.toLowerCase() || '';
        const category = card.getAttribute('data-category')?.toLowerCase() || '';
        const desc = card.getAttribute('data-desc')?.toLowerCase() || '';

        const matchesCat = (activeCategory === 'all' || category === activeCategory);
        const matchesQuery = query === '' || title.includes(query) || desc.includes(query);

        if (matchesCat && matchesQuery) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}


// ==========================================
// 6. CONTACT PAGE FAQ ACCORDION & LOCATION TABS
// ==========================================

function toggleFaq(btn) {
    const item = btn.parentElement;
    const allItems = document.querySelectorAll('.faq-item');
    
    allItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
    });

    item.classList.toggle('active');
}

function switchLocationTab(outletId, btn) {
    const buttons = document.querySelectorAll('.outlet-tab-btn');
    buttons.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const cards = document.querySelectorAll('.outlet-info-card');
    cards.forEach(card => {
        if (card.id === `outlet-${outletId}`) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function handleContactSubmit(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('contact-name')?.value || 'Guest';
    const form = document.getElementById('contact-page-form');
    if (form) form.reset();
    showToast(`Thank you, ${name}! Your message has been received. Our team will contact you soon.`, '💌');
}


// ==========================================
// 7. INITIALIZATION ON DOM READY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateNavbarUser();
    initMenuLayouts();

    // Close drawers on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeMenu();
            closeForgotModal();
            closeOrderModal();
        }
    });

    // Close drawers on backdrop click
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }

    const mobileOverlay = document.getElementById('mobile-drawer-overlay');
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMenu);
    }

    // Attach search input listener if present
    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleMenuSearch);
    }
});
