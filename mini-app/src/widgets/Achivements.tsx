import IconCheck from "@/icons/IconCheck";
import { Modal, Button, Placeholder } from "@telegram-apps/telegram-ui";

export default function Achivements() {
  return (
    <Modal
      trigger={
        <Button before={IconCheck()} size="l">
          Achievements
        </Button>
      }
    >
      <Placeholder description="Description" header="Title"></Placeholder>
    </Modal>
  );
}
