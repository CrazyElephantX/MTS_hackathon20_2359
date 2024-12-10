"use client";
import {Avatar, Banner, Text} from "@telegram-apps/telegram-ui";

export default function UserInfo({user}) {
    const initials = user.firstName[0] + (user.lastName[0] ?? '');

    return (
        <Banner style={{display: "flex", padding: 10, borderRadius: 15}}>
            <Avatar size={96} src={user.photoUrl} acronym={initials}/>
            <div style={{marginLeft: "20px"}}>
                <Text weight={1}>
                    {`${user.lastName} ${user.firstName}`.trim()}
                </Text>
                <br/>
                <Text weight={3} style={{color: "#6e6e6e"}}>
                    @{user.username}
                </Text>
                <br/>
                <Text weight={3} style={{color: "#6e6e6e"}}>
                    +7(987)654-32-10
                </Text>
            </div>
        </Banner>
    );
}
