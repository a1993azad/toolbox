import React, { ComponentProps, HTMLAttributes } from "react";

export default interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
    loading?: boolean;
    color?:string;
    disabled?:boolean;
}