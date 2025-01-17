import { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
export declare type Placement = 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end';
export interface PopOverProps extends Omit<HTMLAttributes<HTMLUListElement>, 'css'>, BaseProps {
    /** CSS classname to apply custom styles. */
    className?: string;
    /** Whether or not this is a sub menu. */
    isSubMenu?: Boolean;
    /** Defines the placement of PopOver menu. */
    placement?: Placement;
    /** Defines the function to render the inner contents of the popover button element */
    renderButton?: (isActive: boolean) => {};
    /** Alternative to renderButton, defines the function to render the full popover button element (as opposed to just its contents). This is used if you want full control over the button rendering. The button must forwardRef */
    renderButtonWrapper?: (isActive: boolean, props: any) => {};
    /** The callback fired when the render button is clicked. */
    onPopOverClick?: (isOpen: boolean) => void;
    /** The label used for availability. */
    a11yLabel: string;
    /** The elements that populate the menu */
    children: any;
    /** Allow the popover to stay open for multiple clicks. */
    closeOnClick?: boolean;
}
export declare const PopOver: FC<PopOverProps>;
export default PopOver;
