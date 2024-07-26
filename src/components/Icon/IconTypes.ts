import { downArrow, search, upArrow, menu, twitter, youtube} from './IconRegistry';


/**
 * Map Icon names to SVG names
 */
export const IconNames = {
    "search": search,
    "up-arrow": upArrow,
    "down-arrow": downArrow,
    "menu": menu,
    "twitter": twitter,
    "youtube": youtube
}
  
/**
 * Enum to map icon colors to color.
 */
export enum IconColors { 
    "icon-primary" = `var(--gvl-bg-color-primary)`,
    "icon-secondary" = `var(--white-color)`,
    "icon-tertiary" = `rgba(var(--white-rgb), 0.24)`,
    "nav-icon-primary" = `rgba(var(--white-rgb), 0.2)`,
}

/**
 * Enum to map icon sizes to size.
 */
export enum IconSizes {
    sm = '18px',
    md = '24px',
}
  
/**
 * Type used by Icon component props to type-check color, name and size prop.
 */
export type IconColor = keyof typeof IconColors; 
export type IconName = keyof typeof IconNames;
export type IconSize = keyof typeof IconSizes;