import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {object} BreadcrumbItem
 * @property {string} label - The text label for the breadcrumb item.
 * @property {string} href - The URL link for the breadcrumb item.
 */

/**
 * A reusable Breadcrumbs component for hierarchical navigation.
 * It displays a path of links leading to the current page,
 * following the defined design system for colors, typography, and spacing.
 *
 * @param {object} props - The component props.
 * @param {BreadcrumbItem[]} props.items - An array of objects, each representing a breadcrumb item with `label` and `href`.
 * @param {React.ReactNode} [props.separator='/'] - The content to be used as a separator between breadcrumb items. Can be a string, icon, or any React node.
 * @param {string} [props.className=''] - Additional CSS classes for the main `nav` container, applied via Tailwind CSS.
 * @param {string} [props.itemClassName=''] - Additional CSS classes for individual non-active breadcrumb `<a>` links.
 * @param {string} [props.activeClassName=''] - Additional CSS classes for the active (last) breadcrumb `<span>` item.
 * @param {string} [props.separatorClassName=''] - Additional CSS classes for the separator `<span>` element.
 * @param {string} [props.ariaLabel='Breadcrumb navigation'] - The ARIA label for the `nav` element, enhancing accessibility.
 * @returns {JSX.Element} The Breadcrumbs component.
 */
const Breadcrumbs = ({
  items,
  separator = '/',
  className = '',
  itemClassName = '',
  activeClassName = '',
  separatorClassName = '',
  ariaLabel = 'Breadcrumb navigation',
}) => {
  // Base styling derived from the Design System for typography, colors, and spacing.
  // Using direct hex values for precise color mapping as per the design system.
  const baseNavClasses = `
    font-sans text-base leading-relaxed antialiased
    text-[#121212] py-2 px-4
  `; // text-[#121212] for 'text', font-sans assumed to cover 'Inter'
  const baseOlClasses = 'flex items-center flex-wrap gap-x-2'; // gap-x-2 ~ 8px base unit
  const baseLiClasses = 'flex items-center'; // Ensure item and separator align
  const baseLinkClasses = `
    text-[#FF6B00] hover:underline
    font-medium
  `; // text-[#FF6B00] for 'accent', font-medium for 'Medium Weight'
  const baseActiveClasses = `
    font-bold text-[#121212]
  `; // font-bold for 'Bold Weight', text-[#121212] for 'text'
  const baseSeparatorClasses = 'mx-2'; // mx-2 ~ 8px base unit

  if (!items || items.length === 0) {
    return null; // Don't render if there are no items
  }

  return (
    <nav aria-label={ariaLabel} className={`${baseNavClasses} ${className}`}>
      <ol className={baseOlClasses}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={baseLiClasses}>
              {isLast ? (
                // Current page item: semantic span with aria-current
                <span
                  aria-current="page"
                  className={`${baseActiveClasses} ${activeClassName}`}
                >
                  {item.label}
                </span>
              ) : (
                // Non-last item: link
                <a
                  href={item.href}
                  className={`${baseLinkClasses} ${itemClassName}`}
                >
                  {item.label}
                </a>
              )}

              {!isLast && (
                // Separator, not rendered after the last item
                <span className={`${baseSeparatorClasses} ${separatorClassName}`}>
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

// Prop type validation for robust component usage
Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  separator: PropTypes.node,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  activeClassName: PropTypes.string,
  separatorClassName: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Breadcrumbs;