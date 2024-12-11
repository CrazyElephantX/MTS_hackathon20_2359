"use client";
import { Link } from "@/components";
import IconGame from "@/icons/IconGame";
import IconProfile from "@/icons/IconProfile";
import { Tabbar } from "@telegram-apps/telegram-ui";
import { usePathname } from "next/navigation";

export function Nav() {
  const tabs = [
    {
      id: 0,
      text: "Profile",
      path: "/profile",
      Icon: IconProfile,
    },
    {
      id: 1,
      text: "Game",
      path: "/",
      Icon: IconGame,
    },
  ];

  const pathname = usePathname();

  return (
    <nav>
      <Tabbar>
        {tabs.map(({ id, text, Icon, path }) => (
          <Tabbar.Item key={id} text={text} selected={path === pathname}>
            <Link href={path}>
              <Icon />
            </Link>
          </Tabbar.Item>
        ))}
      </Tabbar>
    </nav>
  );
}
