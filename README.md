# Portfolio Vue 3

Portfolio personnel développé avec Vue 3, Vite et GSAP.

## Technologies

- **Vue 3** - Framework JavaScript
- **Vue Router** - Navigation SPA
- **Vite** - Build tool
- **GSAP** - Animations (ScrollTrigger, Flip)
- **Bootstrap 5** - Grille et utilitaires CSS

## Fonctionnalités

- Animations GSAP avec ScrollTrigger (sections pinnées, reveal au scroll)
- Mode sombre avec détection des préférences système
- Galerie photo avec animation Flip
- Carrousel de compétences horizontal
- Timeline interactive avec progression
- Intégration API GitHub pour afficher les dépôts
- Navigation SPA avec transitions de page

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure du projet

```
src/
├── main.js                 # Point d'entrée
├── App.vue                 # Composant racine
├── router/                 # Configuration Vue Router
├── composables/
│   ├── useGsap.js          # Gestion du cycle de vie GSAP
│   └── useDarkMode.js      # Mode sombre
├── components/
│   ├── layout/             # Navbar, ContactPanel, ProjectsPanel
│   ├── sections/           # Sections de la page d'accueil
│   ├── project/            # Composants réutilisables des pages projet
│   └── ui/                 # Composants UI (ThemeToggle, cards)
├── views/                  # Pages (Home, MyAvatar, AnimeCritik, NDI)
└── styles/                 # CSS avec variables pour thèmes
```

## Pages

- `/` - Accueil avec présentation, parcours, compétences et projets
- `/myavatar` - Projet MyAvatar (Symfony, SHA-256)
- `/animeCritik` - Projet Critik Anime (API REST, Vue.js)
- `/NDI` - Projet Nuit de l'Info 2024

## Auteur

**Evan Nunes** - Étudiant en BUT Informatique
- Email: evan.nunes@orange.fr
- GitHub: [@EvanAttack](https://github.com/EvanAttack)
- LinkedIn: [evan-nunes](https://www.linkedin.com/in/evan-nunes)
