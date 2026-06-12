/**
 * Brand accent colors.
 *
 * Literal hex values (not var() references) on purpose: components build
 * derived colors like `${ACCENT_1}40` (hex + alpha) and gradients from
 * these, which only works with real hex values. The same colors are
 * mirrored as --accent-1 / --accent-2 CSS variables in globals.css and
 * are identical in both themes.
 */
export const ACCENT_1 = '#8fd759';
export const ACCENT_2 = '#27d6ff';

// Alias for single accent usage
export const ACCENT = ACCENT_1;
