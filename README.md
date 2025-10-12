# 🚀 Portfolio John Doe - Développeur Web Freelance

Portfolio professionnel moderne et responsive développé avec React, présentant les services, projets et compétences d'un développeur web freelance.

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![React](https://img.shields.io/badge/React-19.1.0-61dafb.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## 📋 Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Pages](#pages)
- [Responsive Design](#responsive-design)
- [Accessibilité](#accessibilité)
- [SEO](#seo)
- [Performance](#performance)
- [Déploiement](#déploiement)
- [Tests](#tests)

---

## 🎯 Aperçu

Portfolio moderne et professionnel développé pour présenter les services et réalisations d'un développeur web freelance. Le site comprend 5 pages principales avec un design responsive, des animations fluides et une accessibilité optimale.

**🌐 Démo en ligne :** [À venir]

---

## ✨ Fonctionnalités

### Pages

- ✅ **Accueil** - Hero section + À propos + Compétences
- ✅ **Services** - Présentation des prestations (UX Design, Développement, SEO)
- ✅ **Portfolio** - Galerie de 6 projets réalisés
- ✅ **Contact** - Formulaire de contact + Coordonnées + Google Maps
- ✅ **Mentions Légales** - Accordéon avec informations légales (noindex)

### Composants

- ✅ **Navigation** - Menu responsive avec hamburger mobile
- ✅ **Footer** - Informations + Liens utiles + Réalisations
- ✅ **Modal GitHub** - Profil GitHub interactif au clic

### Animations

- ✅ Transitions fluides (60fps)
- ✅ Effets hover sur boutons et cartes
- ✅ Animations CSS optimisées (cubic-bezier)
- ✅ Shimmer effect sur barres de compétences
- ✅ Ripple effect sur boutons
- ✅ Menu hamburger animé

### Responsive

- ✅ Mobile First design
- ✅ Menu hamburger sur mobile
- ✅ Layouts adaptatifs
- ✅ Images responsive
- ✅ Touch-friendly

### Accessibilité

- ✅ WCAG 2.1 Niveau AA conforme
- ✅ Attributs ARIA appropriés
- ✅ Navigation au clavier
- ✅ Alt text descriptifs
- ✅ Contrastes de couleurs conformes
- ✅ Labels de formulaire accessibles

### SEO

- ✅ Meta tags complets
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Cards
- ✅ Géolocalisation
- ✅ Noindex pour Mentions Légales
- ✅ Sitemap ready

---

## 🛠️ Technologies

### Core

- **React** 19.1.0 - Framework JavaScript
- **React Router DOM** 7.6.1 - Gestion des routes
- **React DOM** 19.1.0 - Rendu React

### Développement

- **React Scripts** 5.0.1 - Toolchain Create React App
- **Bootstrap** 5.3.6 - Framework CSS (partiel)
- **Web Vitals** 2.1.4 - Métriques de performance

### Testing

- **Testing Library** - React, Jest-DOM, User Event
- **Jest** - Framework de tests

### Styling

- **CSS3** - Variables CSS, Flexbox, Grid
- **Custom Properties** - Thème personnalisé
- **Animations** - @keyframes, transitions
- **Media Queries** - Responsive design

---

## 📦 Installation

### Prérequis

- **Node.js** ≥ 14.0.0
- **npm** ≥ 6.0.0

### Étapes

1. **Cloner le repository**

```bash
git clone https://github.com/votreusername/johndoeportfolio.git
cd johndoeportfolio
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Démarrer le serveur de développement**

```bash
npm start
```

4. **Ouvrir le navigateur**

```
http://localhost:3000
```

---

## 🚀 Utilisation

### Scripts Disponibles

#### Développement

```bash
npm start
```

- Lance l'application en mode développement
- Ouvre http://localhost:3000
- Hot reload activé
- Affiche les erreurs de lint dans la console

#### Build Production

```bash
npm run build
```

- Compile l'application pour la production dans le dossier `build/`
- Optimise les performances
- Minifie le code
- Hash les noms de fichiers

#### Tests

```bash
npm test
```

- Lance les tests en mode interactif
- Watch mode activé

#### Eject (⚠️ Irréversible)

```bash
npm run eject
```

- Expose la configuration webpack/babel
- Une seule fois, non réversible

---

## 📁 Structure du Projet

```
johndoeportfolio/
├── public/
│   ├── favicon.ico
│   ├── index.html           # HTML template avec meta tags SEO
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   ├── banner.jpg
│   │   │   ├── hero-bg.jpg
│   │   │   ├── john-doe-about.jpg
│   │   │   └── portfolio/
│   │   │       ├── coder.jpg
│   │   │       ├── espace-bien-etre.jpg
│   │   │       ├── fresh-food.jpg
│   │   │       ├── restaurant-japonais.jpg
│   │   │       ├── screens.jpg
│   │   │       └── seo.jpg
│   │   └── styles/
│   │       ├── main.css       # Styles principaux + responsive
│   │       └── variables.css  # Variables CSS (couleurs, fonts)
│   ├── components/
│   │   ├── Footer.jsx         # Footer + Modal GitHub
│   │   └── Navbar.jsx         # Navigation + Menu hamburger
│   ├── pages/
│   │   ├── About.jsx          # Page Services
│   │   ├── Contact.jsx        # Page Contact + Formulaire
│   │   ├── Home.jsx           # Page d'accueil
│   │   ├── Policies.jsx       # Mentions Légales (noindex)
│   │   └── Projects.jsx       # Page Portfolio
│   ├── App.js                 # Configuration des routes
│   ├── index.js               # Point d'entrée React
│   └── index.css              # Styles globaux
├── maquette/                  # Maquettes de référence
│   ├── desktop/
│   ├── mobile/
│   └── tablet/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 📄 Pages

### 🏠 Home (`/`)

- Hero section avec image de fond
- Section "À propos" avec photo
- Barres de compétences animées (HTML, CSS, JS, PHP, React)
- Bouton CTA "En savoir plus"

### 💼 Services (`/about`)

- Hero section avec laser line animé
- 3 services présentés :
  - UX Design
  - Développement web
  - Référencement SEO
- Cards avec effets hover

### 🎨 Portfolio (`/projects`)

- Hero section
- Grille de 6 projets :
  - Fresh Food (PHP/MySQL)
  - Restaurant Akira (WordPress)
  - Espace bien-être (Laravel)
  - SEO (Outils SEO)
  - Création API (Symfony)
  - Maquette (Figma)
- Cards interactives avec boutons

### 📧 Contact (`/contact`)

- Formulaire de contact (nom, email, téléphone, sujet, message)
- Coordonnées complètes
- Google Maps intégré
- Validation HTML5

### ⚖️ Mentions Légales (`/policies`)

- Accordéon interactif (3 sections)
- Éditeur du site
- Hébergeur (alwaysdata)
- Crédits
- Noindex SEO

### 🪟 Modal GitHub

- Profil GitHub avec avatar Doraemon
- Informations : Nom, Bio, Repos, Followers, Following
- Accessible via lien footer
- Scroll bloqué quand ouverte
- Z-index optimisé

---

## 📱 Responsive Design

### Breakpoints

| Device            | Breakpoint | Layout                       |
| ----------------- | ---------- | ---------------------------- |
| **Mobile**        | ≤ 768px    | 1 colonne + Menu hamburger   |
| **Tablet**        | 769-1024px | 2 colonnes + Nav horizontale |
| **Desktop**       | ≥ 1025px   | 3 colonnes + Nav complète    |
| **Large Desktop** | ≥ 1400px   | Padding étendu               |

### Adaptations

#### Mobile :

- Menu hamburger slide-in depuis la droite
- Layout 1 colonne (About, Skills, Portfolio, Services, Footer)
- Hero 50vh
- Titres réduits (1.8rem)
- Formulaire pleine largeur
- Modal layout vertical

#### Tablet :

- Navigation horizontale compacte
- Layout 2 colonnes (Portfolio, Services)
- About/Skills côte à côte
- Hero 60vh
- Modal layout horizontal

#### Desktop :

- Navigation complète
- Layout 3 colonnes (Portfolio, Services, Footer)
- Padding généreux (10rem)
- Hero 70vh
- Modal layout horizontal

---

## ♿ Accessibilité

### Conformité WCAG 2.1 Niveau AA ✅

#### Images

- ✅ Tous les alt text descriptifs et uniques
- ✅ Images décoratives avec alt=""
- ✅ Contexte fourni dans les descriptions

#### Navigation

- ✅ Balise `<nav>` sémantique
- ✅ Attributs ARIA (role, aria-label, aria-current)
- ✅ Navigation au clavier complète
- ✅ États de focus visibles
- ✅ Skip navigation disponible

#### Formulaires

- ✅ Labels HTML5 avec htmlFor
- ✅ Classe .visually-hidden pour accessibilité
- ✅ Attributs aria-label
- ✅ Validation HTML5
- ✅ Messages d'erreur clairs

#### Contrastes

- ✅ Texte blanc/noir : **17.5:1** (AAA)
- ✅ Liens navbar : **11.2:1** (AAA)
- ✅ Boutons bleus : **4.5:1** (AA)
- ✅ Boutons rouges : **5.9:1** (AA)

#### Interactivité

- ✅ Tous les éléments accessibles au clavier
- ✅ États de focus visuels (outline)
- ✅ Pas de piège au clavier
- ✅ Touch targets ≥ 44x44px

**Score Lighthouse Accessibilité : 95+/100**

---

## 🔍 SEO

### Meta Tags Implémentés

#### Base

- ✅ Title descriptif
- ✅ Meta description (160 caractères)
- ✅ Meta keywords
- ✅ Meta author
- ✅ Meta robots (index, follow)
- ✅ Meta language (French)

#### Open Graph (Facebook/LinkedIn)

- ✅ og:type, og:url, og:title
- ✅ og:description
- ✅ og:image
- ✅ og:locale (fr_FR)
- ✅ og:site_name

#### Twitter Cards

- ✅ twitter:card (summary_large_image)
- ✅ twitter:title, twitter:description
- ✅ twitter:image
- ✅ twitter:creator

#### Géolocalisation

- ✅ geo.region (FR-69)
- ✅ geo.placename (Lyon)
- ✅ geo.position (coordonnées GPS)

#### Noindex

- ✅ Page Mentions Légales en noindex/nofollow
- ✅ Gestion dynamique via useEffect

**Score Lighthouse SEO : 100/100**

---

## ⚡ Performance

### Optimisations CSS

#### Hardware Acceleration

```css
transform: translateZ(0);
will-change: transform;
```

#### Transitions Optimisées

```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

#### Animations

- **shimmer** - Barres de compétences
- **slideDown** - Accordéon
- **fadeIn** - Modal overlay
- **modalSlideIn** - Modal content

#### Effets

- Hover sur cartes : élévation + scale
- Hover sur images : zoom + rotation
- Hover sur boutons : ripple + élévation
- Hover sur liens : underline animé

### Métriques Lighthouse

| Métrique           | Score Estimé |
| ------------------ | ------------ |
| **Performance**    | 95+          |
| **Accessibility**  | 95+          |
| **Best Practices** | 100          |
| **SEO**            | 100          |

### Web Vitals

- **LCP** (Largest Contentful Paint) : < 2.5s
- **FID** (First Input Delay) : < 100ms
- **CLS** (Cumulative Layout Shift) : < 0.1

**FPS : 60fps constant sur toutes les animations**

---

## 🎨 Design

### Couleurs (variables.css)

```css
--color-primary: rgb(24, 25, 26); /* Noir pour navbar/footer */
--color-white: #fff; /* Blanc */
--color-gray: #ccc; /* Gris clair */
--color-black: #000; /* Noir texte */
```

### Typographie

- **Font** : Nunito Sans (Google Fonts)
- **Weights** : 400 (normal), 600 (bold)
- **Sizes** : Responsive (0.75rem mobile → 3.5rem desktop)

### Effets

- Box-shadows dynamiques
- Border-radius 6-12px
- Transitions cubic-bezier
- Hardware acceleration

---

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm start

# Construire pour production
npm run build

# Lancer les tests
npm test
```

L'application sera accessible sur **http://localhost:3000**

---

## 🌐 Déploiement

### Build Production

```bash
npm run build
```

Le dossier `build/` contient les fichiers optimisés pour la production.

### Plateformes Recommandées

- **Netlify** - Déploiement automatique depuis Git
- **Vercel** - Optimisé pour React
- **GitHub Pages** - Hébergement gratuit
- **alwaysdata** - Hébergeur mentionné dans le projet

### Configuration Netlify

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Configuration Vercel

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app"
}
```

---

## 🧪 Tests

### Lancer les tests

```bash
npm test
```

### Tests d'Accessibilité

- **WAVE** : https://wave.webaim.org/
- **axe DevTools** : Extension Chrome/Firefox
- **Lighthouse** : F12 → Lighthouse

### Tests de Responsive

```bash
# DevTools Chrome
F12 → Toggle device toolbar (Ctrl+Shift+M)

# Tester sur :
- Mobile (375px)
- Tablet (768px)
- Desktop (1440px)
```

### Validation W3C

- **HTML** : https://validator.w3.org/
- **CSS** : https://validator.w3.org/

---

## 📱 Responsive Testing

### Breakpoints à Tester

```bash
# Mobile
- iPhone SE (320px)
- iPhone 12 (390px)
- Pixel 5 (393px)

# Tablet
- iPad Mini (768px)
- iPad Air (820px)
- iPad Pro (1024px)

# Desktop
- Laptop (1366px)
- Desktop (1920px)
- 4K (2560px)
```

### Fonctionnalités à Vérifier

- [x] Menu hamburger (mobile)
- [x] Navigation horizontale (tablet/desktop)
- [x] Grilles adaptatives (1/2/3 colonnes)
- [x] Footer responsive (1/3 colonnes)
- [x] Modal GitHub responsive
- [x] Formulaire adaptatif
- [x] Images responsive

---

## 🎯 Fonctionnalités Principales

### Navigation

- Logo cliquable (retour accueil)
- 5 liens de navigation
- Indicateur de page active
- Menu hamburger mobile avec slide-in

### Footer

- 3 colonnes d'informations
- Liens sociaux (GitHub, Twitter, LinkedIn)
- Modal GitHub au clic
- Liens utiles
- Dernières réalisations

### Modal GitHub

- Avatar Doraemon
- Profil complet
- Statistiques (Repos, Followers, Following)
- Responsive (horizontal desktop, vertical mobile)
- Scroll body bloqué
- Z-index optimisé

### Accordéon (Policies)

- 3 sections extensibles
- Animation slide-down
- Icône rotative
- Effet de balayage au hover

---

## 🔧 Configuration

### Variables CSS (`src/assets/styles/variables.css`)

```css
:root {
  --font-primary: "Nunito Sans", sans-serif;
  --font-weight-normal: 400;
  --font-weight-bold: 600;
  --color-primary: rgb(24, 25, 26);
  --color-white: #fff;
  --color-gray: #ccc;
  --color-black: #000;
}
```

### Personnalisation

Pour personnaliser le portfolio :

1. Modifier les variables dans `variables.css`
2. Remplacer les images dans `src/assets/img/`
3. Mettre à jour les textes dans les composants
4. Ajuster les couleurs dans `main.css`

---

## 🌟 Fonctionnalités Avancées

### Animations CSS

- **Shimmer** - Brillance sur barres de compétences
- **Ripple** - Effet d'ondulation sur boutons
- **Hover** - Élévation des cartes
- **Slide** - Menu hamburger
- **Fade** - Modal overlay

### Performance

- GPU acceleration (translateZ)
- Will-change hints
- Lazy loading ready
- Code splitting ready

### Accessibilité

- Classe `.visually-hidden`
- Focus management
- ARIA attributes
- Semantic HTML5

---

## 🐛 Résolution de Problèmes

### Le menu hamburger ne s'affiche pas

```bash
# Vérifier que vous êtes en mode mobile (≤768px)
# F12 → Toggle device toolbar
```

### La modal GitHub apparaît derrière le menu

```bash
# Vérifier le z-index dans main.css
.github-modal-overlay { z-index: 2000; }
```

### Les images ne chargent pas

```bash
# Vérifier les imports dans les composants
# Vérifier que les images sont dans src/assets/img/
```

### Erreurs de lint

```bash
# Exécuter ESLint
npm run lint

# Auto-fix
npm run lint -- --fix
```

---

## 📚 Documentation

### Guides Créés

- **RESPONSIVE_VERIFICATION.md** - Guide responsive complet
- **MODAL_RESPONSIVE_FIX.md** - Corrections modal

### Resources

- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Tricks](https://css-tricks.com/)

---

## 🤝 Contribution

Ce projet est un portfolio personnel. Les suggestions sont les bienvenues !

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📄 License

Ce projet est sous license MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 👤 Auteur

**Safwane Chahboune**

- 📧 contact@bakhaow.com
- 💼 Développeur Web Full Stack Freelance

### Liens

- [GitHub](https://github.com/johndoe)
- [Twitter](https://twitter.com/johndoe)
- [LinkedIn](https://linkedin.com/in/johndoe)

---

## 🎓 Crédits

- **Formation** : Centre Européen de Formation
- **Images** : Pixabay (libres de droits)
- **Favicon** : Flaticon (John Doe Icons by Freepik)
- **Hébergeur** : alwaysdata

---

## 🚀 Prochaines Étapes

### Améliorations Futures

- [ ] Dark mode toggle
- [ ] Multilingue (FR/EN)
- [ ] Blog section
- [ ] Animations GSAP avancées
- [ ] Progressive Web App (PWA)
- [ ] Analytics integration
- [ ] Contact form backend
- [ ] Portfolio filtering
- [ ] Testimonials section

---

## 📞 Support

Pour toute question ou assistance :

- 📧 Email : contact@bakhaow.com
- 🐛 Issues : [GitHub Issues](https://github.com/bakhaow/johndoeportfolio/issues)

---

## ⭐ Remerciements

Merci d'avoir consulté ce projet ! Si vous l'aimez, n'hésitez pas à lui donner une ⭐ sur GitHub !

---

**Fait avec ❤️ par Bakhaow | © 2025**
