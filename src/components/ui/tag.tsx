import {JSX, PropsWithChildren} from 'react';
import {ImagePropsType} from '@/shared/type/imageProps.type';
import Image from 'next/image';

type TagProps = {
    customIcon?: JSX.Element|ImagePropsType
}

export default function Tag(props: PropsWithChildren<TagProps>) {
    let icon = <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
        <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
    </svg>;

    if (props.customIcon && 'src' in props.customIcon) {
        icon = <Image {...props.customIcon} />
    } else if (props.customIcon && props.customIcon instanceof Element) {
        icon = props.customIcon;
    }

    return <div className="text-sm mt-2.5 bg-highlight-card text-white h-fit w-fit flex items-center gap-1 p-1 rounded-md">
        {icon}
        {props.children}
    </div>
}