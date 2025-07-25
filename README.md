# Apoint Task - Material Reports Management System

A modern React application for managing and visualizing material reports with hierarchical category structures, built with React 19, TypeScript, and Redux Toolkit.

## 🚀 Features

### 🔐 Authentication

- Login page with modern UI using shadcn/ui components
- Protected routes with authentication guards
- Responsive form design with CSS modules

### 📊 Reports Dashboard

- **Hierarchical Data Display**: Parent categories → Child categories → Individual materials
- **Interactive Collapsible Rows**: Expand/collapse functionality with animated arrow icons
- **Color-coded Materials**: Visual color indicators with hex color circles and names
- **Data Aggregation**: Automatic calculation and display of totals for all "remind" properties
- **Summary Row**: Top-level totals for quick overview
- **Responsive Table Design**: Mobile-friendly with proper styling

### 🎨 Modern UI Components

- **Reusable Components**: Modular table rows and color display components
- **CSS Modules**: Scoped styling for better maintainability
- **Design System**: Consistent design tokens and global styles
- **shadcn/ui Integration**: Professional UI components
- **Smooth Animations**: Transition effects for better UX

### 🏗️ Architecture

- **React Router v6+**: Object-based routing configuration
- **Redux Toolkit**: State management with RTK Query for API calls
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Reusable, maintainable component structure

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Routing**: React Router DOM v7
- **State Management**: Redux Toolkit + RTK Query
- **Styling**: CSS Modules + Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── layouts/          # Layout components (MainLayout)
│   └── ui/               # Reusable UI components
│       ├── button.tsx
│       ├── color-display.tsx
│       └── reusable-table-row.tsx
├── pages/
│   ├── login-page/       # Login page with authentication
│   └── reports-page/     # Main reports dashboard
│       └── components/   # Report-specific components
│           ├── parent-category/
│           └── child-category/
├── router/               # React Router configuration
├── services/             # API services and RTK Query
│   └── features/
│       ├── auth/
│       └── reports/
├── store/                # Redux store configuration
├── styles/               # Global styles and CSS modules
└── utils/                # Utility functions
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd apoint_task
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Setup

The application uses Vite for development and building. Configure your API endpoints in the services directory.

### Styling

- Global styles: `src/styles/globals.css`
- Normalize styles: `src/styles/normalize.css`
- Component-specific styles: CSS Modules (`.module.css`)

## 🎯 Key Features Explained

### Data Hierarchy

The application displays materials in a three-level hierarchy:

1. **Parent Categories** - Top-level groupings
2. **Child Categories** - Sub-categories within parents
3. **Materials** - Individual items within child categories

### Calculations

- Automatic summation of all properties starting with "remind"
- Parent and child category totals are calculated from their materials
- Global totals displayed in the summary row

### Interactive Elements

- **Collapsible Rows**: Click arrows to expand/collapse categories
- **Color Indicators**: Visual representation of material colors
- **Responsive Design**: Works on desktop and mobile devices

## 🔍 API Integration

The application uses RTK Query for efficient API management:

- Automatic caching and refetching
- Type-safe API calls
- Loading and error states

### Reports API

```typescript
// Example API call
const { data: materials } = useGetMaterialsQuery({
  sort: "name",
  start: "2025-07-01",
  end: "2025-07-31",
});
```

## 🎨 Styling Guidelines

### CSS Modules

Component-specific styles are scoped using CSS modules:

```typescript
import styles from "./component.module.css";
```

### Design Tokens

Consistent spacing, colors, and typography using CSS custom properties defined in global styles.

## 🚀 Production Build

To build for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **Developer** - Initial work and implementation

## 🔗 Related Technologies

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
