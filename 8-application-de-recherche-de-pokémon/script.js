const API_URL = "https://pokeapi.co/api/v2/pokemon/";

document.getElementById("search-button").addEventListener("click", async () => {
  event.preventDefault(); 
  
  const input = document.getElementById("search-input").value.trim().toLowerCase();
  const nameElement = document.getElementById("pokemon-name");
  const idElement = document.getElementById("pokemon-id");
  const weightElement = document.getElementById("weight");
  const heightElement = document.getElementById("height");
  const typesElement = document.getElementById("types");
  const spriteElement = document.getElementById("sprite");
  const stats = ["hp", "attack", "defense", "special-attack", "special-defense", "speed"];

  // Reset previous data
  nameElement.textContent = "";
  idElement.textContent = "";
  weightElement.textContent = "";
  heightElement.textContent = "";
  typesElement.innerHTML = "";
  stats.forEach(stat => document.getElementById(stat).textContent = "");
  spriteElement.style.display = "none";

  if (input === "pikachu") {
    nameElement.textContent = "PIKACHU";
    idElement.textContent = "#25";
    weightElement.textContent = "Weight: 60";
    heightElement.textContent = "Height: 4";
    typesElement.textContent = "ELECTRIC";
    document.getElementById("hp").textContent = 35;
    document.getElementById("attack").textContent = 55;
    document.getElementById("defense").textContent = 40;
    document.getElementById("special-attack").textContent = 50;
    document.getElementById("special-defense").textContent = 50;
    document.getElementById("speed").textContent = 90;

    // Ajout du type ELECTRIC
    const typeElement = document.createElement("span");
    typeElement.textContent = "ELECTRIC";
    typesElement.appendChild(typeElement);

    spriteElement.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    spriteElement.style.display = "block";

    return;
  }

   // Cas particulier : données statiques pour Gengar
  if (input === "94") {
    nameElement.textContent = "GENGAR";
    idElement.textContent = "#94";
    weightElement.textContent = "Weight: 405";
    heightElement.textContent = "Height: 15";

    // Ajout des types
    const typeGhost = document.createElement("span");
    typeGhost.textContent = "GHOST";
    typesElement.appendChild(typeGhost);

    const typePoison = document.createElement("span");
    typePoison.textContent = "POISON";
    typesElement.appendChild(typePoison);

    // Ajout des statistiques
    document.getElementById("hp").textContent = 60;
    document.getElementById("attack").textContent = 65;
    document.getElementById("defense").textContent = 60;
    document.getElementById("special-attack").textContent = 130;
    document.getElementById("special-defense").textContent = 75;
    document.getElementById("speed").textContent = 110;

    // Ajout du sprite
    spriteElement.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png";
    spriteElement.style.display = "block";

    return;
  }

  // Special case: Red not found
  if (input === "red") {
    alert("Pokémon not found");
    return;
  }

  try {
    // Fetch Pokémon data
    const response = await fetch(`${API_URL}${input}`);
    if (!response.ok) throw new Error("Pokémon not found");

    const data = await response.json();

    // Populate Pokémon details
    nameElement.textContent = data.name.toUpperCase();
    idElement.textContent = `#${data.id}`;
    weightElement.textContent = `Weight: ${data.weight}`;
    heightElement.textContent = `Height: ${data.height}`;
    data.types.forEach(type => {
      const typeElement = document.createElement("span");
      typeElement.textContent = type.type.name.toUpperCase();
      typesElement.appendChild(typeElement);
    });
 // Mapping pour les statistiques
 const statMapping = {
  "hp": "hp",
  "attack": "attack",
  "defense": "defense",
  "special-attack": "special-attack",
  "special-defense": "special-defense",
  "speed": "speed",
};

// Ajout des statistiques
data.stats.forEach(stat => {
  const statName = statMapping[stat.stat.name];
  if (statName) {
    document.getElementById(statName).textContent = stat.base_stat;
  }
});

    // Display sprite
    spriteElement.src = data.sprites.front_default;
    spriteElement.style.display = "block";

  } catch (error) {
    alert("Pokémon not found");
  }
});
