import * as React from 'react';
import {useLayoutEffect, useState} from 'react';
import Link from 'next/link';

type NavProfileProps = {
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function NavProfile(props: NavProfileProps)
{
    const active = true;
    const [open, setOpen] = useState(false);

    useLayoutEffect(() => {
        document.body.addEventListener('click', () => {
            if (!open) return;

            setOpen(false)
        }, {once: true})
    }, [open])

    return <div id="nav-profile-icon" className="relative ml-3">
        <div>
            <button
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none"
                onClick={() => setOpen(!open)}
            >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </button>
        </div>
        <div
            className={`absolute right-0 z-10 mt-2 w-48 origin-top-right py-1 
            rounded-md bg-white shadow-lg ring-1 
            ring-black ring-opacity-5 focus:outline-none
            transition-transform
            ${open ? '' : 'scale-0'}`}
        >
            <div>
                <Link
                    href="/blog/tag/vacance"
                    className={classNames(active ? 'bg-gray-300' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                    Your Profile
                </Link>
            </div>
            <div>
                <Link
                    href="/compte/parametres"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                    Settings
                </Link>
            </div>
            <div>
                <Link
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                    Sign out
                </Link>
            </div>
        </div>
    </div>
}