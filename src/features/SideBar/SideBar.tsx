import React from 'react';
import styles from './SideBar.module.css';
import SideBarItem from '../SideBarItem/SideBarItem'


function SideBar() {
  let sideBarDataPlaceholder = [
    {title: "Reference", items: ['About.pdf','readme.txt','text.txt'], itemLogo: 'file', subtitle: '4 pages 37MB'},
    {title: "Comments", items: ['I love reqpay','reduce costs'], itemLogo: 'comment',subtitle: '4 pages 37MB'},
    {title: "Pictures", items: ['building.png','subway.jpg'], itemLogo: 'image', subtitle: '4 pages 37MB'},
    {title: "Assignment", items: ['fill spreadsheet','read comments'], itemLogo: 'assignment', subtitle: '4 pages 37MB'}
  ]
  return (
    <div className={styles.sideBarContainer}>
        {sideBarDataPlaceholder.map(item => <SideBarItem item={item}/>)}
    </div>

  );
}

export default SideBar;
