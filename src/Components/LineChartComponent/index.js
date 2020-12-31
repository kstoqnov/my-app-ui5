import { useState, useEffect } from 'react';
import { LineChart } from '@ui5/webcomponents-react-charts';

export const LineChartComponent = ({dataset,dimensionsAccessor,measuresLabel,loading}) => {
    
    const [data,setData] = useState([]);
    useEffect(() => {

        setData([...dataset])

    },[dataset])

    return (        
        <LineChart
            dimensions={[{accessor: dimensionsAccessor}]}
            measures={[{accessor: 'data', label: measuresLabel}]}
            dataset={data}
            loading={loading}
        />
    );

 
}