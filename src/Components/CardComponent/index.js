
import { useState } from 'react';
import { Card, Icon } from '@ui5/webcomponents-react';


import { LineChartComponent } from '../LineChartComponent';
import { BarChartComponent }  from '../BarChartComponent';
import { TextComponent } from '../TextComponent';

import { dataset } from './data';
import { spacing } from '@ui5/webcomponents-react-base';

import '@ui5/webcomponents-icons/dist/line-chart.js';
import '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';

export const CardComponent = ({heading}) => {

    const [ toggleCharts, setToggleCharts ] = useState('lineChart');
    const [ loading, setLoading ] = useState(false);
    const [ text, setText ] = useState('Line Chart')
    const [ data, setData ] = useState([...dataset])

    const handleHeaderClick = () => {

        setToggleCharts(toggleCharts => toggleCharts === 'lineChart' ? 'barChart' : 'lineChart')
        
        if(toggleCharts === 'lineChart'){ 
            setText('Bar Chart')
            setLoading(true);            
            setTimeout(() => {
                setLoading(false);
                setToggleCharts('barChart');   
                setData(data)         
            }, 2000);
        } else {
            setText('Line Chart')
            setLoading(true)            
            setTimeout(() => {
                setLoading(false);
                setToggleCharts('lineChart')
                setData(data)
            },2000);
        }

    }

    const showChart = () => {
       
       let chart = toggleCharts === 'lineChart' ?
        <LineChartComponent 
            dimensionsAccessor='month'
            measuresLabel='Stock Price'
            dataset={data}
            loading={loading}
        /> 
        : 
        <BarChartComponent
            dimensionsAccessor='month'
            measuresLabel='Stock Price'
            dataset={data}   
            loading={loading}
        /> 

        return chart;

    }


   return (

    <div>

        <Card 
            heading={heading} 
            style={{ width: '300px',...spacing.sapUiContentPadding }}
            headerInteractive
            onHeaderClick={handleHeaderClick}
            avatar={<Icon name={toggleCharts === 'lineChart' ? "line-chart" : "horizontal-bar-chart"}  />}
        >
                       
            <TextComponent 
                inlineStyleSpacing={'sapUiContentPadding'}
                text={text}
            />

            { showChart() }


        </Card>


    </div> 



   );


}