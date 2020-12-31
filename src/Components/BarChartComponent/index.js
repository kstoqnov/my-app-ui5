import { useState, useEffect } from 'react';
import { BarChart } from '@ui5/webcomponents-react-charts';


export const BarChartComponent = ({dataset,dimensionsAccessor,measuresLabel,loading}) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        setData([...dataset])

    },[dataset])

    return (

        <BarChart
            dimensions={[{accessor: dimensionsAccessor}]}
            measures={[{accessor: 'data', label: measuresLabel}]}
            dataset={data}
            loading={loading}
        />


    );


}