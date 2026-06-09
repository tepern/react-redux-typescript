import React, { ReactNode, useState } from "react";
import { JSX } from "react/jsx-runtime";

type Tab = {
  name: string;
  content: ReactNode;
};

type Tabs = {
  tabs: Tab[];
};

export default function CreateOrderFormWrapper({ tabs }: Tabs): JSX.Element {
  const [openTab, setOpenTab] = useState(tabs[0].name);
  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li key={tab.name} className="nav-item">
            <button
              onClick={() => setOpenTab(tab.name)}
              className={tab.name === openTab ? "nav-link active" : "nav-link"}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            className={
              tab.name === openTab
                ? "tab-pane fade show active"
                : "tab-pane fade"
            }
            key={tab.name}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
