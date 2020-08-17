import React , { useState } from 'react';
import styles from './SideBarItem.module.css';
import SideBarItemData from '../SideBarItemData/SideBarItemData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faPortrait, faImage, faComment } from '@fortawesome/free-solid-svg-icons'


function SideBarItem({item}: any) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    let sign = !isCollapsed ? '∧' : '∨'

  return (
    <div className={styles.sideBarItemContainer}>
        {isCollapsed ? (
            <div>
            <div className={styles.sideBarItemCollapsed}>
            <div className={styles.sideBarItemContainerCollapsed}>
                {renderSwitch(item.title)}
                <div className={styles.sideBarItemTitle} onClick={()=>{setIsCollapsed(!isCollapsed)}}>{item.title}</div>
            </div>
            <div className={styles.sign} onClick={()=>{setIsCollapsed(!isCollapsed)}}>{sign}</div>
            </div>
            <div className={styles.borderButtomItem}></div>
            </div>
        )
        :
        (
            <div className={styles.sideBarItemContainerOpen}>
                <div className={styles.sideBarItemOpen}>
                    <div className={styles.smallContainer}>
                        {renderSwitch(item.title)}
                        <div className={styles.sideBarItemTitle} onClick={()=>{setIsCollapsed(!isCollapsed)}}>{item.title}</div>
                    </div>
                    <div  className={styles.sign} onClick={()=>{setIsCollapsed(!isCollapsed)}}>{sign}</div>
                </div>
                
                {item.items.map((el: any, i: number) => {
                    return (
                        <SideBarItemData
                            el={[el , i]}
                            item={item}
                        ></SideBarItemData>
                    )
                })}
                <button className={styles.addButton}>Add +</button>
            </div>
        )}
    </div>

  );

  function renderSwitch(param: any) {
    switch(param) {
      case 'Reference':
        return <FontAwesomeIcon icon={faFolder} />;
    case 'Comments':
        return <FontAwesomeIcon icon={faComment} />;
    case 'Pictures':
        return <FontAwesomeIcon icon={faImage} />;
    case 'Assignment':
        return <FontAwesomeIcon icon={faPortrait} />;
      default:
        return <FontAwesomeIcon icon={faPortrait} />;
    }
  }
}

export default SideBarItem;
