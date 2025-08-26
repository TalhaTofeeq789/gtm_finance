# GTM Finance - React + Vite Application

A modern finance application built with React and Vite, featuring financial planning, mortgage broking, and educational content.

## Features

- **Financial Planning**: Comprehensive financial planning tools and services
- **Mortgage Broking**: Professional mortgage and lending services  
- **Educational Resources**: Financial literacy courses and guides
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Modern UI**: Built with React, Framer Motion, and Lucide React icons

## Tech Stack

- **Frontend**: React 19+ with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Vercel

This project is configured for easy deployment on Vercel:

### Manual Deployment via Vercel Dashboard

1. **Prepare your repository**:
   - Ensure all changes are committed to Git
   - Push to GitHub, GitLab, or Bitbucket

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect it's a Vite project

3. **Configuration** (Auto-detected):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your app
   - You'll get a live URL once deployment completes

### Environment Variables (if needed)
If your app uses environment variables:
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables for Production, Preview, and Development

### Custom Domain (Optional)
1. Go to project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

## Project Structure

```
src/
├── App.jsx              # Main app component
├── About.jsx            # About page
├── Contact.jsx          # Contact page  
├── FinancialPlanning.jsx # Financial planning services
├── MortgageBroking.jsx  # Mortgage broking services
├── Navigation.jsx       # Navigation component
├── Footer.jsx           # Footer component
├── ScrollToTop.jsx      # Scroll to top utility
├── App.css             # Global styles
├── index.css           # Tailwind imports
└── main.jsx            # App entry point

public/
├── courses/            # Educational PDF resources
├── logo/              # Brand logos
├── team/              # Team member images
└── assets/            # Fonts and other assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Build the project (same as build)

## Support

For deployment issues or questions, please check:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
