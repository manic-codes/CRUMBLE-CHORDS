/**
 * ============================================================================
 * CRUMBLE CHORDS — RECIPE DATA ARCHIVE
 * Classic Bakery Recipes Only | Separate from UI Components
 * ============================================================================
 *
 * NOTE FOR STUDENTS & TEACHERS:
 * Recipe data is stored separately here as pure JavaScript objects.
 * This architecture decouples data from presentation: new bakery recipes
 * can be added, updated, or retrieved without modifying HTML or UI code.
 * In a production system, this array could easily be replaced with an API call
 * to a backend database like MongoDB, PostgreSQL, or a Headless CMS.
 */

const BAKERY_RECIPES = [
  {
    id: "classic-chocolate-cake",
    title: "Classic Chocolate Cake",
    category: "Cakes",
    season: ["Winter", "Autumn"],
    image: "images/recipes/cakes/classic-chocolate-cake.svg",
    prepTime: "25 minutes",
    bakeTime: "35 minutes",
    servings: "8 to 10 slices",
    difficulty: "Intermediate",
    summary: "Two deep cocoa sponge tiers layered with silky dark chocolate ganache and chocolate curls.",
    description: "Our signature bakery cake balances bittersweet Dutch-processed cocoa with brown sugar and cultured buttermilk. The crumb remains tender for days, encased in a glossy ganache made with 70% bittersweet chocolate and heavy dairy cream.",
    tips: "For the silkiest ganache, pour hot cream over chopped chocolate and let it sit undisturbed for 3 minutes before gently whisking from the center outward.",
    ingredients: [
      "220g unbleached all-purpose flour",
      "75g Dutch-process cocoa powder",
      "280g golden granulated sugar",
      "1.5 tsp baking powder",
      "1.5 tsp baking soda",
      "1 tsp fine sea salt",
      "2 large organic eggs, room temperature",
      "240ml cultured buttermilk",
      "120ml vegetable oil or melted unsalted butter",
      "2 tsp Madagascar pure vanilla extract",
      "240ml freshly brewed hot coffee (enhances cocoa notes)",
      "200g 70% dark chocolate (for ganache)",
      "200ml heavy cream (for ganache)"
    ],
    instructions: [
      "Preheat the oven to 175°C (350°F). Butter two 8-inch round cake pans and line the bases with parchment paper.",
      "In a large mixing bowl, sift together flour, cocoa powder, sugar, baking powder, baking soda, and salt.",
      "In a separate bowl, whisk together eggs, buttermilk, oil, and vanilla extract until completely smooth.",
      "Gently fold the wet ingredients into the dry bowl until just combined; do not overmix.",
      "Slowly stream in the hot brewed coffee while whisking on low speed. The batter will be thin, which creates the tender crumb.",
      "Divide batter evenly between prepared pans. Bake for 32 to 35 minutes until a tester inserted into the center emerges with a few moist crumbs.",
      "Cool cakes in pans for 15 minutes, then turn out onto wire racks to cool completely.",
      "Prepare ganache: Heat heavy cream until steaming, pour over chopped chocolate, let sit for 3 minutes, then whisk smooth. Chill to spreading consistency.",
      "Assemble cake: Place first sponge layer, frost top with ganache, crown with second layer, and frost top and sides. Garnish with chocolate curls."
    ]
  },
  {
    id: "chocolate-chip-cookies",
    title: "Chocolate Chip Cookies",
    category: "Cookies",
    season: ["All Seasons", "Winter", "Summer", "Autumn", "Spring"],
    image: "images/recipes/cookies/chocolate-chip-cookies.svg",
    prepTime: "15 minutes (plus 1 hour chill)",
    bakeTime: "12 minutes",
    servings: "16 bakery cookies",
    difficulty: "Beginner",
    summary: "Thick, chewy bakery cookies with browned butter, molten chocolate pools, and flaky sea salt.",
    description: "Nothing encapsulates the bakery counter quite like a freshly baked chocolate chip cookie. Browning the butter unlocks nutty butterscotch nuances, while hand-chopped chocolate discs ensure rich molten pockets throughout every bite.",
    tips: "Chilling the dough for at least 60 minutes before baking prevents spreading and deepens the butterscotch aroma.",
    ingredients: [
      "225g unsalted butter, browned and cooled to room temp",
      "150g dark muscovado or dark brown sugar",
      "100g granulated sugar",
      "2 large eggs, room temperature",
      "1 tbsp pure vanilla bean paste",
      "280g all-purpose flour",
      "1 tsp baking soda",
      "1 tsp fine kosher salt",
      "250g semi-sweet dark chocolate baking discs or chunks",
      "Flaky Maldon sea salt, for finishing"
    ],
    instructions: [
      "Brown the butter in a saucepan over medium heat until golden brown flecks form and it smells nutty. Transfer to a bowl and cool.",
      "Beat the browned butter, brown sugar, and granulated sugar together in a stand mixer for 3 minutes until smooth.",
      "Add eggs one at a time, followed by the vanilla paste, beating well after each addition until pale and fluffy.",
      "Whisk flour, baking soda, and kosher salt in a small bowl; fold into wet ingredients until barely a trace of flour remains.",
      "Fold in chocolate discs. Cover dough with parchment and chill in the refrigerator for at least 1 hour.",
      "Preheat oven to 180°C (350°F). Line two heavy baking sheets with parchment paper.",
      "Scoop dough into 3-tablespoon rounds (about 65g each). Arrange well spaced on baking sheets.",
      "Bake for 11 to 13 minutes until edges are crisp and golden while centers remain tender and soft.",
      "Immediately sprinkle hot cookies with flaky sea salt and allow to rest on baking sheet for 5 minutes before transferring to a wire rack."
    ]
  },
  {
    id: "cinnamon-rolls",
    title: "Classic Cinnamon Rolls",
    category: "Pastries",
    season: ["Winter", "Autumn"],
    image: "images/recipes/pastries/cinnamon-rolls.svg",
    prepTime: "40 minutes (plus rising)",
    bakeTime: "25 minutes",
    servings: "12 bakery rolls",
    difficulty: "Intermediate",
    summary: "Tender pillowy brioche dough swirled with aromatic Ceylon cinnamon and creamy cheese glaze.",
    description: "A timeless cornerstone of morning baking. Our enriched sweet yeast dough is rolled with dark brown sugar, butter, and fragrant cinnamon, then topped fresh from the oven with velvety whipped cream cheese glaze.",
    tips: "Pour 60ml of warm heavy cream over the proofed rolls just before sliding them into the oven; this creates an impossibly gooey caramel base.",
    ingredients: [
      "500g strong white bread flour",
      "7g instant active dried yeast",
      "60g granulated cane sugar",
      "1 tsp sea salt",
      "240ml whole milk, warmed to 40°C",
      "80g unsalted butter, softened",
      "2 large eggs, lightly beaten",
      "100g softened butter (filling)",
      "160g dark brown sugar (filling)",
      "2.5 tbsp ground Ceylon cinnamon (filling)",
      "120g full-fat cream cheese, room temp (glaze)",
      "60g butter, softened (glaze)",
      "120g confectioners' powdered sugar (glaze)",
      "1 tsp pure vanilla extract (glaze)"
    ],
    instructions: [
      "In a mixer bowl, combine flour, yeast, sugar, and salt. Add warm milk, softened butter, and beaten eggs.",
      "Knead using the dough hook for 8 to 10 minutes until dough is silky, elastic, and pulls away from the sides.",
      "Place dough into a lightly oiled bowl, cover with a damp linen cloth, and let rise for 1 to 1.5 hours until doubled in size.",
      "Roll dough on a lightly floured surface into a 16x12-inch rectangle.",
      "Spread softened butter evenly across the dough, leaving a 1/2-inch border along the top edge.",
      "Thoroughly mix dark brown sugar and cinnamon together; sprinkle generously over the butter layer, pressing gently with palms.",
      "Roll dough tightly from the long edge into a log. Slice into 12 even rolls using unflavored dental floss or a serrated knife.",
      "Arrange rolls in a buttered 9x13-inch baking dish. Cover and proof for 40 minutes until visibly puffed.",
      "Preheat oven to 180°C (350°F). Bake for 22 to 25 minutes until golden on top.",
      "Whisk cream cheese, softened butter, powdered sugar, and vanilla until smooth. Spread over warm rolls immediately."
    ]
  },
  {
    id: "vanilla-cupcakes",
    title: "Vanilla Bean Cupcakes",
    category: "Cakes",
    season: ["Spring", "Summer"],
    image: "images/recipes/cakes/vanilla-cupcakes.svg",
    prepTime: "20 minutes",
    bakeTime: "18 minutes",
    servings: "12 cupcakes",
    difficulty: "Beginner",
    summary: "Tender golden sponge scented with natural vanilla bean caviar and whipped sweet buttercream.",
    description: "Light, velvety, and delicately scented with real vanilla bean seeds. These cupcakes use the reverse creaming method for an exceptionally fine crumb and a melt-in-the-mouth texture.",
    tips: "Ensure butter, eggs, and sour cream are all strictly at room temperature to achieve an emulsified, aerated batter.",
    ingredients: [
      "190g cake flour, sifted",
      "170g granulated sugar",
      "1.5 tsp baking powder",
      "0.5 tsp fine salt",
      "115g unsalted butter, softened and cubed",
      "2 large eggs, room temperature",
      "120ml whole milk, room temperature",
      "60ml sour cream or Greek yogurt",
      "1 whole Madagascar vanilla bean, scraped",
      "175g unsalted butter (buttercream)",
      "320g confectioners' sugar (buttercream)",
      "30ml heavy cream (buttercream)"
    ],
    instructions: [
      "Preheat oven to 175°C (350°F). Line a 12-cup muffin pan with paper liners.",
      "In the mixer bowl, combine sifted cake flour, sugar, baking powder, and salt on low speed for 30 seconds.",
      "Add cubed softened butter and half of the milk. Beat on medium speed for 2 minutes until light and fluffy.",
      "In a jug, whisk together eggs, remaining milk, sour cream, and scraped vanilla bean caviar.",
      "Add egg mixture to flour mixture in three additions, beating for 20 seconds after each addition.",
      "Divide batter evenly among liners, filling each roughly two-thirds full.",
      "Bake for 17 to 19 minutes until a wooden skewer comes out clean. Cool completely on a wire rack.",
      "Prepare frosting: Beat butter for 5 minutes until pale white. Gradually beat in powdered sugar and heavy cream until fluffy.",
      "Pipe generous swirls over cooled cupcakes using a round or French star tip."
    ]
  },
  {
    id: "blueberry-muffins",
    title: "Blueberry Crumble Muffins",
    category: "Muffins",
    season: ["Summer", "Spring"],
    image: "images/recipes/muffins/blueberry-muffins.svg",
    prepTime: "20 minutes",
    bakeTime: "22 minutes",
    servings: "12 bakery muffins",
    difficulty: "Beginner",
    summary: "Tall-domed morning muffins packed with wild blueberries and crowned with brown sugar streusel.",
    description: "Crisp golden muffin tops with a soft crumb bursting with juicy sweet blueberries. Scented with fresh lemon zest and crowned with a crisp buttery streusel crumble.",
    tips: "Toss fresh blueberries in 1 tablespoon of flour before folding into batter; this keeps the berries suspended rather than sinking to the pan base.",
    ingredients: [
      "300g all-purpose flour",
      "150g granulated sugar",
      "2 tsp baking powder",
      "0.5 tsp baking soda",
      "0.5 tsp salt",
      "Zest of 1 fresh unwaxed lemon",
      "115g unsalted butter, melted and cooled",
      "2 large eggs",
      "180ml whole buttermilk",
      "1 tsp vanilla extract",
      "250g fresh wild blueberries",
      "50g all-purpose flour (streusel)",
      "40g brown sugar (streusel)",
      "35g cold butter, cubed (streusel)"
    ],
    instructions: [
      "Preheat oven to 205°C (400°F). Line a 12-hole muffin tin with bakery tulip liners.",
      "Make streusel: Rub flour, brown sugar, and cold butter cubes together with fingertips until crumbly. Chill until needed.",
      "In a large bowl, whisk flour, sugar, baking powder, baking soda, salt, and freshly grated lemon zest.",
      "In another bowl, whisk melted butter, eggs, buttermilk, and vanilla extract until well emulsified.",
      "Toss blueberries with 1 tablespoon of flour in a small dish.",
      "Pour wet ingredients into dry ingredients; stir with a spatula until just moistened (a few flour streaks are fine). Gently fold in berries.",
      "Spoon batter into liners, heaping slightly above the rim. Scatter streusel crumble generously over each top.",
      "Bake at 205°C for 5 minutes, then reduce oven to 180°C (350°F) and bake for an additional 16 to 18 minutes until golden.",
      "Cool in the tin for 10 minutes, then transfer to a wire rack."
    ]
  },
  {
    id: "apple-pie",
    title: "Traditional Apple Pie",
    category: "Pies",
    season: ["Autumn"],
    image: "images/recipes/seasonal/apple-pie.svg",
    prepTime: "45 minutes",
    bakeTime: "50 minutes",
    servings: "8 hearty slices",
    difficulty: "Intermediate",
    summary: "Flaky double-crust pie stuffed with tender spiced Bramley and Honeycrisp apples.",
    description: "The quintessential autumn bakery showcase. Flaky, all-butter pastry cradles a fragrant mountain of tart and sweet apples tossed with cinnamon, freshly grated nutmeg, brown sugar, and a touch of bourbon vanilla.",
    tips: "Pre-cook the apple filling for 5 minutes in a pan and cool before filling the crust; this prevents a sunken top crust during baking.",
    ingredients: [
      "350g all-purpose flour (pastry)",
      "230g cold unsalted butter, cut into 1/2-inch cubes (pastry)",
      "1 tsp fine salt",
      "1 tbsp sugar",
      "90 to 120ml ice-cold water",
      "1.2kg mixed tart apples (Honeycrisp, Granny Smith, Bramley), peeled and sliced",
      "80g dark brown sugar",
      "60g granulated sugar",
      "2 tbsp cornstarch",
      "1.5 tsp ground cinnamon",
      "0.5 tsp ground nutmeg",
      "1 tbsp freshly squeezed lemon juice",
      "1 egg beaten with 1 tbsp water (egg wash)",
      "Turbinado coarse sugar, for topping"
    ],
    instructions: [
      "Make pastry: Pulse flour, salt, and sugar in a food processor. Add cold butter cubes and pulse until pea-sized crumbles form.",
      "Drizzle in ice water 1 tablespoon at a time until dough just holds together when pinched. Divide into two disks, wrap, and chill for 1 hour.",
      "Roll one dough disk on a floured surface to 12 inches. Fit into a 9-inch ceramic pie plate. Chill while preparing filling.",
      "In a large bowl, toss apple slices with brown sugar, granulated sugar, cornstarch, cinnamon, nutmeg, and lemon juice.",
      "Pile the spiced apples tightly into the chilled pie shell, mounding slightly higher in the center.",
      "Roll out second dough disk. Cut into strips for a classic woven lattice or place as a whole top crust, trimming and fluting edges with fingers.",
      "Brush crust with beaten egg wash and sprinkle generously with crunchy turbinado sugar. Cut steam vents if using solid crust.",
      "Bake at 200°C (400°F) for 20 minutes, then lower temperature to 180°C (350°F) and bake for 35 to 40 minutes until pastry is deep golden and filling bubbles.",
      "Allow pie to cool for at least 3 hours before slicing so the juices settle into a lush glaze."
    ]
  },
  {
    id: "strawberry-tart",
    title: "Fresh Strawberry Tart",
    category: "Tarts",
    season: ["Spring", "Summer"],
    image: "images/recipes/seasonal/strawberry-tart.svg",
    prepTime: "35 minutes",
    bakeTime: "20 minutes",
    servings: "8 slices",
    difficulty: "Intermediate",
    summary: "Crisp French sablé tart shell filled with crème pâtissière and glazed garden strawberries.",
    description: "A celebration of spring and summer berry harvests. A crisp, buttery sweet pastry crust holds a bed of silky vanilla bean pastry cream, crowned with ripe fresh strawberries finished with a luminous apricot glaze.",
    tips: "Brush a thin layer of melted white chocolate on the inside of the baked tart shell before adding custard to keep the crust shatteringly crisp.",
    ingredients: [
      "200g all-purpose flour",
      "100g cold unsalted butter, diced",
      "60g powdered confectioners' sugar",
      "1 large egg yolk",
      "1 tbsp cold cream or milk",
      "500ml whole milk (crème pâtissière)",
      "1 vanilla bean, split and scraped",
      "4 egg yolks (crème pâtissière)",
      "100g sugar (crème pâtissière)",
      "40g cornstarch (crème pâtissière)",
      "30g unsalted butter (crème pâtissière)",
      "450g fresh ripe strawberries, hulled and halved",
      "3 tbsp apricot jam (for glaze)"
    ],
    instructions: [
      "Make pastry: Pulse flour, powdered sugar, and cold butter until sandy. Add yolk and cold cream; pulse until dough forms. Chill for 45 minutes.",
      "Roll dough to 11 inches, transfer to a 9-inch fluted tart pan with removable bottom. Prick base with a fork and chill 20 minutes.",
      "Blind bake: Line crust with parchment and baking weights. Bake at 180°C (350°F) for 15 minutes, remove weights, and bake for 6 minutes more until golden. Cool completely.",
      "Make pastry cream: Heat milk with scraped vanilla bean to a simmer. In a bowl, whisk egg yolks, sugar, and cornstarch.",
      "Gradually temper hot milk into yolk mixture, return to saucepan, and cook over medium heat, whisking constantly until thick and boiling.",
      "Remove from heat, whisk in butter, strain through a fine sieve into a bowl, cover surface with cling film, and chill completely.",
      "Assemble: Spread chilled pastry cream evenly into cooled tart shell.",
      "Arrange strawberry halves in neat, concentric circular rings working from the outside crust inward.",
      "Warm apricot jam with 1 tsp water, strain, and gently brush over berries for a bakery-fresh gloss. Chill 30 minutes before serving."
    ]
  },
  {
    id: "fudge-brownies",
    title: "Double Fudge Brownies",
    category: "Brownies",
    season: ["All Seasons", "Winter"],
    image: "images/recipes/brownies/fudge-brownies.svg",
    prepTime: "15 minutes",
    bakeTime: "26 minutes",
    servings: "16 brownies",
    difficulty: "Beginner",
    summary: "Dense, intensely chocolatey squares with paper-thin shiny crinkle crusts and molten chocolate pockets.",
    description: "Rich, decadent, and unapologetically fudgy. Formulated with high-fat cocoa and melted 70% chocolate, whipped with whole eggs and brown sugar to produce that prized tissue-paper shiny crinkled top.",
    tips: "Whip eggs and sugar vigorously for 4 to 5 minutes until pale and doubled in volume; this is the culinary secret that creates the shiny paper-thin top crust.",
    ingredients: [
      "200g 70% dark chocolate, coarsely chopped",
      "175g unsalted butter, cubed",
      "3 large eggs, room temperature",
      "180g granulated sugar",
      "120g light brown sugar",
      "1 tbsp pure vanilla extract",
      "90g all-purpose flour",
      "35g Dutch cocoa powder",
      "0.75 tsp fine sea salt",
      "100g semi-sweet chocolate chunks (folded in)"
    ],
    instructions: [
      "Preheat oven to 175°C (350°F). Butter an 8-inch square metal baking pan and line with parchment paper leaving an overhang for easy removal.",
      "Melt dark chocolate and butter together in a heatproof bowl set over simmering water (or in microwave in 30-second bursts). Stir smooth and cool slightly.",
      "In a separate large bowl, beat eggs, granulated sugar, and brown sugar with an electric hand mixer on medium-high speed for 4 minutes until thick and pale ribbon forms.",
      "Gently fold the melted chocolate mixture and vanilla extract into the whipped egg mixture.",
      "Sift in flour, cocoa powder, and salt. Fold with a spatula until just combined; do not overmix.",
      "Fold in additional chocolate chunks.",
      "Pour batter into prepared pan, smoothing the surface evenly.",
      "Bake for 24 to 26 minutes. The edges will be set and a skewer inserted in center will come out with moist fudge crumbs (not wet batter).",
      "Cool completely in the pan at room temperature, then chill for 1 hour before lifting out by parchment and slicing into 16 clean squares."
    ]
  },
  {
    id: "banana-bread",
    title: "Caramelized Banana Bread",
    category: "Breads",
    season: ["Autumn", "Winter"],
    image: "images/recipes/breads/banana-bread.svg",
    prepTime: "20 minutes",
    bakeTime: "55 minutes",
    servings: "10 hearty slices",
    difficulty: "Beginner",
    summary: "Ultra-moist bakery loaf with caramelized ripe bananas, brown butter, and toasted walnuts.",
    description: "The definitive bakery comfort loaf. Uses deep, speckled overripe bananas mashed with melted brown butter and dark brown sugar, topped with a caramelized halved banana slice running the length of the loaf.",
    tips: "The riper and more speckled your bananas, the sweeter and more aromatic your bread will be.",
    ingredients: [
      "4 medium very ripe bananas (3 for batter, 1 halved lengthwise for top)",
      "115g unsalted butter, melted and lightly browned",
      "140g dark brown sugar",
      "2 large eggs, beaten",
      "1 tsp vanilla extract",
      "240g all-purpose flour",
      "1 tsp baking soda",
      "0.5 tsp ground cinnamon",
      "0.5 tsp sea salt",
      "80g toasted walnuts or pecans, coarsely chopped (optional)",
      "1 tbsp turbinado sugar (for topping)"
    ],
    instructions: [
      "Preheat oven to 175°C (350°F). Grease an 8.5x4.5-inch loaf pan and line with parchment paper.",
      "In a mixing bowl, mash 3 ripe bananas with a fork until mostly smooth.",
      "Stir in melted browned butter, dark brown sugar, beaten eggs, and vanilla extract until well combined.",
      "In another bowl, whisk flour, baking soda, cinnamon, and salt. Fold into wet ingredients until just combined.",
      "Gently stir in chopped toasted walnuts.",
      "Pour batter into the prepared loaf pan and smooth top.",
      "Place the halved fourth banana cut-side-up gently on top of batter. Sprinkle with turbinado sugar.",
      "Bake for 50 to 55 minutes until a tester inserted into the center emerges clean.",
      "Cool in pan for 15 minutes, then transfer to a wire rack to cool before slicing."
    ]
  },
  {
    id: "gingerbread-cookies",
    title: "Spiced Gingerbread Cookies",
    category: "Cookies",
    season: ["Winter"],
    image: "images/recipes/cookies/gingerbread-cookies.svg",
    prepTime: "25 minutes (plus chilling)",
    bakeTime: "10 minutes",
    servings: "24 cookies",
    difficulty: "Beginner",
    summary: "Heritage spiced cut-out cookies infused with blackstrap molasses, ginger, and royal icing.",
    description: "Crisp around the edges with a tender chewy center. Scented with ginger, cinnamon, ground cloves, and molasses, decorated with delicate white royal icing piping.",
    tips: "Roll the dough directly between two sheets of parchment paper before chilling; this avoids adding excess flour that can toughen the cookies.",
    ingredients: [
      "380g all-purpose flour",
      "1 tbsp ground ginger",
      "2 tsp ground cinnamon",
      "0.5 tsp ground cloves",
      "0.5 tsp ground allspice",
      "0.75 tsp baking soda",
      "0.5 tsp salt",
      "140g unsalted butter, softened",
      "120g dark brown sugar",
      "1 large egg",
      "120ml blackstrap molasses",
      "1 tsp pure vanilla extract",
      "200g powdered sugar (icing)",
      "1 large egg white or 2 tbsp meringue powder (icing)",
      "1 tbsp lemon juice or water (icing)"
    ],
    instructions: [
      "In a bowl, whisk together flour, ginger, cinnamon, cloves, allspice, baking soda, and salt.",
      "In a mixer bowl, beat softened butter and brown sugar on medium speed for 2 minutes until light.",
      "Add egg, molasses, and vanilla extract; beat until thoroughly combined.",
      "Gradually add dry ingredients on low speed until a dough forms.",
      "Divide dough in half, flatten into discs, wrap in parchment, and chill in the refrigerator for at least 2 hours.",
      "Preheat oven to 175°C (350°F). Line two baking sheets with parchment paper.",
      "Roll dough on a lightly floured surface to 1/4-inch thickness. Cut out shapes with cookie cutters.",
      "Arrange cookies 1 inch apart on baking sheets.",
      "Bake for 9 to 11 minutes until edges are firm and lightly browned.",
      "Cool on sheets for 5 minutes, then transfer to wire racks to cool completely.",
      "Make royal icing: Whisk powdered sugar, egg white, and lemon juice until stiff glossy peaks form. Pipe decorative borders and buttons."
    ]
  }
];

// Helper to look up a recipe by its ID
function getRecipeById(id) {
  return BAKERY_RECIPES.find(recipe => recipe.id === id);
}

// Helper to filter recipes by season
function getRecipesBySeason(seasonName) {
  if (!seasonName || seasonName.toLowerCase() === "all") {
    return BAKERY_RECIPES;
  }
  const cleanSeason = seasonName.toLowerCase();
  return BAKERY_RECIPES.filter(recipe => {
    return recipe.season.some(s => s.toLowerCase() === cleanSeason || s.toLowerCase() === "all seasons");
  });
}

// Helper to filter recipes by category
function getRecipesByCategory(categoryName) {
  if (!categoryName || categoryName.toLowerCase() === "all") {
    return BAKERY_RECIPES;
  }
  return BAKERY_RECIPES.filter(recipe => {
    return recipe.category.toLowerCase() === categoryName.toLowerCase();
  });
}
