import { default_targets } from "@/store/default";
import { useAppStore } from "@/store/store";
import { Progress } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const { count_clicks, targets } = useAppStore();
  const [currentTargetIdx, setCurrentTargetIdx] = useState(0);
  useEffect(() => {
    const idx = targets.findLastIndex((v) => count_clicks > v.count_clicks);
    setCurrentTargetIdx(idx + 1);
  }, [count_clicks]);
  return (
    <div className="flex gap-4 w-full justify-center items-center px-3">
      <span className=" font-mono">{count_clicks}</span>
      <Progress
        value={(count_clicks / targets[currentTargetIdx].count_clicks) * 100}
        className="grow"
      ></Progress>
      <span className="font-mono">
        {targets[currentTargetIdx].count_clicks}
      </span>
    </div>
  );
}
