"use client";
import {Banner, Button, Text} from "@telegram-apps/telegram-ui";

export default function BalanceBanner({setIsShowModal}) {
    return (
        <Banner
            header="Баланс игровых очков"
            style={{marginTop: 20, borderRadius: 15}}
        >
            <div style={{display: "flex", width:'100%', alignItems: "center", justifyContent: "space-between"}}>
                <Text weight={1}>0</Text>
                <Button size="s" onClick={() => setIsShowModal(true)}>
                    Магазин
                </Button>
            </div>
        </Banner>
    );
}
