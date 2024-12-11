"use client";
import {Banner, Card} from "@telegram-apps/telegram-ui";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";

export default function SubscriptionsBanner() {
    const subscriptions = [
        {subtitle: "300 мин + 30 ГБ", title: "Баланс"},
        {subtitle: "Безлимит на минуты и гигабайты", title: "Все сразу!"},
        {subtitle: "Всего по-немногу", title: "Минимум"},
        {subtitle: "700мин + 70ГБ", title: "С запасом"},
    ];

    return (
        <Banner header="Подписки" style={{marginTop: 20, borderRadius: 15, overflow: "auto"}}>
            <div className="cards" style={{display: "flex"}}>
                {subscriptions.map((sub, index) => (
                    <Card key={index} style={{
                        marginRight: index+1 === subscriptions.length?0:10,
                        width: 150
                    }}>
                        <CardCell subtitle={sub.subtitle}>{sub.title}</CardCell>
                    </Card>
                ))}
            </div>
        </Banner>
    );
}