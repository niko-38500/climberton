import * as React from 'react';
import {TextInput} from '@/components/ui/form/textInput';

type SettingsPageProps = {
}

export default function SettingsPage(props: SettingsPageProps)
{
    return <>
        <h1 className="font-bold text-h-primary text-xl w-full">Mes paramètres</h1>
        <form action="">
            <TextInput id="dsqd" placeholder="field" name="f" type="text" />
        </form>
    </>
}