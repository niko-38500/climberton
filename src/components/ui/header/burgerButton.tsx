import * as React from 'react';

type BurgerButtonProps = {
    isCollapsed: boolean,
    className?: string,
    onClick?: () => void
}

export function BurgerButton({isCollapsed, className, onClick}: BurgerButtonProps) {
    return <button
        className={`text-gray-500 p-5 w-6 h-6 relative focus:outline-none ${className ?? ''}`}
        aria-hidden={true}
        onClick={onClick}
        id="mobile-burger-button-menu"
    >
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out${isCollapsed ? ' -translate-y-1.5' : ' rotate-45 -translate-y-0.5'}`}
            ></span>
            <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out${isCollapsed ? '' : ' opacity-0'}`}
            ></span>
            <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out${isCollapsed ? ' translate-y-1.5' : ' -rotate-45 -translate-y-0.5'}`}
            ></span>
        </div>
    </button>
}