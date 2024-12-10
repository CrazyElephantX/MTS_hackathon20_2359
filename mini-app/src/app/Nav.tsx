"use client";
import IconGame from "@/icons/IconGame";
import IconProfile from "@/icons/IconProfile";
import { Tabbar } from "@telegram-apps/telegram-ui";
import {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";

export function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.push(pathname);
  }, []);

  const tabs = [
    {
      id: 0,
      text: "Profile",
      Icon: IconProfile,
      path: "/profile",
    },
    {
      id: 1,
      text: "Game",
      Icon: IconGame,
      path: "/",
    },
  ];

  return (
    <>
      <Tabbar style={{zIndex: 9999}}>  {//TODO: Возможно лучше избежать zIndex
         }
        {tabs.map(({ id, text, Icon, path }) => (
          <Tabbar.Item
            key={id}
            text={text}
            selected={pathname === path}
            onClick={() => router.push(path)}
          >
            <Icon />
          </Tabbar.Item>
        ))}
      </Tabbar>
    </>
  );
}
