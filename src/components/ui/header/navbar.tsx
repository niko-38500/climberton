"use client"

import {BurgerButton} from '@/components/ui/header/burgerButton';
import {Fragment, useLayoutEffect, useState} from 'react'
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import Link from 'next/link';
import {Modal} from '@/components/ui/modal/modal';
import * as React from 'react';
import {TextInput} from '@/components/ui/form/textInput';
import {LoginModal} from '@/components/ui/modal/loginModal';
import {NavProfile} from '@/components/ui/header/navProfile';

const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function Navbar() {
    const [mobileMenuExpended, setMobileMenuExpended] = useState(false);

    useLayoutEffect(() => {
        document.body.classList.toggle('overflow-hidden', mobileMenuExpended);

        if (!mobileMenuExpended) return;

        function ev(e: MouseEvent) {
            const target = e.target as HTMLElement;
            if (target.id === 'mobile-menu-container' || target.id === 'mobile-burger-button-menu' || target.closest('#mobile-burger-button-menu')) {
                document.body.addEventListener('click',  ev, {once: true})
                return;
            }
            setMobileMenuExpended(false);
        };

        document.body.addEventListener('click',  ev, {once: true})
    }, [mobileMenuExpended])

    return (
        <nav className="bg-bg-secondary">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <BurgerButton
                            isCollapsed={!mobileMenuExpended}
                            className="md:hidden z-10 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                            onClick={() => setMobileMenuExpended(!mobileMenuExpended)}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="text-h-primary text-xl font-bold flex flex-shrink-0 items-center">
                            Climberton
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-highlight-main text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <NavProfile />
                    </div>
                </div>
            </div>

            <div
                className={`${mobileMenuExpended ? '' : 'scale-x-0'}
                sm:hidden h-screen absolute right-0 w-3/4 origin-right z-50
                transition-all duration-300 overflow-hidden bg-bg-secondary ease-in-out`}
                id="mobile-menu-container"
            >
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-highlight-main text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <span {...mobileMenuExpended ? {className: 'w-screen h-screen z-10 bg-black block absolute opacity-40 transition-all duration-700'}: {className: 'opacity-100'}}></span>
        </nav>
    )
}

// export function Navbar() {
//     return (
//         <Disclosure as="nav" className="bg-bg-secondary">
//             {({ open }) => (
//                 <>
//                     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                         <div className="relative flex h-16 items-center justify-between">
//                             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                                 <Disclosure.Button
//                                     className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
//                                     id="nav-menu-disclosure-burger-button"
//                                 >
//                                     <span className="absolute -inset-0.5" />
//                                     <span className="sr-only">Open main menu</span>
//                                     <BurgerButton
//                                         isCollapsed={!open}
//                                         className="md:hidden z-10"
//                                     />
//                                 </Disclosure.Button>
//                             </div>
//                             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                                 <div className="text-h-primary text-xl font-bold flex flex-shrink-0 items-center">
//                                     Climberton
//                                 </div>
//                                 <div className="hidden sm:ml-6 sm:block">
//                                     <div className="flex space-x-4">
//                                         {navigation.map((item) => (
//                                             <Link
//                                                 key={item.name}
//                                                 href={item.href}
//                                                 className={classNames(
//                                                     item.current ? 'bg-highlight-main text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                                     'rounded-md px-3 py-2 text-sm font-medium'
//                                                 )}
//                                                 aria-current={item.current ? 'page' : undefined}
//                                             >
//                                                 {item.name}
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                                 <NavProfile />
//                             </div>
//                         </div>
//                     </div>
//
//                     <Disclosure.Panel className="sm:hidden">
//                         <div className="space-y-1 px-2 pb-3 pt-2">
//                             {navigation.map((item) => (
//                                 <Disclosure.Button
//                                     key={item.name}
//                                     as={Link}
//                                     href={item.href}
//                                     className={classNames(
//                                         item.current ? 'bg-highlight-main text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                         'block rounded-md px-3 py-2 text-base font-medium'
//                                     )}
//                                     aria-current={item.current ? 'page' : undefined}
//                                 >
//                                     {item.name}
//                                 </Disclosure.Button>
//                             ))}
//                         </div>
//                     </Disclosure.Panel>
//                 </>
//             )}
//         </Disclosure>
//     )
// }