/* ============================================================
   TOURAN TRADING COMPANY — MAIN JS
   Dil dəyişimi, məhsul renderi, mobil menyu, email forması,
   scroll animasiyası və kompakt UX davranışları.
   ============================================================ */

/* ==================== DİL MƏTN BAZASI ==================== */

const dict = {
  az: {
    home: "Ana səhifə",
    about: "Haqqımızda",
    products: "Məhsullar",
    team: "Komanda",
    contact: "Əlaqə",
    quote: "Təklif al",

    heroEyebrow: "2002-ci ildən meyvə, tərəvəz və sitrus ticarəti",
    heroTitle: "TOURAN TRADING COMPANY",
    heroText:
      "Meyvəli Logistika Mərkəzindən meyvə, tərəvəz və sitrus məhsullarının topdan alış-satışı üçün peşəkar və etibarlı tərəfdaş.",
    ctaProducts: "Məhsullara bax",
    ctaSell: "Məhsul satmaq istəyirəm",

    since: "2002-ci ildən fəaliyyət",
    created: "TOURAN 2023-də yaradılıb",
    domain: "WWW.TOURANTC.COM",
    center: "Meyvəli Logistika Mərkəzi",

    productsTitle: "Satdığımız məhsullar",
    productsText:
      "Canlı, təzə və topdan ticarət üçün uyğun meyvə-tərəvəz çeşidləri.",
    fruits: "Meyvələr",
    vegetables: "Tərəvəzlər",
    all: "Hamısı",
    importExport: "Alış / Satış",

    whyTitle: "Niyə TOURAN?",
    whyText:
      "Təcrübə, logistika yerləşməsi və sürətli əlaqə — B2B ticarət üçün lazım olan əsas güvən faktorları.",
    f1: "2002-ci ildən təcrübə",
    f1t: "Meyvə, tərəvəz və sitrus sahəsində uzunmüddətli bazar təcrübəsi.",
    f2: "Meyvəli Logistika Mərkəzi",
    f2t: "Bakı, Qaradağ rayonu üzrə strateji topdan ticarət yerləşməsi.",
    f3: "Alış və satış əlaqələri",
    f3t:
      "Məhsul almaq və məhsul satmaq istəyən tərəfdaşlar üçün birbaşa əlaqə kanalları.",

    cert: "Etibar və təhlükəsizlik",
    certText:
      "Sayt TOURANTC.COM domenində SSL təhlükəsizlik konfiqurasiyası ilə işləməyə hazır qurulub.",

    teamTitle: "Komandamız",
    teamText:
      "Ad və soyadlar müştərinin verdiyi formada saxlanılıb, vəzifələr AZ/EN üzrə dəyişir.",
    ceoRole: "Baş İcraçı Direktor (CEO)",
    intlRole: "Beynəlxalq Əməliyyatlar Üzrə Nümayəndə",
    domRole: "Daxili Əməliyyatlar Üzrə Nümayəndə",

    formTitle: "Təklif Al / Bizə Yaz",
    formText:
      "Formadan göndərilən müraciət şirkət emailinə hazırlanmış mesaj kimi açılır: tourantradingcompany@gmail.com",
    name: "Adınız",
    email: "Email",
    phone: "Telefon",
    interest: "Müraciət növü",
    buy: "Məhsul almaq istəyirəm",
    sell: "Məhsul satmaq istəyirəm",
    message: "Mesajınız",
    send: "Email ilə göndər",

    footerText:
      "TOURAN TRADING COMPANY — meyvə, tərəvəz və sitrus məhsulları üzrə topdan alış-satış və logistika yönümlü korporativ şirkət.",
    address:
      "Azərbaycan, Bakı şəhəri, Qaradağ rayonu, Meyvəli Logistika Mərkəzi",
    rights: "Bütün hüquqlar qorunur.",

    historyTitle: "Şirkət tarixi",
    historyText:
      "2002-ci ildən kənd təsərrüfatı və logistika sahəsində fəaliyyət göstəririk. Bu təcrübəyə əsaslanaraq TOURAN şirkəti 2023-cü ildə yaradılıb.",
    structure: "GitHub strukturu və şəkil adları",
  },

  en: {
    home: "Home",
    about: "About",
    products: "Products",
    team: "Team",
    contact: "Contact",
    quote: "Get quote",

    heroEyebrow: "Fruit, vegetable and citrus trade since 2002",
    heroTitle: "TOURAN TRADING COMPANY",
    heroText:
      "A reliable B2B partner for wholesale buying and selling of fruits, vegetables and citrus products from Meyveli Logistics Center.",
    ctaProducts: "View products",
    ctaSell: "I want to sell products",

    since: "Active since 2002",
    created: "TOURAN founded in 2023",
    domain: "WWW.TOURANTC.COM",
    center: "Meyveli Logistics Center",

    productsTitle: "Our Products",
    productsText:
      "Fresh wholesale fruit and vegetable categories for professional trade.",
    fruits: "Fruits",
    vegetables: "Vegetables",
    all: "All",
    importExport: "Buy / Sell",

    whyTitle: "Why TOURAN?",
    whyText:
      "Experience, logistics location and fast contact channels — the key trust factors for B2B trade.",
    f1: "Experience since 2002",
    f1t: "Long-term market experience in fruits, vegetables and citrus products.",
    f2: "Meyveli Logistics Center",
    f2t: "Strategic wholesale trade location in Garadagh district, Baku.",
    f3: "Buying and selling channels",
    f3t:
      "Direct contact channels for partners who want to buy or sell products.",

    cert: "Trust and security",
    certText:
      "The website is ready for TOURANTC.COM domain with SSL security configuration.",

    teamTitle: "Our Team",
    teamText:
      "Names stay exactly as provided by the client; roles change by AZ/EN language.",
    ceoRole: "Chief Executive Officer (CEO)",
    intlRole: "International Operations Representative",
    domRole: "Domestic Operations Representative",

    formTitle: "Get Quote / Write to Us",
    formText:
      "The form opens a prepared email addressed to: tourantradingcompany@gmail.com",
    name: "Your name",
    email: "Email",
    phone: "Phone",
    interest: "Inquiry type",
    buy: "I want to buy products",
    sell: "I want to sell products",
    message: "Your message",
    send: "Send by email",

    footerText:
      "TOURAN TRADING COMPANY — a corporate wholesale buying, selling and logistics-oriented company for fruit, vegetable and citrus products.",
    address: "Meyveli Logistics Center, Garadagh district, Baku, Azerbaijan",
    rights: "All rights reserved.",

    historyTitle: "Company history",
    historyText:
      "We have been operating in agriculture and logistics since 2002. Based on this experience, TOURAN company was founded in 2023.",
    structure: "GitHub structure and image names",
  },
};

/* ==================== MƏHSUL MƏLUMATLARI ==================== */

const productData = [
  { slug: "banana", az: "Banan", en: "Banana", type: "fruit" },
  { slug: "pineapple", az: "Ananas", en: "Pineapple", type: "fruit" },
  { slug: "kiwi", az: "Kivi", en: "Kiwi", type: "fruit" },
  { slug: "grapefruit", az: "Qreyfrut", en: "Grapefruit", type: "fruit" },
  { slug: "lemon", az: "Limon", en: "Lemon", type: "fruit" },
  { slug: "orange", az: "Portağal", en: "Orange", type: "fruit" },
  { slug: "mandarin", az: "Mandarin", en: "Mandarin", type: "fruit" },

  { slug: "carrot", az: "Yerkökü", en: "Carrot", type: "veg" },
  { slug: "beetroot", az: "Çuğundur", en: "Beetroot", type: "veg" },
  { slug: "garlic", az: "Sarımsaq", en: "Garlic", type: "veg" },
  { slug: "iceberg", az: "Kahı aysberq", en: "Iceberg Lettuce", type: "veg" },
  { slug: "pepper", az: "Bibər", en: "Bell Pepper", type: "veg" },
  { slug: "zucchini", az: "Kabaçki", en: "Zucchini", type: "veg" },
  { slug: "watermelon", az: "Qarpız", en: "Watermelon", type: "veg" },
  { slug: "melon", az: "Yemiş", en: "Melon", type: "veg" },
];

/* ==================== SABİT MƏLUMATLAR ==================== */

const COMPANY_EMAIL = "tourantradingcompany@gmail.com";
const STORAGE_KEY = "tourantc_lang";

/* ==================== KÖMƏKÇİ FUNKSİYALAR ==================== */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function getLang() {
  const savedLang = localStorage.getItem(STORAGE_KEY);
  return savedLang === "en" || savedLang === "az" ? savedLang : "az";
}

function setLang(newLang) {
  if (newLang !== "az" && newLang !== "en") return;

  localStorage.setItem(STORAGE_KEY, newLang);
  applyLang();
}

function translate(key) {
  const currentLang = getLang();
  return dict[currentLang]?.[key] || dict.az[key] || key;
}

function currentProductName(product) {
  return getLang() === "az" ? product.az : product.en;
}

function currentProductType(product) {
  return product.type === "fruit" ? translate("fruits") : translate("vegetables");
}

/* ==================== DİL TƏTBİQİ ==================== */

function applyLang() {
  const currentLang = getLang();

  document.documentElement.lang = currentLang;

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translate(key);
  });

  $$("[data-placeholder]").forEach((element) => {
    const key = element.dataset.placeholder;
    element.placeholder = translate(key);
  });

  $$("[data-i18n-value]").forEach((element) => {
    const key = element.dataset.i18nValue;
    element.value = translate(key);
  });

  $$(".lang button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });

  renderProducts(getActiveProductFilter());
}

/* ==================== MƏHSUL RENDERİ ==================== */

function getActiveProductFilter() {
  return $(".tab.active")?.dataset.filter || "all";
}

function renderProducts(filter = "all") {
  const grid = $("#productsGrid");
  if (!grid) return;

  const selectedProducts = productData.filter((product) => {
    return filter === "all" || product.type === filter;
  });

  grid.innerHTML = selectedProducts
    .map((product) => {
      const name = currentProductName(product);
      const type = currentProductType(product);

      return `
        <article class="product-card reveal">
          <span class="badge">${translate("importExport")}</span>

          <div class="product-img">
            <img
              loading="lazy"
              src="jpg/products/${product.slug}.png"
              alt="${name}"
              onerror="this.src='jpg/products/placeholder.png'"
            >
          </div>

          <h3>${name}</h3>
          <p>${type}</p>
        </article>
      `;
    })
    .join("");

  observeRevealItems();
}

/* ==================== MƏHSUL TABLARI ==================== */

function setupProductTabs() {
  $$(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".tab").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      renderProducts(button.dataset.filter || "all");
    });
  });
}

/* ==================== EMAIL FORMASI ==================== */

function setupQuoteForm() {
  const form = $("#quoteForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const interest = String(formData.get("interest") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`TOURANTC - ${interest || "Inquiry"}`);

    const body = encodeURIComponent(
      [
        "TOURAN TRADING COMPANY — Website Inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Type: ${interest}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  });
}

/* ==================== MOBİL MENYU ==================== */

function setupMobileMenu() {
  const panel = $(".mobile-panel");
  const openButton = $(".hamb");
  const closeButton = $(".mobile-close");

  if (!panel || !openButton) return;

  function openMenu() {
    panel.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    panel.classList.remove("open");
    document.body.style.overflow = "";
  }

  openButton.addEventListener("click", openMenu);
  closeButton?.addEventListener("click", closeMenu);

  $$(".mobile-panel a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

/* ==================== AKTİV MENYU LINKİ ==================== */

function setupActiveMenuLinks() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  $$(".menu a, .mobile-panel a").forEach((link) => {
    const href = link.getAttribute("href") || "";

    const isHome =
      currentPage === "index.html" &&
      (href === "index.html" || href === "./index.html" || href === "#");

    const isSamePage = href.includes(currentPage) && currentPage !== "";

    if (isHome || isSamePage) {
      link.classList.add("active");
    }
  });
}

/* ==================== SMOOTH SCROLL ==================== */

function setupSmoothAnchors() {
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = $(targetId);
      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

/* ==================== SCROLL REVEAL ==================== */

let revealObserver = null;

function observeRevealItems() {
  const items = $$(".reveal:not(.in)");

  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("in"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08 }
    );
  }

  items.forEach((item) => revealObserver.observe(item));
}

/* ==================== DİL DÜYMƏLƏRİ ==================== */

function setupLanguageButtons() {
  $$(".lang button").forEach((button) => {
    button.addEventListener("click", () => {
      setLang(button.dataset.lang);
    });
  });
}

/* ==================== INIT ==================== */

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageButtons();
  setupProductTabs();
  setupQuoteForm();
  setupMobileMenu();
  setupActiveMenuLinks();
  setupSmoothAnchors();

  applyLang();
  observeRevealItems();
});
