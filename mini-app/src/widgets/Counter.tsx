import { useAppStore } from "@/store/store";
import { Divider } from "@telegram-apps/telegram-ui";
import AnimatedNumbers from "react-animated-numbers";

export default function Counter({ className = "" }: { className?: string }) {
  const count_clicks = useAppStore((state) => state.count_clicks);
  return <div className={"text-6xl " + className}>{count_clicks}</div>;
}
