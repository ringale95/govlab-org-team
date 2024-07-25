import { downArrow, search, upArrow } from './IconRegistry';

export const IconNames = {
    "search": search,
    "up-arrow": upArrow,
    "down-arrow": downArrow
}
  
export enum IconColors { 
    "icon-primary" = `var(--gvl-bg-color-primary)`,
    "icon-secondary" = `var(--white-color)`,
    "icon-tertiary" = `rgba(var(--white-rgb), 0.24)`,
}

export enum IconSizes {
    sm = '18px',
    md = '24px',
}
  
export type IconColor = keyof typeof IconColors; 
export type IconName = keyof typeof IconNames;
export type IconSize = keyof typeof IconSizes;