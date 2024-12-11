import { useAppStore } from "@/store/store";
import { Progress } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const count_clicks = useAppStore((store) => store.count_clicks);
  const [currentTargetIdx, setCurrentTargetIdx] = useState(0);
  useEffect(() => {
    const idx = targets.findLastIndex((v) => count_clicks > v);
    setCurrentTargetIdx(idx + 1);
  }, [count_clicks]);
  const targets = [10, 100, 1000, 10000];
  return (
    <div className="flex gap-4 w-full justify-center items-center px-3">
      <span className=" font-mono">{count_clicks}</span>
      <Progress
        value={(count_clicks / targets[currentTargetIdx]) * 100}
        className="grow"
      ></Progress>
      <span className="font-mono">{targets[currentTargetIdx]}</span>
    </div>
  );
}
