import React from 'react';
import styles from './SectionsList.module.css';

import Section from '../Section/Section'


function SectionsList({sections} : any) {
  return (
    <div className={styles.SectionListContainer}>
        {sections ? sections.map((section : any) => <Section section={section}/>) : null}
    </div>

  );
}

export default SectionsList;
