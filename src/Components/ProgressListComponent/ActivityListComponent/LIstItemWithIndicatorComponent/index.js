import {

    StandardListItem,
    Title,
    ProgressIndicator,
    ValueState,
    TitleLevel

} from '@ui5/webcomponents-react';


export const ListItemWithIndicator = ({info,infoState,level,titleText,progressValue,valueState}) => {

    return (

        <StandardListItem info={info} infoState={ValueState[infoState]} style={{ height: "80px" }}>
            <Title level={TitleLevel[level]}> { titleText } </Title>
            <ProgressIndicator value={progressValue} valueState={ValueState[valueState]} style={{ padding: "10px 0"}}/>                
        </StandardListItem>

    );
}