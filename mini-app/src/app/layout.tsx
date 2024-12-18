import { type PropsWithChildren } from "react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { Root } from "@/components/Root/Root";
import { I18nProvider } from "@/core/i18n/provider";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";
import { Nav } from "./Nav";

export const metadata: Metadata = {
  title: "Your Application Title Goes Here",
  description: "Your application description goes here",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <I18nProvider>
          <Root>
            <div className="h-[100dvh] grid grid-rows-[1fr_86px]">
              <main className="overflow-scroll">{children}</main>
              <Nav></Nav>
            </div>
          </Root>
        </I18nProvider>
      </body>
    </html>
  );
}
