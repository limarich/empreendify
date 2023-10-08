import * as React from 'react';

import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';

import { NavItem } from '../Navbar/NavItem';

export default function NestedList({ selectedIndex, isNestOpen }) {
  const [open, setOpen] = React.useState(isNestOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <NavItem handleClick={handleClick} index={0} selectedIndex={selectedIndex}/>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <NavItem index={1} selectedIndex={selectedIndex}/>   
          <NavItem index={2} selectedIndex={selectedIndex}/>   
          <NavItem index={3} selectedIndex={selectedIndex}/>
          <NavItem index={4} selectedIndex={selectedIndex}/>

        </List>
      </Collapse>

      <NavItem index={5} selectedIndex={selectedIndex}/> 
      <NavItem index={6} selectedIndex={selectedIndex}/> 

    </List>
  );
}
