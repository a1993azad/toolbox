export default interface IPublicPages{
    title: string;
    description?: string;
    icon?: string;
    image?: string;
    href: string;
    category:"Global"|"Dev";
    mine:boolean;
}