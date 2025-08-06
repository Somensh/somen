# Somen's Portfolio

This repository contains the source code for my personal portfolio website, an interactive digital resume designed to showcase my skills, projects, and professional experience. Built with a modern tech stack including React, Vite, and TypeScript, it features a sleek design, smooth animations, and engaging user interactions.

**[Visit the live site](https://somenportfolio.vercel.app/)**

## Features

- **🤖 AI Assistant Chatbot**: An interactive chatbot to answer visitor questions about my skills, experience, and projects.
- **✨ Dynamic Cursor Trail**: A visually appealing cursor trail effect that follows the user's mouse movements.
- **🌓 Light/Dark Mode**: A theme toggle for switching between light and dark modes, with styles defined using CSS variables.
- **📱 Fully Responsive Design**: A mobile-first approach ensures a seamless experience on all devices, from desktops to smartphones.
- **📂 Project Showcase**: Detailed pages for key projects, including overviews, tech stacks, and key features.
- **📨 Integrated Contact Form**: A functional contact form using EmailJS to send messages directly to my inbox.
- **🎨 Modern UI/UX**: Built with **shadcn-ui** and **Tailwind CSS** for a clean, modern, and accessible user interface.

## Tech Stack

This project is built with a modern and efficient technology stack:

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn-ui](https://ui.shadcn.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (via `tailwindcss-animate`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

To run this project locally, follow these steps.

### Prerequisites

- Node.js (v18 or later)
- npm (or your preferred package manager like Yarn or pnpm)
- Git

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/Somensh/somenportfolio.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd somenportfolio
    ```

3.  **Install the dependencies:**

    ```sh
    npm install
    ```

4.  **Start the development server:**
    The site will be available at `http://localhost:5173`.
    ```sh
    npm run dev
    ```

## Available Scripts

- `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles the application for production into the `dist/` directory.
- `npm run lint`: Lints the codebase using ESLint to check for errors and style issues.
- `npm run preview`: Starts a local server to preview the production build.

## Project Structure

The codebase is organized to be modular and maintainable:

```
somenportfolio/
├── public/                 # Static assets (images, favicon, resume.pdf)
└── src/
    ├── assets/             # Project-specific images and assets
    ├── components/         # Reusable React components
    │   ├── Chatbot/        # Components for the AI assistant chatbot
    │   ├── ui/             # shadcn-ui components
    │   ├── ContactForm.tsx
    │   └── ThemeToggle.tsx
    ├── hooks/              # Custom React hooks (e.g., useChatbot)
    ├── lib/                # Utility functions (e.g., cn for classnames)
    ├── pages/              # Top-level page components for routing
    │   ├── Index.tsx       # Main landing page
    │   ├── PortfolioProject.tsx
    │   └── ECommerceProject.tsx
    ├── utils/              # Application-specific utilities (e.g., chatResponses)
    ├── App.tsx             # Main application component with routing setup
    └── main.tsx            # Application entry point
```

## License

This project is licensed under the **GNU General Public License v3.0**. See the `LICENSE` file for more details.

## Contact

Somen Sharma - [somen.office546@gmail.com](mailto:somen.office546@gmail.com)

Feel free to reach out if you have any questions, suggestions, or collaboration ideas
