"use client";
import IconGame from "@/icons/IconGame";
import IconProfile from "@/icons/IconProfile";
import { Tabbar } from "@telegram-apps/telegram-ui";
import { useState } from "react";

export function Nav() {
  const tabs = [
    {
      id: 0,
      text: "Profile",
      Icon: IconProfile,
    },
    {
      id: 1,
      text: "Game",
      Icon: IconGame,
    },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].id);
  return (
    <>
      <Tabbar>
        {tabs.map(({ id, text, Icon }) => (
          <Tabbar.Item
            key={id}
            text={text}
            selected={id === currentTab}
            onClick={() => setCurrentTab(id)}
          >
            <Icon />
          </Tabbar.Item>
        ))}
      </Tabbar>
    </>
  );
}
