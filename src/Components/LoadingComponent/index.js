import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { 
    FlexBox
} from '@ui5/webcomponents-react';


export const LoadingComponent = ({active = false}) => {

    return(

        <FlexBox            
            justifyContent="Center"   
            alignItems="Center"     
        >

            <BusyIndicator
                size="Large"
                active={active}
            />


        </FlexBox>

        

    );


}