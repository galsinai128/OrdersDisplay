import React , { useState } from 'react';
import styles from './SideBarItemData.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faPortrait, faImage, faComment } from '@fortawesome/free-solid-svg-icons'

function SideBarItemData(elObj: any) {
    
    let i = elObj.el[1];
    let el = elObj.el[0];
    let item = elObj.item;

    const [showX, setShowX] = useState(false);

        return (
            <div>
                <div className={`${styles.listItemContiner}`} onMouseEnter={() => setShowX(true)} onMouseLeave={() => setShowX(false)}>
                    <div className={styles.innerContainer}>
                        {renderSwitch(item.title)}
                        <div className={styles.textContainer}>
                            <div className={`${styles.listItem}`}><span>{el}</span></div>
                            <div className={styles.subtitle}>{item.subtitle}</div>
                        </div>

                        <button className={styles.actionButton}>Backup</button>
                    </div>

                    {showX ? <button className={`${styles.actionButton} ${styles.actionButtonX}`}>X</button> : null}
                </div>
                <div className={`${!(i === item.items.length-1) ? styles.borderButtomItem : null}`}></div>
            </div>
        )


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

export default SideBarItemData;
