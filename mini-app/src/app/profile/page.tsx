"use client";

import {
    initData,
} from "@telegram-apps/sdk-react";

import ShopModal from "@/components/Shop/ShopModal";
import {useState} from "react";
import SubscriptionsBanner from "@/components/Profile/SubscriptionsBanner";
import BalanceBanner from "@/components/Profile/BalanceBanner";
import NotificationsBanner from "@/components/Profile/NotificationsBanner";
import UserInfo from "@/components/Profile/UserInfo";

export default function ProfilePage() {
    const user = initData.user();
    const [isShowModal, setIsShowModal] = useState(false);

    return (
        <>
            <ShopModal isShow={isShowModal} setIsShow={setIsShowModal} />
            <div style={{ padding: "16px 30px 100px" }}>
                <UserInfo user={user} />
                <NotificationsBanner />
                <BalanceBanner setIsShowModal={setIsShowModal} />
                <SubscriptionsBanner />
            </div>
        </>
    );
}