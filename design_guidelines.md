# Farmer Safety Web Application Design Guidelines

## Design Approach Selection
**Reference-Based Approach**: Drawing inspiration from utility-focused agricultural platforms like government portals and farming apps, prioritizing functionality and accessibility for rural users.

## Core Design Principles
- **Accessibility First**: Clear typography, high contrast, and simple navigation for users with varying tech literacy
- **Trust and Authority**: Government-style design language that conveys reliability and official credibility
- **Multi-device Optimization**: Mobile-first approach considering rural internet connectivity

## Color Palette

### Primary Colors
- **Primary Green**: 134 67% 35% (for headers, primary actions)
- **Secondary Green**: 134 45% 55% (for accents, secondary elements)
- **Success Green**: 120 70% 40% (for positive indicators, confirmations)

### Supporting Colors
- **Background**: 120 20% 97% (very light green-tinted white)
- **Card Background**: 0 0% 100% (pure white for content cards)
- **Text Primary**: 210 10% 15% (dark gray for main content)
- **Text Secondary**: 210 8% 40% (medium gray for supporting text)
- **Border**: 210 15% 85% (light gray for card borders)

### Accent Colors
- **Warning Orange**: 35 85% 55% (for alerts, important notices)
- **Info Blue**: 210 75% 50% (for informational elements)

## Typography
- **Primary Font**: Inter (Google Fonts) - clean, readable, supports multiple languages
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Heading Scale**: text-3xl for main titles, text-xl for section headings, text-lg for card titles
- **Body Text**: text-base for primary content, text-sm for secondary information

## Layout System
**Tailwind Spacing Units**: Primarily use 2, 4, 6, 8, and 12 for consistent spacing
- **Container**: max-width with horizontal padding p-4 (mobile) to p-8 (desktop)
- **Card Spacing**: p-6 for content, mb-6 for vertical separation
- **Element Spacing**: gap-4 for form elements, gap-6 for card grids

## Component Library

### Navigation
- **Sticky Header**: Green gradient background with white text
- **Mobile Menu**: Collapsible hamburger menu for smaller screens
- **Language Selector**: Dropdown in header for multilingual support

### Content Cards
- **Style**: White background with subtle shadow (card-shadow class)
- **Border Radius**: rounded-lg for modern feel
- **Content Padding**: p-6 for comfortable reading

### Data Tables
- **Header**: Light green background (bg-green-100)
- **Alternating Rows**: Subtle striping for readability
- **Responsive**: Horizontal scroll on mobile devices

### Forms and Inputs
- **Style**: Clean borders with green focus states
- **Validation**: Clear error/success messaging
- **Accessibility**: Proper labels and placeholder text

### Weather Cards
- **Current Weather**: Large centered display with weather icons
- **Forecast**: Horizontal list layout with daily summaries
- **Icons**: FontAwesome weather icons with appropriate colors

### Chatbot Interface
- **Window**: Fixed height with scrollable content area
- **Message Bubbles**: Distinct styling for user (blue) vs bot (gray) messages
- **Input Area**: Bottom-positioned with send button

## Images Section
**No Large Hero Image**: This application focuses on functional content delivery rather than visual marketing. Images are limited to:
- **Weather Icons**: FontAwesome icons for weather conditions
- **Scheme Thumbnails**: Small illustrative icons for government programs
- **User Interface Icons**: Navigation and functional icons throughout

## Visual Hierarchy
- **Information Density**: High - optimized for data consumption
- **Section Separation**: Clear visual breaks between market prices, weather, and schemes
- **Progressive Disclosure**: Expandable sections to manage information overload

## Responsive Considerations
- **Mobile-First**: Single column layout on mobile, expanding to grid on larger screens
- **Touch Targets**: Minimum 44px for interactive elements
- **Performance**: Minimal animations, focus on fast loading for rural connections

This design prioritizes functionality, accessibility, and trust - essential for serving farming communities with varying levels of digital literacy while maintaining the government portal aesthetic that users expect from official agricultural resources.