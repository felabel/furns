import React, { useState, useEffect } from "react";
import Featured from "./Featured";
import FeaturedProduct from "./FeaturedProduct";
import NewArrival from "./NewArrival";

function useTabs(tabs, initialTab) {
  const labels = tabs.map(l => l.label);

  const makeMenu = (labels, current) => {
    return labels.map((labelText, index) => ({
      label: labelText,
      active: index === current
    }));
  };

  let [active, setActive] = useState(initialTab);
  let [activeContent, setActiveContent] = useState(tabs[initialTab].content);
  let [menu, setMenu] = useState(makeMenu(labels, initialTab));

  useEffect(() => {
    setActiveContent(tabs[active].content);
    setMenu(makeMenu(labels, active));
  }, [active]);
  return { Content: activeContent, tabsList: menu, updateTabs: setActive };
}

function Tabs() {
  const { Content, tabsList, updateTabs } = useTabs(
    [
      {
        label: <div className="text-sm md:text-lg font-semibold"><p>New arrivals</p></div>,
        content: () => <div><Featured /> </div>
      },
      {
        label: <div className="text-sm md:text-lg font-semibold"><p>Featured</p></div>,
        content: () => <div> <NewArrival /> </div>
      },
      {
        label: <div className="text-sm md:text-lg font-semibold"><p>On Sale</p></div>,
        content: () => <div> <Featured /> </div>
      },
      {
        label: <div className="text-sm md:text-lg font-semibold"><p>Trending</p></div>,
        content: () => <div> <NewArrival /> </div>
      }

    ],
    0
  );

  return (
    <div className="tabs -z-10">
      <div className="tabs-menu  w-full flex mx-auto h-auto text-center justify-between">
        {tabsList.map((t, index) => (
            <div className=" text-sm font-semibold capitalize active:text-olive-orange hover:text-olive-orange px-3 mb-4 ">
                <span 
                key={t.label}
                className={
                tabsList[index].active
                ? "text-olive-orange"
                : "text-gray-600"
                }
                >
                <button key={index} onClick={() => updateTabs   (index)}>
                    {t.label}
                </button>
                </span>
            </div>
          
        ))}
      </div>
      <div className="tabs-content">{Content}</div>
    </div>
  );
}

export default Tabs;
