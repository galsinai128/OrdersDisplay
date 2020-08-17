import React , { useState } from 'react';
import styles from './Section.module.css';

import SectionItem from '../SectionItem/SectionItem'


function Section({section} : any) {
const [isCollapsed, setIsCollapsed] = useState(false);
let sign = !isCollapsed ? '∧' : '∨'
  return (
    <div className={styles.SectionContainer}>
        <div className={styles.sectionTitle} onClick={()=>{setIsCollapsed(!isCollapsed)}}><span>{sign + ' ' + section.sectionName}</span></div>
        {!isCollapsed ? (<div className={styles.sectionItemsContainer}>
            {section.data ? section.data.map((sectionItem : any, index: number)=> <SectionItem key={index} sectionItem={sectionItem}/>) : null}
        </div>) : null}
    </div>

  );
}

export default Section;
