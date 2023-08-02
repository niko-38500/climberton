import * as React from 'react';

type TextInputProps = {
    id: string,
    placeholder: string,
    name: string,
    className?: string,
    type: "text"|"password"
}

export function TextInput(props: TextInputProps)
{
    return <fieldset className={`relative h-10 rounded ${props.className}`}>
        <input
            type={props.type}
            className="peer focus:outline-0 px-4 py-1.5 rounded w-full h-full
            focus:w-3/4 focus:rounded-tr-none focus:rounded-br-none"
            id={props.id}
            name={props.name}
        />
        <label
            className="text-sm text-txt-placeholder bg-white cursor-text
            absolute top-1/2 -translate-y-1/2 left-4
            transition-all peer-focus:right-0  peer-focus:left-[unset]
            peer-focus:w-1/4 peer-focus:h-full
            peer-focus:rounded-tr peer-focus:rounded-br"
            htmlFor={props.id}
        >
            {props.placeholder}
        </label>
    </fieldset>
}