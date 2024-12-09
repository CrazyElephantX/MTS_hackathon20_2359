import { useAppStore } from "@/store/store";
import { Divider } from "@telegram-apps/telegram-ui";
import AnimatedNumbers from "react-animated-numbers";

export default function Counter() {
  const count_clicks = useAppStore((state) => state.count_clicks);
  return <div className="text-3xl">{count_clicks}</div>;
}
