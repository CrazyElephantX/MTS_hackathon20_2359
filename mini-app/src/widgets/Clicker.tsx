"use client";
import Ripple from "@/components/Ripple";
import { useAppStore } from "@/store/store";
import { useSignal, themeParams } from "@telegram-apps/sdk-react";
import Image from "next/image";

export default function Clicker({ className = "" }: { className?: string }) {
  const click = useAppStore((state) => state.click);
  const tp = useSignal(themeParams.state);
  console.log(tp);

  return (
    <button
      className={
        "size-[300px] bg-cyan-50 rounded-full border shadow-[3px_2px_3px_0px_black,-2px_-2px_3px_0px_white] p-8 relative overflow-hidden " +
        className
      }
      style={{ background: tp.bgColor, borderColor: tp.accentTextColor }}
      onClick={click}
    >
      <Image
        src="https://static.tildacdn.com/tild6231-3530-4332-b665-633161313938/Frame_14.svg"
        alt=""
        width={200}
        height={200}
      />
      <Ripple></Ripple>
    </button>
  );
}
