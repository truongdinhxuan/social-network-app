import { useEffect } from 'react';
import { Card, Image, Button, CardContent, CardHeader, CardMeta, CardDescription, Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';


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
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity}/>
                <ActivityDetailedChat/>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar/>
            </Grid.Column>
        </Grid>
    );
})
