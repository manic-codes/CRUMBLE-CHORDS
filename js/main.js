/**
 * ============================================================================
 * CRUMBLE CHORDS — CORE JAVASCRIPT
 * Simple, explainable, and framework-free logic
 * ============================================================================
 *
 * NOTE FOR STUDENTS & TEACHERS:
 * This script manages client-side interactions:
 * - Mobile hamburger drawer toggle
 * - Rendering recipe card HTML templates from the recipe data
 * - Filtering by category and live keyword searching
 * - Season switching on the "Choose Your Season" page
 */

// ============================================================================
// 1. REUSABLE RECIPE CARD HTML GENERATOR
// ============================================================================
/**
 * Creates clean HTML for a single bakery recipe card.
 * Used on Home, Recipes, and Seasons pages.
 * No emojis; uses classic editorial tags and metadata.
 */
function createRecipeCardHTML(recipe) {
  // Use first season tag for card display
  const primarySeason = Array.isArray(recipe.season) ? recipe.season[0] : recipe.season;

  return `
    <article class="recipe-card" data-category="${recipe.category.toLowerCase()}" data-id="${recipe.id}">
      <a href="recipe-details.html?id=${recipe.id}" class="card-image-link" aria-label="Discover recipe for ${recipe.title}">
        <div class="card-image-wrapper">
          <img 
            src="${recipe.image}" 
            alt="${recipe.title}" 
            class="card-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='images/placeholders/recipe-placeholder.svg';"
          >
          <span class="card-badge">${recipe.category}</span>
        </div>
      </a>
      <div class="card-body">
        <div class="card-meta-top">
          <span class="card-season">${primarySeason}</span>
          <span class="card-divider">✦</span>
          <span class="card-time">Bake: ${recipe.bakeTime}</span>
        </div>
        <h3 class="card-title">
          <a href="recipe-details.html?id=${recipe.id}">${recipe.title}</a>
        </h3>
        <p class="card-summary">${recipe.summary}</p>
        <div class="card-footer">
          <span class="card-servings">${recipe.servings}</span>
          <a href="recipe-details.html?id=${recipe.id}" class="card-read-link">
            Discover Recipe <span class="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

// ============================================================================
// 2. RECIPES PAGE LOGIC (Search & Category Filtering)
// ============================================================================
function initRecipesPage() {
  const recipeGrid = document.getElementById("allRecipesGrid");
  const filterButtons = document.querySelectorAll(".category-filter-btn");
  const searchInput = document.getElementById("recipeSearchInput");
  const resultCount = document.getElementById("recipesResultCount");

  if (!recipeGrid || typeof BAKERY_RECIPES === "undefined") return;

  // Check URL params for initial category (e.g. recipes.html?category=Cakes)
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get("category") || "all";
  let searchQuery = "";

  function renderFilteredRecipes() {
    let filtered = BAKERY_RECIPES;

    // 1. Filter by category
    if (activeCategory.toLowerCase() !== "all") {
      filtered = filtered.filter(recipe => 
        recipe.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // 2. Filter by search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(recipe => {
        const inTitle = recipe.title.toLowerCase().includes(q);
        const inSummary = recipe.summary.toLowerCase().includes(q);
        const inCategory = recipe.category.toLowerCase().includes(q);
        const inIngredients = recipe.ingredients.some(ing => ing.toLowerCase().includes(q));
        return inTitle || inSummary || inCategory || inIngredients;
      });
    }

    // Update result count
    if (resultCount) {
      resultCount.textContent = `${filtered.length} recipe${filtered.length === 1 ? "" : "s"} found`;
    }

    // Render cards
    if (filtered.length === 0) {
      recipeGrid.innerHTML = `
        <div class="empty-state">
          <p class="empty-title">No bakery recipes found</p>
          <p class="empty-desc">Try clearing your search terms or selecting another category.</p>
        </div>
      `;
    } else {
      recipeGrid.innerHTML = filtered.map(recipe => createRecipeCardHTML(recipe)).join("");
    }
  }

  // Filter button click handler
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category || "all";
      renderFilteredRecipes();
    });

    // Set initial active state from URL param
    if (btn.dataset.category && btn.dataset.category.toLowerCase() === activeCategory.toLowerCase()) {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderFilteredRecipes();
    });
  }

  // Initial render
  renderFilteredRecipes();
}

// ============================================================================
// 3. SEASONS PAGE LOGIC ("Choose Your Season — Find Your Perfect Recipe")
// ============================================================================
const SEASON_DETAILS = {
  spring: {
    title: "Spring Bakery Collection",
    tagline: "Bright citrus, delicate floral infusions, and tender vanilla sponges.",
    notes: "Spring invites fresh tart lemon drizzles, delicate elderflower, wild vanilla pods, and sweet berries awakening after winter's frost.",
    image: "images/seasons/spring.svg"
  },
  summer: {
    title: "Summer Harvest Bakery Collection",
    tagline: "Sun-ripened garden berries, stone fruits, and crisp, buttery tart shells.",
    notes: "Summer celebrations center around fresh strawberry sablés, sweet blueberry crumbles, and crisp pastries made with light golden butter.",
    image: "images/seasons/summer.svg"
  },
  autumn: {
    title: "Autumn Spice Bakery Collection",
    tagline: "Warming Saigon cinnamon, orchard apples, and roasted brown butter loaves.",
    notes: "As temperatures cool, the oven warms with flaky double-crust apple pies, spiced caramelized banana loaves, and dark brown sugar glazes.",
    image: "images/seasons/autumn.svg"
  },
  winter: {
    title: "Winter Fireside Bakery Collection",
    tagline: "Intense bittersweet chocolate, warming ginger, and rich cinnamon swirls.",
    notes: "Winter calls for rich molten fudge brownies, two-tier chocolate ganache cakes, aromatic gingerbread biscuits, and morning cinnamon rolls.",
    image: "images/seasons/winter.svg"
  }
};

function initSeasonsPage() {
  const seasonGrid = document.getElementById("seasonalRecipesGrid");
  const seasonTabs = document.querySelectorAll(".season-tab-btn");
  const bannerTitle = document.getElementById("seasonBannerTitle");
  const bannerTagline = document.getElementById("seasonBannerTagline");
  const bannerNotes = document.getElementById("seasonBannerNotes");
  const bannerImage = document.getElementById("seasonBannerImage");

  if (!seasonGrid || typeof BAKERY_RECIPES === "undefined") return;

  // Check URL params (e.g. seasons.html?season=autumn)
  const urlParams = new URLSearchParams(window.location.search);
  let activeSeason = urlParams.get("season") || "spring";

  function switchSeason(seasonKey) {
    activeSeason = seasonKey.toLowerCase();

    // 1. Update tab styling
    seasonTabs.forEach(tab => {
      const isCurrent = tab.dataset.season.toLowerCase() === activeSeason;
      tab.classList.toggle("active", isCurrent);
      tab.setAttribute("aria-selected", isCurrent ? "true" : "false");
    });

    // 2. Update editorial narrative banner
    const details = SEASON_DETAILS[activeSeason] || SEASON_DETAILS.spring;
    if (bannerTitle) bannerTitle.textContent = details.title;
    if (bannerTagline) bannerTagline.textContent = details.tagline;
    if (bannerNotes) bannerNotes.textContent = details.notes;
    if (bannerImage) bannerImage.src = details.image;

    // 3. Filter matching recipes
    const matchingRecipes = getRecipesBySeason(activeSeason);

    if (matchingRecipes.length === 0) {
      seasonGrid.innerHTML = `
        <div class="empty-state">
          <p class="empty-title">No recipes found for this season</p>
          <p class="empty-desc">Check back soon as we rotate our seasonal bakery calendar.</p>
        </div>
      `;
    } else {
      seasonGrid.innerHTML = matchingRecipes.map(recipe => createRecipeCardHTML(recipe)).join("");
    }
  }

  // Bind tab clicks
  seasonTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const seasonKey = tab.dataset.season;
      if (seasonKey) switchSeason(seasonKey);
    });
  });

  // Initial load
  switchSeason(activeSeason);
}

// ============================================================================
// 4. HOME PAGE LOGIC (Featured & Seasonal Teasers)
// ============================================================================
function initHomePage() {
  const featuredGrid = document.getElementById("homeFeaturedGrid");
  const seasonalPreviewGrid = document.getElementById("homeSeasonalPreviewGrid");

  if (typeof BAKERY_RECIPES === "undefined") return;

  // Render 3 top featured bakes on home
  if (featuredGrid) {
    const featuredList = [
      BAKERY_RECIPES.find(r => r.id === "classic-chocolate-cake"),
      BAKERY_RECIPES.find(r => r.id === "chocolate-chip-cookies"),
      BAKERY_RECIPES.find(r => r.id === "cinnamon-rolls")
    ].filter(Boolean);

    featuredGrid.innerHTML = featuredList.map(recipe => createRecipeCardHTML(recipe)).join("");
  }

  // Render 3 seasonal preview bakes
  if (seasonalPreviewGrid) {
    const seasonalList = [
      BAKERY_RECIPES.find(r => r.id === "apple-pie"),
      BAKERY_RECIPES.find(r => r.id === "strawberry-tart"),
      BAKERY_RECIPES.find(r => r.id === "blueberry-muffins")
    ].filter(Boolean);

    seasonalPreviewGrid.innerHTML = seasonalList.map(recipe => createRecipeCardHTML(recipe)).join("");
  }
}

// ============================================================================
// 5. NAVIGATION & MOBILE MENU
// ============================================================================
function initNavigation() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  const navBackdrop = document.getElementById("navBackdrop");

  if (hamburgerBtn && mobileNav) {
    const toggleMenu = () => {
      const isOpen = mobileNav.classList.toggle("open");
      hamburgerBtn.classList.toggle("active", isOpen);
      hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (navBackdrop) navBackdrop.classList.toggle("visible", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    const closeMenu = () => {
      mobileNav.classList.remove("open");
      hamburgerBtn.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      if (navBackdrop) navBackdrop.classList.remove("visible");
      document.body.style.overflow = "";
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    if (navBackdrop) navBackdrop.addEventListener("click", closeMenu);
  }

  // Highlight active nav link based on current page pathname
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ============================================================================
// 6. GLOBAL INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initHomePage();
  initRecipesPage();
  initSeasonsPage();
});
