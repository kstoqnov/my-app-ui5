import {
    List,
    ValueState,
    TitleLevel

} from '@ui5/webcomponents-react'; 

import { ListItemWithIndicator } from './LIstItemWithIndicatorComponent';
import { ListItem } from './ListItemComponent';

export const ActivityList = () => {

    return(

        <List>

            <ListItem info="Finish" infoState={ValueState.Success} text="Activity 1"/>
            <ListItem  info="Failed" infoState={ValueState.Error} text="Activity 2"/>           

            <ListItemWithIndicator 
                 info="in progress"
                 infoState={ValueState.Warning}
                 level={TitleLevel.H5}
                 titleText='Activity 3'
                 progressValue={89}
                 valueState={ValueState.Success}
            />

            <ListItemWithIndicator 
                 info="in progress"
                 infoState={ValueState.Warning}
                 level={TitleLevel.H5}
                 titleText='Activity 4'
                 progressValue={5}
                 valueState={ValueState.Error}
            />

        </List>

    );


}