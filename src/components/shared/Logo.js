import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the reusable FrontrowMD branding logo.
 * It includes an orange icon and "FrontrowMD" text, styled according to the design system.
 * The component is highly configurable via props for appearance and behavior.
 */
const Logo = ({
  size = 'default',
  textColor = 'text-text',
  iconColor = 'bg-primary',
  iconSize = 'h-4 w-4',
  className = '',
  href = '#',
  ariaLabel = 'FrontrowMD Home Page',
  ...restProps // Capture any additional props for the anchor tag
}) => {
  // Determine the Tailwind text size class based on the 'size' prop.
  // 'default' maps to text-2xl (1.5rem) as per the design system's 'Logo' style.
  const textSizeClass = {
    small: 'text-xl',   // Example smaller size
    default: 'text-2xl', // Corresponds to 1.5rem (Logo heading style)
    large: 'text-3xl',  // Example larger size
    // Allows passing a direct Tailwind class string, e.g., 'text-4xl'
  }[size] || size;

  return (
    <a
      href={href}
      className={`
        flex items-center space-x-2       /* Aligns icon and text horizontally with spacing */
        ${textColor}                      /* Sets text color using design system variable */
        ${textSizeClass}                  /* Applies the configured font size */
        font-bold                         /* Applies bold weight (700) as per design system */
        font-sans                         /* Applies Inter font family */
        no-underline                      /* Ensures the link has no underline by default */
        hover:opacity-80                  /* Subtle hover effect */
        transition-opacity                /* Smooth transition for hover effect */
        ${className}                      /* Allows external classes for further customization */
      `}
      aria-label={ariaLabel}              /* Accessibility label for screen readers */
      {...restProps}                      /* Spreads any other HTML attributes to the anchor */
    >
      {/* Icon Placeholder */}
      <div
        className={`
          ${iconSize}                     /* Controls the size of the icon (e.g., h-4 w-4) */
          ${iconColor}                    /* Sets the background color of the icon */
          rounded-full                    /* Makes the icon a perfect circle */
          flex-shrink-0                   /* Prevents the icon from shrinking */
        `}
        aria-hidden="true"                /* Hides the decorative icon from screen readers */
      ></div>
      {/* Logo Text */}
      <span>FrontrowMD</span>
    </a>
  );
};

// --- Prop Type Validation ---
Logo.propTypes = {
  /**
   * Defines the size of the logo text.
   * 'default' maps to Tailwind's 'text-2xl' (1.5rem).
   * Custom Tailwind font size classes (e.g., 'text-xl', 'text-4xl') can also be passed directly.
   */
  size: PropTypes.string,
  /**
   * Tailwind CSS class for the text color (e.g., 'text-gray-900', 'text-text').
   * Defaults to 'text-text' from the design system.
   */
  textColor: PropTypes.string,
  /**
   * Tailwind CSS class for the icon's background color (e.g., 'bg-blue-500', 'bg-primary').
   * Defaults to 'bg-primary' from the design system.
   */
  iconColor: PropTypes.string,
  /**
   * Tailwind CSS classes for the icon's dimensions (e.g., 'h-5 w-5', 'h-6 w-6').
   * Defaults to 'h-4 w-4'.
   */
  iconSize: PropTypes.string,
  /**
   * Additional Tailwind CSS classes to apply to the main logo container.
   * Useful for external layout adjustments (e.g., 'mt-4', 'inline-block').
   */
  className: PropTypes.string,
  /**
   * The URL the logo links to. Defaults to '#'.
   */
  href: PropTypes.string,
  /**
   * Accessibility label for the logo link, important for screen readers.
   * Defaults to 'FrontrowMD Home Page'.
   */
  ariaLabel: PropTypes.string,
  /**
   * Any other standard HTML attributes for the `<a>` tag will be passed through.
   */
  // eslint-disable-next-line react/forbid-prop-types
  restProps: PropTypes.object, // Although we use ...restProps, it's good practice to document.
};

export default Logo;