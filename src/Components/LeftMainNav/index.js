import { useHistory } from 'react-router-dom';

import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationItem } from '@ui5/webcomponents-react/lib/SideNavigationItem';
import '@ui5/webcomponents-icons/dist/home';
import '@ui5/webcomponents-icons/dist/world';
import '@ui5/webcomponents-icons/dist/status-in-process';


export const LeftMainNav = () => {

    const history = useHistory();

    const navLinks = {
        home : '/',
        analytic: '/analytic',
        progress: '/progress', 
    }

    const onSelectionChange = (e) => {
        
        let navItemName = e.detail.item.part.value;
        let navLink  = navLinks[navItemName];
        
        history.push(navLink);
        
    } 

    return(

        <SideNavigation
            onSelectionChange={onSelectionChange}        
        >

          <SideNavigationItem  icon="home" text="Home" part="home"/>
          <SideNavigationItem icon="world" text="Analytic" part="analytic"/>
          <SideNavigationItem icon="status-in-process" text="Progress" part="progress"/>
      
        </SideNavigation>

    );
 

};