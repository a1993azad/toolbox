import React from "react";
import CustomTabs from "@components/CustomTabs";
import ForecastData from "@components/ForecastData";

const days = ["Sun", "Mon", "Tue", "Wen", "The", "Fri", "Sat"];

function getDay(date: string): string {
  const today = new Date().getDay();
  const dateObject = new Date(Date.parse(date));
  const day = dateObject.getDay();
  return day === today ? `Today` : days[day];
}
function groupByDay(list: any[]) {
  const result: any = {};
  list.forEach((item) => {
    const day = getDay(item.dt_txt);
    if (!result[day]) {
      result[day] = [item];
    } else {
      result[day].push(item);
    }
  });
  return result
}
function getDateList(list: any[]) {
  
  const grouped= groupByDay(list);
  return Object.entries(grouped).map((ent) => ({ name: ent[0], value: ent[1] }));
}
function ForecastContainer({ data }: { data: any }) {
  const forecastData = data ? getDateList(data.list) : [];
  const [activeDate, setActiveDate] = React.useState<number>(0);

  return (
    <div className="animate-fade-right animate-once">
      <CustomTabs
        tabs={forecastData}
        activeTab={activeDate}
        onChangeTab={setActiveDate}
      />
      
        {!!forecastData[activeDate] && (
          <ForecastData data={forecastData[activeDate]} />
        )}
    </div>
  );
}

export default ForecastContainer;
