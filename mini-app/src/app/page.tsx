"use client";

import { useTranslations } from "next-intl";

import { Page } from "@/components/Page";
import { Achivements, Counter, Clicker } from "@/widgets";
import ProgressBar from "@/widgets/ProgressBar";

export default function Home() {
  const t = useTranslations("i18n");

  return (
    <Page
      back={false}
      className="grid grid-rows-[1fr_10fr_1fr] grid-cols-1 px-2 pb-4 items-center justify-center"
    >
      <div>
        <ProgressBar></ProgressBar>
      </div>
      <div className="flex flex-col items-center">
        <Counter className="mb-6"></Counter>
        <Clicker></Clicker>
      </div>
      <div className="flex justify-start">
        <Achivements></Achivements>
      </div>
    </Page>
  );
}
