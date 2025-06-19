// src/components/NavLink.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable navigation link component styled according to the design system.
 * It can render as a standard <a> tag or as a custom link component (e.g., from a router).
 */
const NavLink = ({
  to,
  children,
  className = '',
  isActive = false,
  component: CustomLinkComponent, // Prop to allow custom link components (e.g., React Router's Link)
  external = false,
  ariaLabel,
  ...rest // Allows passing any additional HTML attributes like id, data-testid etc.
}) => {
  // Determine the HTML element or React component to render.
  // If `external` is true, it forces the component to be an `<a>` tag
  // to ensure proper external link behavior (e.g., opening in a new tab).
  const LinkComponent = external ? 'a' : (CustomLinkComponent || 'a');

  // Base Tailwind CSS classes derived from the design system.
  // - text-text: Default text color (#121212)
  // - font-normal: Body Text weight (400)
  // - hover:text-primary: Primary color (#FF6B00) on hover
  // - hover:font-medium: Medium Weight (500) on hover
  // - px-4 py-2: Common padding for clickable area (16px horizontal, 8px vertical)
  // - transition-colors: Smooth color changes on hover/focus
  // - focus:ring-2 focus:ring-primary: Accessibility focus ring for keyboard navigation
  const baseClasses = `
    inline-flex
    items-center
    px-4 
    py-2
    text-text 
    font-normal 
    hover:text-primary 
    hover:font-medium 
    transition-colors 
    duration-200 
    ease-in-out
    focus:outline-none
    focus:ring-2
    focus:ring-primary
    focus:ring-offset-2
    focus:rounded-md
    whitespace-nowrap
  `;

  // Classes applied when the link is active (e.g., currently selected page).
  // - text-primary: Primary color (#FF6B00) for active state
  // - font-medium: Medium Weight (500) for active state
  const activeClasses = `
    text-primary
    font-medium
  `;

  // Combine base, active, and any custom classes provided via `className` prop.
  const combinedClasses = `${baseClasses} ${isActive ? activeClasses : ''} ${className}`;

  // Common props that apply to both <a> tags and custom components.
  const commonLinkProps = {
    className: combinedClasses,
    // Add ARIA label for improved screen reader accessibility if provided.
    ...(ariaLabel && { 'aria-label': ariaLabel }),
    ...rest, // Spread any other props directly onto the link element.
  };

  // Render based on whether it's a standard <a> tag or a custom component.
  if (LinkComponent === 'a') {
    return (
      <a
        href={to}
        {...commonLinkProps}
        // For external links, open in a new tab and add security attributes.
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        // Indicate the current page for accessibility.
        {...(isActive && { 'aria-current': 'page' })}
      >
        {children}
      </a>
    );
  } else {
    // For custom components (e.g., React Router's <Link>), pass 'to' and common props.
    // Note: external link handling is typically not done by internal router components.
    return (
      <LinkComponent
        to={to} // Router-specific prop for destination.
        {...commonLinkProps}
        {...(isActive && { 'aria-current': 'page' })}
      >
        {children}
      </LinkComponent>
    );
  }
};

NavLink.propTypes = {
  /**
   * The destination URL for the link. This is a required prop.
   */
  to: PropTypes.string.isRequired,
  /**
   * The content to be rendered inside the link (e.g., text, an icon, or other React nodes).
   * This is a required prop.
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional Tailwind CSS classes or custom CSS classes to apply to the link.
   * These classes will be appended to the component's default styling, allowing for overrides.
   */
  className: PropTypes.string,
  /**
   * If `true`, applies active state styling (e.g., different color, bolder font).
   * Useful for indicating the currently active page in a navigation menu.
   */
  isActive: PropTypes.bool,
  /**
   * A custom React component to render the link (e.g., `Link` from `react-router-dom`).
   * By default, it renders a standard `<a>` HTML tag. If `external` is true, this prop
   * will be ignored, and an `<a>` tag will always be used.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the link will be treated as an external link, causing it to open in a new tab
   * (`target="_blank"`) and including `rel="noopener noreferrer"` for security.
   * When `external` is true, the `component` prop is ignored, and an `<a>` tag is always rendered.
   */
  external: PropTypes.bool,
  /**
   * An ARIA label for improved accessibility. This provides a more descriptive text
   * for screen readers, especially when the link's visible content is not fully descriptive.
   */
  ariaLabel: PropTypes.string,
};

NavLink.defaultProps = {
  className: '',
  isActive: false,
  component: 'a', // Default to a standard anchor tag
  external: false,
  ariaLabel: undefined,
};

export default NavLink;