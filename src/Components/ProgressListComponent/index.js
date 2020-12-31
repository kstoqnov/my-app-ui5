import {
    Card,  
    Icon
} from '@ui5/webcomponents-react';

import { ActivityList } from './ActivityListComponent';
import { spacing } from '@ui5/webcomponents-react-base'; 

import '@ui5/webcomponents-icons/dist/list.js';



export const ProgressList = () => {

    return (

        <Card
            heading="Progress"
            subheading="List"
            style={{width: "300px",...spacing.sapUiContentPadding }}
            avatar={<Icon name="list"/>}
        >

           <ActivityList />

        </Card>


    );


}