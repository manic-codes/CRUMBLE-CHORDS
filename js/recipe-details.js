/**
 * ============================================================================
 * CRUMBLE CHORDS — RECIPE DETAIL & COMMENTS CONTROLLER
 * Handles individual recipe presentation and local interactive comments
 * ============================================================================
 *
 * NOTE FOR STUDENTS & TEACHERS:
 * This script runs specifically on 'recipe-details.html'.
 * 1. It extracts the '?id=recipe-id' parameter from the URL.
 * 2. It queries BAKERY_RECIPES from 'recipes-data.js'.
 * 3. It dynamically populates the page with ingredients, instructions, and tips.
 * 4. It provides an interactive comments section saved in 'localStorage'
 *    keyed by recipe ID so comments persist across page refreshes.
 *    In a full-stack project, the 'postComment' function would make a fetch()
 *    POST request to a backend API (e.g. Node.js/Express, Django, Flask, or Supabase).
 */

function initRecipeDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("id") || "classic-chocolate-cake";

  // Check if BAKERY_RECIPES is loaded
  if (typeof BAKERY_RECIPES === "undefined") {
    console.error("Bakery recipe database not found.");
    return;
  }

  const recipe = getRecipeById(recipeId);

  // Fallback if recipe ID is invalid or missing
  if (!recipe) {
    document.getElementById("recipeDetailContainer").innerHTML = `
      <div class="empty-state" style="padding: 80px 20px;">
        <h2 class="empty-title">Recipe Not Found</h2>
        <p class="empty-desc">We could not find the bakery recipe you requested.</p>
        <a href="recipes.html" class="btn btn-primary" style="margin-top: 20px;">Return to Bakery Recipes</a>
      </div>
    `;
    return;
  }

  // Update Page Title and SEO Meta
  document.title = `${recipe.title} — Crumble Chords Bakery`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = recipe.summary;

  // Populate Header Breadcrumbs
  const breadcrumbTitle = document.getElementById("breadcrumbRecipeTitle");
  if (breadcrumbTitle) breadcrumbTitle.textContent = recipe.title;

  // Populate Main Details
  const titleEl = document.getElementById("recipeTitle");
  if (titleEl) titleEl.textContent = recipe.title;

  const categoryBadge = document.getElementById("recipeCategoryBadge");
  if (categoryBadge) {
    categoryBadge.textContent = recipe.category;
    categoryBadge.href = `recipes.html?category=${encodeURIComponent(recipe.category)}`;
  }

  const seasonBadge = document.getElementById("recipeSeasonBadge");
  if (seasonBadge) {
    const seasonsText = Array.isArray(recipe.season) ? recipe.season.join(", ") : recipe.season;
    seasonBadge.textContent = seasonsText;
  }

  const summaryEl = document.getElementById("recipeSummary");
  if (summaryEl) summaryEl.textContent = recipe.summary;

  const descEl = document.getElementById("recipeDescription");
  if (descEl) descEl.textContent = recipe.description;

  const imageEl = document.getElementById("recipeImage");
  if (imageEl) {
    imageEl.src = recipe.image;
    imageEl.alt = recipe.title;
    imageEl.onerror = () => { imageEl.src = "images/placeholders/recipe-placeholder.svg"; };
  }

  // Populate Timings & Servings Metadata
  const prepEl = document.getElementById("recipePrepTime");
  if (prepEl) prepEl.textContent = recipe.prepTime;

  const bakeEl = document.getElementById("recipeBakeTime");
  if (bakeEl) bakeEl.textContent = recipe.bakeTime;

  const servingsEl = document.getElementById("recipeServings");
  if (servingsEl) servingsEl.textContent = recipe.servings;

  const difficultyEl = document.getElementById("recipeDifficulty");
  if (difficultyEl) difficultyEl.textContent = recipe.difficulty || "Traditional";

  // Populate Ingredients List
  const ingredientsList = document.getElementById("recipeIngredientsList");
  if (ingredientsList && recipe.ingredients) {
    ingredientsList.innerHTML = recipe.ingredients.map((item, index) => `
      <li class="ingredient-item">
        <label class="ingredient-label">
          <input type="checkbox" class="ingredient-checkbox" id="ing-${index}">
          <span class="ingredient-text">${item}</span>
        </label>
      </li>
    `).join("");
  }

  // Populate Step-by-Step Instructions
  const instructionsList = document.getElementById("recipeInstructionsList");
  if (instructionsList && recipe.instructions) {
    instructionsList.innerHTML = recipe.instructions.map((step, index) => `
      <li class="instruction-step">
        <div class="step-indicator">
          <span class="step-num">${index + 1}</span>
        </div>
        <div class="step-content">
          <p class="step-text">${step}</p>
        </div>
      </li>
    `).join("");
  }

  // Populate Baker's Tips
  const tipsEl = document.getElementById("recipeTipsText");
  if (tipsEl && recipe.tips) {
    tipsEl.textContent = recipe.tips;
  }

  // Initialize Comments for this recipe
  initComments(recipe.id);
}

// ============================================================================
// COMMENTS SYSTEM (Saved to LocalStorage per Recipe)
// ============================================================================
function initComments(recipeId) {
  const commentsList = document.getElementById("commentsList");
  const commentForm = document.getElementById("commentForm");
  const commentNameInput = document.getElementById("commentName");
  const commentTextInput = document.getElementById("commentText");
  const commentCountEl = document.getElementById("commentCount");

  const storageKey = `crumble_chords_comments_${recipeId}`;

  // Default seed comments for realistic initial presentation
  const defaultComments = [
    {
      name: "Eleanor Vance",
      date: "September 14, 2026",
      text: "Baked this over the weekend and the crumb was magnificent. The tip about letting the ganache sit before whisking made all the difference."
    },
    {
      name: "Julian Sterling",
      date: "September 16, 2026",
      text: "A truly reliable bakery recipe. Clear instructions that even a novice baker can follow with ease."
    }
  ];

  // Retrieve comments from localStorage, or load defaults if empty
  function loadComments() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not read from localStorage:", e);
    }
    return defaultComments;
  }

  function saveComments(comments) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(comments));
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  }

  function renderComments() {
    const comments = loadComments();

    if (commentCountEl) {
      commentCountEl.textContent = `(${comments.length})`;
    }

    if (comments.length === 0) {
      commentsList.innerHTML = `
        <div class="empty-comments">
          <p>No comments yet. Be the first to share your baking results!</p>
        </div>
      `;
      return;
    }

    commentsList.innerHTML = comments.map(c => `
      <div class="comment-card">
        <div class="comment-header">
          <strong class="comment-author">${escapeHTML(c.name)}</strong>
          <span class="comment-date">${escapeHTML(c.date)}</span>
        </div>
        <p class="comment-body">${escapeHTML(c.text)}</p>
      </div>
    `).join("");
  }

  // Handle new comment submission
  if (commentForm) {
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = commentNameInput.value.trim();
      const text = commentTextInput.value.trim();

      if (!name || !text) {
        alert("Please enter both your name and comment.");
        return;
      }

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date().toLocaleDateString("en-US", options);

      const newComment = {
        name: name,
        date: formattedDate,
        text: text
      };

      const comments = loadComments();
      comments.unshift(newComment); // Add new comment to top
      saveComments(comments);

      // Reset form and re-render
      commentNameInput.value = "";
      commentTextInput.value = "";
      renderComments();

      // Show confirmation message
      const successNotice = document.getElementById("commentSuccessNotice");
      if (successNotice) {
        successNotice.style.display = "block";
        setTimeout(() => { successNotice.style.display = "none"; }, 4000);
      }
    });
  }

  // Initial render of comments
  renderComments();
}

// Simple HTML sanitizer to prevent XSS in comment names and text
function escapeHTML(str) {
  const p = document.createElement("p");
  p.textContent = str;
  return p.innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  initRecipeDetailPage();
});
