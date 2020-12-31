import {

    StandardListItem,
    Title,
    TitleLevel,
    ValueState

} from '@ui5/webcomponents-react'

export const ListItem = ({info,infoState,level,text}) => {

    return(

        <StandardListItem info={info} infoState={ValueState[infoState]} style={{ height: "80px" }}>

            <Title level={TitleLevel[level]}> { text } </Title>

        </StandardListItem>


    );


}