// src/components/HeaderDashboard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // Utility for conditionally joining CSS class names

/**
 * HeaderDashboard Component
 *
 * A highly reusable and configurable header component specifically designed
 * for dashboard pages. It features a prominent logo/title, primary navigation links,
 * and a flexible slot for additional controls or user information on the right side.
 *
 * It adheres to the design system's specifications for colors, typography, and spacing,
 * including a fixed height and a subtle bottom border.
 *
 * @param {object} props - The component props.
 * @param {string} props.logoText - The text to display as the main logo/brand. This is required.
 * @param {string} [props.logoHref='/'] - The URL that the logo links to. Defaults to '/'.
 * @param {Array<object>} [props.navigationLinks=[]] - An array of objects defining the navigation links.
 *   Each object should have:
 *   - `label` (string): The display text for the link.
 *   - `href` (string): The URL the link points to.
 *   - `active` (boolean): Optional. If true, the link will be styled as active.
 * @param {React.ReactNode} [props.rightContent] - A React node to be rendered on the far right side of the header.
 *   This can be used for user avatars, search inputs, notification icons, action buttons, etc.
 * @param {string} [props.className] - Additional CSS classes to apply directly to the main header element.
 * @param {string} [props.logoClassName] - Additional CSS classes to apply to the logo link element.
 * @param {string} [props.linkClassName] - Additional CSS classes to apply to all individual navigation links.
 * @param {string} [props.activeLinkClassName] - Additional CSS classes to apply specifically to the active navigation link,
 *   which will override default and `linkClassName` for the active state.
 */
const HeaderDashboard = ({
  logoText,
  logoHref = '/',
  navigationLinks = [],
  rightContent,
  className,
  logoClassName,
  linkClassName,
  activeLinkClassName,
}) => {
  return (
    <header
      className={classNames(
        "fixed top-0 left-0 w-full z-40", // Ensures header stays at top and is above other content
        "h-20", // Fixed height of 80px (common for headers, fits design system base unit)
        "bg-[#F8F9FA]", // Background color from design system
        "text-[#121212]", // Default text color from design system
        "border-b border-gray-200", // Subtle bottom border as per design description
        "shadow-sm", // Adds a light shadow for depth
        className // Allows external custom styling for the header wrapper
      )}
      aria-label="Dashboard Navigation Header" // ARIA label for improved accessibility
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo/Brand Section */}
        <div className="flex-shrink-0">
          <a
            href={logoHref}
            className={classNames(
              "text-2xl font-bold text-[#FF6B00]", // Logo style: 1.5rem (24px) font-size, 700 font-weight, primary color
              "hover:opacity-80 transition-opacity duration-200", // Smooth hover effect
              logoClassName // Allows external custom styling for the logo
            )}
            aria-label={`Go to ${logoText || 'Home'} dashboard page`} // Descriptive ARIA label for logo link
          >
            {logoText}
          </a>
        </div>

        {/* Main Navigation Links */}
        <nav className="hidden md:flex flex-grow justify-center" aria-label="Main Dashboard Navigation">
          <ul className="flex space-x-8"> {/* Horizontal spacing (32px) for links */}
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={classNames(
                    "text-[#555]", // Secondary color for default links
                    "font-medium", // Medium weight text style
                    "hover:text-[#FF6B00] transition-colors duration-200", // Primary color on hover
                    {
                      "text-[#FF6B00] font-semibold": link.active, // Primary color and bold for active link
                    },
                    linkClassName, // General link styling from props
                    link.active && activeLinkClassName // Specific active link styling from props
                  )}
                  aria-current={link.active ? 'page' : undefined} // ARIA to indicate current page
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right-aligned Content / Controls */}
        <div className="flex-shrink-0 flex items-center gap-x-4">
          {rightContent}
          {/* Mobile menu button (visible on small screens only) */}
          <button
            className="md:hidden p-2 text-[#121212] rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B00]"
            aria-label="Open mobile menu"
            // onClick handler would typically be added here to toggle a mobile sidebar or dropdown
          >
            {/* Hamburger Icon SVG */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// PropTypes for robust prop validation
HeaderDashboard.propTypes = {
  logoText: PropTypes.string.isRequired,
  logoHref: PropTypes.string,
  navigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ),
  rightContent: PropTypes.node, // Allows any renderable React element
  className: PropTypes.string,
  logoClassName: PropTypes.string,
  linkClassName: PropTypes.string,
  activeLinkClassName: PropTypes.string,
};

export default HeaderDashboard;