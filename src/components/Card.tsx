import ICardProps from "@models/ICardProps";
import Image from "next/image";
import React, { FC } from "react";
import { Icon } from "@iconify/react";

const Card:FC<ICardProps> =(props: ICardProps )=>{
  const { Tag='a', title, description, image, icon, ...rest } = props;
  return (
    <Tag className="group  transition-all ease-in-out duration-300 shadow-md shadow-slate-500 rounded-md bg-white h-40 text-center flex flex-col justify-center items-center   cursor-pointer hover:shadow-2xl " {...rest}>
      {title && <h2 className="text-blue-950 font-bold p-3 text-lg group-hover:text-blue-400 transition-all ease-in-out duration-300">{title}</h2>}
      {image && <Image src={image} alt={title as string} title={title} />}
      {icon && <Icon icon={icon as string}  fontSize={'5rem'} className="text-gray-800 group-hover:text-blue-400 transition-all ease-in-out duration-300"/>}
      {description && <p className="text-gray-400 text-sm p-3">{description}</p>}
    </Tag>
  );
}

export default Card;
