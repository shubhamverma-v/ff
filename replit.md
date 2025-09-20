# Farmer Safety Web Application

## Overview

The Farmer Safety Web Application is a comprehensive platform designed to serve Indian farmers with critical agricultural information and services. The application provides real-time market prices, weather information, government schemes, and an AI-powered chatbot for agricultural assistance. It's built with accessibility and multilingual support in mind, specifically targeting rural users with varying levels of technical literacy.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server. The application follows a component-based architecture with a mobile-first responsive design approach.

**UI Components**: Built on shadcn/ui component library with Radix UI primitives, providing accessible and customizable components. Uses Tailwind CSS for styling with a custom design system focused on agricultural themes.

**Routing**: Implements client-side routing using Wouter for lightweight navigation management.

**State Management**: Utilizes React Query (@tanstack/react-query) for server state management and caching, with React Context for global application state like language preferences.

**Internationalization**: Custom language context supporting Hindi, English, Punjabi, and Marathi with comprehensive translation coverage for agricultural terminology.

### Backend Architecture

**Server Framework**: Express.js with TypeScript, providing RESTful API endpoints for data access and AI integration.

**Development Setup**: Hot-reload development environment with error overlay and runtime error handling for improved developer experience.

**API Structure**: Modular route registration with centralized error handling and request/response logging middleware.

### Data Management

**Database**: PostgreSQL with Drizzle ORM for type-safe database operations and schema management. The current schema includes user management with plans for agricultural data expansion.

**Storage Interface**: Abstracted storage layer with both memory-based implementation for development and database implementation for production, enabling easy testing and deployment flexibility.

**Session Management**: PostgreSQL-based session storage using connect-pg-simple for reliable user session handling.

### AI Integration

**Chatbot Service**: Google Gemini AI integration for agricultural assistance, providing farmers with real-time advice on crop management, disease identification, market trends, and government schemes.

**Language Support**: AI responses are localized to match user's language preference (Hindi, English, Punjabi, Marathi) with agricultural domain expertise.

### Design System

**Accessibility-First Approach**: High contrast colors, clear typography, and simple navigation designed for users with varying technical literacy levels.

**Agricultural Theme**: Green-based color palette with government-style design language to convey trust and authority.

**Mobile Optimization**: Responsive design prioritizing mobile experience considering rural internet connectivity constraints.

## External Dependencies

### Cloud Services
- **Neon Database**: PostgreSQL hosting for production database needs
- **Google Gemini AI**: Natural language processing for agricultural chatbot functionality

### Frontend Libraries
- **Radix UI**: Accessible component primitives for form controls, dialogs, and navigation
- **Lucide Icons**: Comprehensive icon library for agricultural and UI symbols
- **React Hook Form**: Form validation and management with Zod schema validation
- **Date-fns**: Date manipulation and formatting utilities

### Backend Services
- **Google GenAI SDK**: Integration with Gemini AI models for natural language processing
- **Drizzle Kit**: Database migration and schema management tools

### Development Tools
- **Vite**: Frontend build tool and development server with TypeScript support
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing for Tailwind CSS compilation

### Fonts and Assets
- **Google Fonts**: Inter font family for clean, readable typography
- **Font Awesome**: Additional icon library for comprehensive symbol coverage
- **Custom Agricultural Images**: Background and contextual imagery for farmer-focused design