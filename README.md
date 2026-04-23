# NextwaveAgency

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A premium, high-performance landing page template designed specifically for digital agencies, creative studios, and SaaS platforms. Built with **React**, **Vite**, and **Framer Motion**, NextwaveAgency offers a seamless, high-conversion user experience with polished animations and a modular architecture.

---

## 🚀 Overview

NextwaveAgency is more than just a template; it's a production-ready foundation for your agency's online presence. It moves away from generic layouts to provide a strategic flow—guiding potential clients from the initial problem statement through your unique process, and finally to a conversion-optimized pricing and contact section.

## ✨ Key Features

-   **🎯 Conversion-Focused Sections**: Includes dedicated components for Problem identification, Audience targeting, and "Why Us" value propositions.
-   **🎭 Smooth Animations**: Leverages **Framer Motion** for sophisticated scroll-reveal effects, staggered transitions, and interactive UI elements.
-   **📱 Fully Responsive**: A mobile-first approach ensuring your agency looks professional on everything from ultra-wide monitors to smartphones.
-   **🧩 Modular Architecture**: Each section (Hero, Services, Pricing, etc.) is self-contained with its own JSX and CSS file, making customization and maintenance effortless.
-   **⚡ Blazing Fast**: Optimized by **Vite** for near-instantaneous hot module replacement (HMR) and lightweight production bundles.
-   **🎨 Modern Iconography**: Integrated with **Lucide React** for clean, consistent, and customizable vector icons.
-   **📩 Contact Ready**: Includes a polished contact form and toast notification system for user feedback.

## 🛠️ Tech Stack

-   **Core**: React 18
-   **Build Tool**: Vite
-   **Styling**: CSS Modules / Tailwind CSS (utility support via `tailwind-merge`)
-   **Animation**: Framer Motion
-   **Icons**: Lucide React
-   **Utilities**: `clsx`, `tailwind-merge`

---

## 📦 Installation & Setup

### Prerequisites

-   **Node.js**: Version 16.x or higher
-   **npm** or **yarn**

### Steps

1.  **Clone the repository**
    ```bash
    git clone https://github.com/HaseebAhmad24-collab/NextwaveAgency.git
    cd NextwaveAgency
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The site will be live at `http://localhost:5173`.

4.  **Build for production**
    ```bash
    npm run build
    ```
    The optimized files will be located in the `dist/` directory.

---

## 📂 Project Structure

The project follows a component-based organization for maximum reusability:

```text
src/
├── components/          # Reusable UI sections
│   ├── Hero.jsx         # Impactful introduction
│   ├── Services.jsx     # Agency offerings
│   ├── Process.jsx      # Workflow visualization
│   ├── Pricing.jsx      # Tiered service plans
│   ├── Contact.jsx      # Lead generation form
│   └── ...              # Supporting UI components
├── App.jsx              # Main layout orchestration
├── main.jsx             # Entry point
└── index.css            # Global styles & Tailwind directives
```

## 📖 Usage Examples

### Customizing Animations
You can easily modify entry animations by adjusting the `initial` and `whileInView` props in the Framer Motion wrappers found in `src/components/`:

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Your content */}
</motion.div>
```

### Adding New Sections
1. Create a new `.jsx` and `.css` pair in `src/components/`.
2. Import the component into `App.jsx`.
3. Add it to the main return fragment.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

**Developed with ❤️ by [Haseeb Ahmad](https://github.com/HaseebAhmad24-collab)**