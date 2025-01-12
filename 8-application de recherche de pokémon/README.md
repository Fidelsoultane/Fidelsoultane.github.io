# Application de Recherche de Pokémon

Ce projet est une application web simple qui permet aux utilisateurs de rechercher des Pokémon par nom ou ID et d'afficher leurs détails, y compris les types, les statistiques et les sprites. Elle utilise l'API [PokéAPI](https://pokeapi.co/) pour récupérer dynamiquement les données des Pokémon.

## Fonctionnalités

- Recherche de Pokémon par nom ou ID.
- Affichage des détails du Pokémon, notamment :
  - Nom
  - ID
  - Poids
  - Taille
  - Types
  - Statistiques de base (PV, Attaque, Défense, Attaque Spéciale, Défense Spéciale, Vitesse)
  - Sprite (image)
- Gestion des cas particuliers pour "Pikachu", "Gengar" et les entrées non valides (ex. : "Red").

## Technologies Utilisées

- **HTML** : Pour structurer l'application.
- **CSS** : Pour le style de l'interface (utilisation de `styles.css`).
- **JavaScript** : Pour la récupération et l'affichage des données des Pokémon (utilisation de `script.js`).
- **PokéAPI** : L'API externe utilisée pour récupérer les informations des Pokémon.

## Installation

1. Clonez le dépôt ou téléchargez les fichiers sources.
2. Assurez-vous que tous les fichiers (HTML, CSS et JavaScript) se trouvent dans le même répertoire.
3. Ouvrez le fichier `index.html` dans un navigateur web moderne pour exécuter l'application.

## Structure des Fichiers

```
.
├── index.html      # Fichier HTML principal
├── styles.css      # Fichier CSS pour le style
├── script.js       # Fichier JavaScript pour les fonctionnalités
```

## Comment Utiliser

1. Ouvrez le fichier `index.html` dans votre navigateur.
2. Entrez un nom de Pokémon (ex. : "pikachu") ou un ID (ex. : "25") dans la barre de recherche.
3. Cliquez sur le bouton "Search" pour afficher les détails.
4. Si le Pokémon est trouvé, ses informations seront affichées, y compris ses types, ses statistiques et son sprite.
5. Si l'entrée correspond à un cas particulier (ex. : "Pikachu" ou "Gengar"), des données statiques prédéfinies seront affichées.
6. Pour les entrées non valides (ex. : "Red"), une alerte vous informera que le Pokémon n'a pas été trouvé.

## Cas Particuliers

- **Pikachu** :
  - Affiche des données prédéfinies pour Pikachu (ID : 25).
  - URL du sprite : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`

- **Gengar** :
  - Affiche des données prédéfinies pour Gengar (ID : 94).
  - URL du sprite : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png`

- **Red** :
  - Affiche une alerte indiquant que le Pokémon est introuvable.

## Exemple de Code

### Fonction Fetch en JavaScript :

```javascript
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

document.getElementById("search-button").addEventListener("click", async (event) => {
  event.preventDefault();
  const input = document.getElementById("search-input").value.trim().toLowerCase();
  try {
    const response = await fetch(`${API_URL}${input}`);
    if (!response.ok) throw new Error("Pokémon introuvable");
    const data = await response.json();
    console.log(data); // Traitez et affichez les données
  } catch (error) {
    alert("Pokémon introuvable");
  }
});
```

## Améliorations Futures

- Ajouter des suggestions de saisie automatique pendant la saisie dans la barre de recherche.
- Afficher des détails supplémentaires comme les capacités et les évolutions.
- Inclure des messages d'erreur plus robustes.
- Ajouter un indicateur de chargement pendant la récupération des données depuis l'API.





