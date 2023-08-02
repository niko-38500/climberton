import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import {Fragment, PropsWithChildren} from 'react'
import {BurgerButton} from '@/components/ui/header/burgerButton';

type ModalProps = {
    closeModal: () => void,
    isOpen: boolean
}

export function Modal({closeModal, children, isOpen}: PropsWithChildren<ModalProps>)
{
    return <Transition as={Fragment} show={isOpen}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden bg-bg-secondary rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                            <div
                                onClick={closeModal}
                                className="text-gray-500 absolute top-3 cursor-pointer right-3 w-6 h-6 focus:outline-none"
                            >
                                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span
                                        aria-hidden="true"
                                        className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rotate-45 -translate-y-0.5"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -rotate-45 -translate-y-0.5"
                                    ></span>
                                </div>
                            </div>
                            {children}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
}