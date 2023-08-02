import * as React from 'react';
import {Dialog} from '@headlessui/react';
import {TextInput} from '@/components/ui/form/textInput';
import {Modal} from '@/components/ui/modal/modal';

type LoginModalProps = {
    isOpen: boolean,
    closeModal: () => void,
}

export function LoginModal(props: LoginModalProps)
{
    return <Modal isOpen={props.isOpen} closeModal={props.closeModal}>
        <Dialog.Title
            as="h3"
            className="text-xl font-bold leading-6 text-h-primary pb-4"
        >
            Se connecter
        </Dialog.Title>
        <form action="#" className="">
            <TextInput type="text" name="email" id="email" placeholder="Email" />
            <TextInput type="password" name="password" id="password" placeholder="Mot de passe" className="mt-3" />
            <button className="bg-bg-btn text-txt-btn font-semibold rounded block px-3 py-1 mt-4 w-full">Submit</button>
        </form>
        <p className="text-p-primary pt-4">
            Mot de passe oublié ?&nbsp;
            <strong className="text-txt-link cursor-pointer hover:underline">
                Réinitialiser
            </strong>
        </p>
        <p className="text-p-primary pt-1.5">
            Pas encore de comptes ?&nbsp;
            <strong className="cursor-pointer hover:underline text-txt-link">
                Inscrivez-vous
            </strong>
        </p>
    </Modal>
}