import { Text } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base'



export const TextComponent = ({inlineStyleSpacing,text}) => {

    return (

        <Text style={spacing[inlineStyleSpacing]}>            
            {text}
        </Text>

    );


}