import { useState, useEffect } from 'react';

import {
    Card,
    AnalyticalTable,
    Icon,
} from '@ui5/webcomponents-react';

import { tableData } from './data';
import { tableColumns } from './tableColumns';
import { spacing } from '@ui5/webcomponents-react-base'

import '@ui5/webcomponents-icons/dist/table-view.js'



export const AnalyticalTableComponent = ({visibleRows}) => {

    const [ loading, setLoading ] = useState(false);
    const [ data, setData] = useState([]);

    useEffect(() => {  
        setLoading(true)
        const timer = setTimeout(() => {
            
            setData([...tableData]);            
            setLoading(false);

        },1000);
        
        return () => {
            clearTimeout(timer)
        }       

    },[]);
 
    return (

        <Card
            heading="AnalyticalTable"
            style={{maxWidth: "900px",...spacing.sapUiContentPadding}}
            avatar={<Icon name="table-view" />}

        >

            <AnalyticalTable
                data={data}
                columns={tableColumns}
                visibleRows={visibleRows}                
                loading={loading}
            />

        </Card>


    );


}