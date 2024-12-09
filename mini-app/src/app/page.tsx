"use client";

import { useTranslations } from "next-intl";

import { Page } from "@/components/Page";

import WiFi from "./WiFi";
import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import Counter from "./Counter";
import IconCheck from "@/icons/IconCheck";
import { useSignal, themeParams } from "@telegram-apps/sdk-react";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";

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
        <Modal
          trigger={
            <Button before={IconCheck()} size="l">
              Achievements
            </Button>
          }
        >
          <Placeholder description="Description" header="Title"></Placeholder>
        </Modal>
      </div>
    </Page>
  );
}
