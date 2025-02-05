import React, { useState } from 'react';
import { Card, Image, Button, CardContent, CardHeader, CardMeta, CardDescription } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';


export default function ActivityDetails() {
    // State để theo dõi khi người dùng nhấn nút Cancel
    const {activityStore} = useStore()
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore 
    if (!activity) return
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <CardContent>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                    <span className="date">{activity.date}</span>
                </CardMeta>
                <CardDescription>{activity.description}</CardDescription>
            </CardContent>
            <CardContent extra>
                <Button.Group>
                    <Button onClick={() => openForm(activity.id)} basic color="blue" content="Edit" />
                    <Button
                        onClick={cancelSelectedActivity} // Hiển thị xác nhận khi nhấn Cancel
                        basic
                        color="grey"
                        content="Cancel"
                    />
                </Button.Group>
            </CardContent>
        </Card>
    );
}
