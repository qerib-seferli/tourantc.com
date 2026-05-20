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

    heroEyebrow: "2002-ci ildən meyvə, tərəvəz və sitrus sahəsində",
    heroTitle: "TOURAN TRADING COMPANY",
    heroText:
      "Meyvəli Logistika Mərkəzində yerləşən TOURAN TRADING COMPANY meyvə, tərəvəz və sitrus məhsullarının topdan alış-satışı üzrə fəaliyyət göstərir.",
    ctaProducts: "Məhsullara bax",
    ctaSell: "Bizə müraciət et",

    since: "2002-ci ildən fəaliyyət",
    created: "TOURAN 2023-cü ildə yaradılıb",
    domain: "WWW.TOURANTC.COM",
    center: "Meyvəli Logistika Mərkəzi",

    productsTitle: "Məhsullarımız",
    productsText:
      "Topdan ticarət üçün təqdim etdiyimiz əsas meyvə, tərəvəz və sitrus məhsulları.",
    fruits: "Meyvələr",
    vegetables: "Tərəvəzlər",
    all: "Hamısı",
    importExport: "Topdan satış",

    whyTitle: "Niyə TOURAN?",
    whyText:
      "Uzun illərin təcrübəsi, əlverişli logistika mövqeyi və birbaşa əlaqə imkanı.",
    f1: "Təcrübə",
    f1t: "2002-ci ildən meyvə, tərəvəz və sitrus məhsullarının topdan və pərakəndə satışı sahəsində fəaliyyət göstəririk. Şirkətimiz keyfiyyətli məhsulları yerli və xarici istehsalçılardan seçərək müştərilərimizə ən təzə və etibarlı şəkildə təqdim etməyə xüsusi önəm verir.",
    f2: "Logistika mövqeyi",
    f2t: "Şirkət Bakı şəhəri, Qaradağ rayonu, Meyvəli Logistika Mərkəzində yerləşir.",
    f3: "Alış və satış",
    f3t:
      "Məhsul almaq və ya məhsul təklif etmək istəyən tərəfdaşlar üçün birbaşa əlaqə imkanı.",

    cert: "Etibar və təhlükəsizlik",
    certText:
      "TOURANTC.COM domeni üçün təhlükəsiz bağlantı və SSL konfiqurasiyası nəzərdə tutulub.",

    teamTitle: "Komandamız",
    teamText:
      "TOURAN TRADING COMPANY-nin gündəlik fəaliyyəti təcrübəli komanda tərəfindən idarə olunur.",
    ceoRole: "Baş İcraçı Direktor (CEO)",
    intlRole: "Beynəlxalq Əməliyyatlar Üzrə Nümayəndə",
    domRole: "Daxili Əməliyyatlar Üzrə Nümayəndə",

    formTitle: "Təklif Al / Bizə Yaz",
    formText:
      "Müraciətinizi göndərin, komanda üzvümüz sizinlə əlaqə saxlasın.",
    name: "Adınız",
    email: "Email",
    phone: "Telefon",
    interest: "Müraciət növü",
    buy: "Məhsul almaq istəyirəm",
    sell: "Məhsul təklif etmək istəyirəm",
    message: "Mesajınız",
    send: "Email ilə göndər",

    footerText:
      "TOURAN TRADING COMPANY — meyvə, tərəvəz və sitrus məhsullarının topdan alış-satışı üzrə fəaliyyət göstərən ticarət şirkəti.",
    address:
      "Azərbaycan, Bakı şəhəri, Qaradağ rayonu, Meyvəli Logistika Mərkəzi",
    rights: "Bütün hüquqlar qorunur.",

    historyTitle: "Şirkət tarixi",
    historyText:
      "Fəaliyyətimiz 2002-ci ildən başlayır. Bu təcrübə əsasında TOURAN TRADING COMPANY 2023-cü ildə yaradılıb.",
    structure: "Şəkil faylları və istifadə qaydası",
  },

  en: {
    home: "Home",
    about: "About",
    products: "Products",
    team: "Team",
    contact: "Contact",
    quote: "Get a Quote",

    heroEyebrow: "Fruit, vegetable and citrus trade since 2002",
    heroTitle: "TOURAN TRADING COMPANY",
    heroText:
      "Located at Meyveli Logistics Center, TOURAN TRADING COMPANY operates in wholesale fruit, vegetable and citrus trade.",
    ctaProducts: "View Products",
    ctaSell: "Contact Us",

    since: "Operating since 2002",
    created: "TOURAN was founded in 2023",
    domain: "WWW.TOURANTC.COM",
    center: "Meyveli Logistics Center",

    productsTitle: "Our Products",
    productsText:
      "Main fruit, vegetable and citrus products offered for wholesale trade.",
    fruits: "Fruits",
    vegetables: "Vegetables",
    all: "All",
    importExport: "Wholesale",

    whyTitle: "Why TOURAN?",
    whyText:
      "Years of experience, a strong logistics location and direct communication.",
    f1: "Experience",
    f1t:
      "We have been operating in the fruit, vegetable and citrus sector since 2002.",
    f2: "Logistics Location",
    f2t:
      "The company is located at Meyveli Logistics Center, Garadagh district, Baku.",
    f3: "Buying and Selling",
    f3t:
      "Direct contact opportunities for partners who want to buy products or offer supply.",

    cert: "Trust and Security",
    certText:
      "Secure connection and SSL configuration are planned for the TOURANTC.COM domain.",

    teamTitle: "Our Team",
    teamText:
      "The daily operations of TOURAN TRADING COMPANY are managed by an experienced team.",
    ceoRole: "Chief Executive Officer (CEO)",
    intlRole: "International Operations Representative",
    domRole: "Domestic Operations Representative",

    formTitle: "Get a Quote / Contact Us",
    formText:
      "Send your inquiry and a member of our team will contact you.",
    name: "Your name",
    email: "Email",
    phone: "Phone",
    interest: "Inquiry type",
    buy: "I want to buy products",
    sell: "I want to offer products",
    message: "Your message",
    send: "Send by email",

    footerText:
      "TOURAN TRADING COMPANY — a trading company operating in wholesale fruit, vegetable and citrus products.",
    address: "Meyveli Logistics Center, Garadagh district, Baku, Azerbaijan",
    rights: "All rights reserved.",

    historyTitle: "Company History",
    historyText:
      "Our activity began in 2002. Based on this experience, TOURAN TRADING COMPANY was founded in 2023.",
    structure: "Image files and usage guide",
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
