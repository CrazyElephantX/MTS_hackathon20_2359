"use client";

import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";
import { useTranslations } from "next-intl";

import { Link } from "@/components/Link/Link";
import { LocaleSwitcher } from "@/components/LocaleSwitcher/LocaleSwitcher";
import { Page } from "@/components/Page";

import tonSvg from "./_assets/ton.svg";
import WiFi from "./WiFi";

export default function Home() {
  const t = useTranslations("i18n");

  return (
    <Page back={false}>
      <section className="h-full flex items-center justify-center">
        <WiFi></WiFi>
      </section>
    </Page>
  );
}
