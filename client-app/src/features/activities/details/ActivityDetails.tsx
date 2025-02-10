import { useEffect } from 'react';
import { Card, Image, Button, CardContent, CardHeader, CardMeta, CardDescription } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';


export default observer (function ActivityDetails() {
    // State để theo dõi khi người dùng nhấn nút Cancel
    const {activityStore} = useStore()
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore 
    const {id} = useParams()

    useEffect(() => {
        if (id) loadActivity(id)
    }), [id, loadActivity]
    if (loadingInitial || !activity) return <LoadingComponent/>
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
                    <Button as={Link} to={`/manage/${activity.id}`} basic color="blue" content="Edit" />
                    <Button
                        as={Link} to={'/activities'}
                        basic
                        color="grey"
                        content="Cancel"
                    />
                </Button.Group>
            </CardContent>
        </Card>
    );
})
