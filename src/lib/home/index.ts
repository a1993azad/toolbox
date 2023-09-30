import publicPages from '@data/publicPages.json'
import IPublicPages from '@models/IPublicPages'

export function getPages():IPublicPages[]{
    return publicPages as IPublicPages[];
}