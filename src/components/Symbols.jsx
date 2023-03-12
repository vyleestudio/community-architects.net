import { renderToStaticMarkup } from 'react-dom/server';

export function renderDataImage(svg) {
  const svgString = encodeURIComponent(renderToStaticMarkup(svg));
  return `data:image/svg+xml,${svgString}`;
}

export { ReactComponent as ToggleLight } from '../assets/symbols/toggle-light.svg';
export { ReactComponent as ToggleDark } from '../assets/symbols/toggle-dark.svg';
export { ReactComponent as Expand } from '../assets/symbols/expand.svg';
export { ReactComponent as Arrow } from '../assets/symbols/arrow.svg';
export { ReactComponent as Logo } from '../assets/symbols/logo.svg';
export { ReactComponent as IconModerator } from '../assets/symbols/role-moderator.svg';
export { ReactComponent as IconProfessional } from '../assets/symbols/role-professional.svg';