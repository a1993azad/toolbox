import React, { useTransition } from "react";
import { Tabs } from "react-daisyui";
const { Tab } = Tabs;

type TabType = {
  name: string;
  value: unknown;
};

function CustomTabs({
  tabs,
  activeTab,
  onChangeTab,
}: {
  tabs: TabType[];
  activeTab?: number;
  onChangeTab: (value:number)=>void;
}) {
  const [tabValue, setTabValue] = React.useState(activeTab);
    const [isPending,startTransition]=useTransition();
    const handleTabChange = (tabValue: number) => {
      startTransition(() => {
        setTabValue(tabValue);
        onChangeTab(tabValue);
      });
    };
  return (
    <Tabs
      value={tabValue}
      onChange={handleTabChange}
      variant="lifted"
      className=" justify-center items-center"
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          value={index}
          className=" mt-2 text-white bg-opacity-100"
          
          disabled={isPending}
        >
          {tab.name}
        </Tab>
      ))}
    </Tabs>
  );
}

export default CustomTabs;
