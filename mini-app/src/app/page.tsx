"use client";

import { useTranslations } from "next-intl";

import { Page } from "@/components/Page";
import { Achivements, Counter, WiFi } from "@/widgets";

export default function Home() {
  const t = useTranslations("i18n");

  return (
    <Page
      back={false}
      className="grid grid-rows-[1fr_10fr_1fr] grid-cols-1 px-2 pb-4 items-center justify-center"
    >
      <div></div>
      <div className="flex flex-col items-center">
        <Counter></Counter>

        <WiFi></WiFi>
      </div>
      <div className="flex justify-start">
        <Achivements></Achivements>
      </div>
    </Page>
  );
}
