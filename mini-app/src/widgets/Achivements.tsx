import IconCheck from "@/icons/IconCheck";
import { useAppStore } from "@/store/store";
import {
  Modal,
  Button,
  Placeholder,
  Timeline,
} from "@telegram-apps/telegram-ui";
import { TimelineItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/Timeline/components/TimelineItem/TimelineItem";
import { useMemo } from "react";

export default function Achivements() {
  const { count_clicks, targets } = useAppStore();

  const active = useMemo(() => {
    const idx = targets.findIndex((v) => v.count_clicks > count_clicks);
    console.log(idx);
    return idx;
  }, [count_clicks]);

  return (
    <Modal
      trigger={
        <Button before={IconCheck()} size="l">
          Achievements
        </Button>
      }
    >
      <Timeline active={active}>
        {targets.map((v, i) => (
          <TimelineItem key={i} header={v.title}>
            {v.description}
          </TimelineItem>
        ))}
      </Timeline>
    </Modal>
  );
}
