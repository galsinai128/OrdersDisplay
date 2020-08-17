import React , { useState } from 'react';
import {  useDispatch } from 'react-redux';
import styles from './SectionItem.module.css';
import {setSpreadSheetItem,getSpreadSheetData} from '../SpreadSheet/SpreadSheetSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit, faCheck, faLock } from '@fortawesome/free-solid-svg-icons'



function SectionItem({sectionItem} : any) {
  const [isEditing, setEdit] = useState(false);
  const [editValue, setEditValue] = useState('');
  const dispatch = useDispatch();
  return (
    <div className={`${styles.SectionItemContainer} ${sectionItem.isLong ? styles.longItem : null} ${isEditing ? styles.editedItem : null}`}>
        {sectionItem.isEditble ? (<div 
            className={styles.SectionItemButton}
        >
            {!isEditing ? 
                <div onClick={()=> {setEdit(true)}}>
                    <FontAwesomeIcon icon={faEdit} className={styles.SectionItemImage}/>
                </div> 
                : 
                <div className={styles.buttonsContainer}>
                    <div onClick={()=> {
                            if (editValue && Number(editValue)){ //check input type
                                let sectionItemCopy = Object.assign({},sectionItem);
                                sectionItemCopy.value = editValue;
                                if (sectionItemCopy.inputType === 'cost') {sectionItemCopy.value += '$'} // formating $$$
                                dispatch(setSpreadSheetItem(sectionItemCopy)); 
                                setEdit(false);}
                            else { //if input is emppty
                                setEdit(false);
                            }
                        }
                    }
                    >
                        <FontAwesomeIcon icon={faCheck} className={styles.SectionItemImage}/>
                    </div>
                    <div onClick={()=> {setEdit(false); setEditValue('')}}>
                        <FontAwesomeIcon icon={faTimes} className={styles.SectionItemImage}/>
                    </div>
                </div>
            }
        </div>) : 
            !sectionItem.isLocked ? 
                (<div className={styles.buttonsPlaceholder}></div>) 
                : 
                (
                    <div className={styles.lockContainer}>
                        <FontAwesomeIcon icon={faLock} className={styles.lockedIcon}/>
                        <div className={styles.locked}>Locked</div>
                    </div>

                )}
        <div className={`${styles.SectionItemTitle} ${isEditing ? styles.editedItemName : null}`}>{sectionItem.name}</div>
        {isEditing ? 
            <div className={styles.inputContainer}>
                {sectionItem.inputType === 'cost' ? (
                    <input
                        value={'$: '}
                        className={styles.smallInput}
                    ></input>
                ) : null}
                <input 
                    value={editValue}
                    onChange={handleChange}
                    className={`${styles.bigInput} ${sectionItem.inputType === 'cost' ? styles.normalInput : null}`}
                >
                </input> 
            </div>
            :
            <div className={`${sectionItem.color === 'red' ? styles.bgColorRed : sectionItem.color === 'green' ? styles.bgColorGreen : null }`}> 
                <span className={`${styles.SectionItemValue} `}>
                    {sectionItem.value}
                </span>
            </div>}
        <div className={styles.itemFooter}></div>
    </div>

  );

  function handleChange(event: any) {
    setEditValue(event.target.value)
  }
  
}

export default SectionItem;
