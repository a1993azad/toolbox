import React, { ElementType, HTMLAttributes } from 'react';
// interface for card props extended html attributes.


export default interface ICardProps extends HTMLAttributes<HTMLElement>{
    Tag?: ElementType;
    title?: string;
    description?: string;
    icon?: string;
    image?: string;
    href?: string;
}