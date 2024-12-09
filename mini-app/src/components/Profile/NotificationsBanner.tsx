"use client";
import setNotificationEnablingStatus from "@/utils/Profile/SwitchNotificationEnablingStatus";
import {Banner, Button} from "@telegram-apps/telegram-ui";


export default function NotificationsBanner() {
    return (
        <Banner
            callout="Дополнительный бонус"
            description="Включи уведомления, чтобы получать больше награды в ежедневном бонусе!"
            header="Больше - лучше!"
            style={{marginTop: 20, borderRadius: 15}}
        >
            <Button
                mode="filled"
                size="s"
                onClick={() => setNotificationEnablingStatus(true)}
            >
                Включить
            </Button>
            <Button mode="plain" size="s">
                Позже
            </Button>
        </Banner>
    );
}
