/**
 * Helper function to get the correct image path
 * In development: /scenes/image.png
 * In production (GitHub Pages): /abacus-landing-page/scenes/image.png
 */
export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/abacus-landing-page' : '';
  return `${basePath}${path}`;
}
