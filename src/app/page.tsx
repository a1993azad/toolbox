"use client";
import React from "react";
import Card from "@components/Card";
import { uniqueId } from "lodash-es";
import { getPages } from "@lib/home";
import IPublicPages from "@models/IPublicPages";

export default function Home() {
  const [publicPages, setPublicPages] = React.useState<IPublicPages[]>([]);

  const initPages = React.useCallback(() => {
    setPublicPages(getPages());
  }, []);

  React.useEffect(() => {
    initPages();
  }, [initPages]);

  return (
   
      <div className="grid grid-cols-4 w-full justify-center gap-4 p-4">
        {publicPages.map((page) => (
          <Card
            description={page.description}
            icon={page.icon}
            image={page.image}
            title={page.title}
            key={uniqueId("page")}
            Tag='a'
            href={page.href}
            
          />
        ))}
      </div>
   
  );
}
