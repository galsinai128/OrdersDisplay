import React,  { useState, useEffect }  from 'react';
import styles from './SpreadSheet.module.css';
import { useSelector, useDispatch } from 'react-redux';


import DetailsHeader from '../DetailsHeader/DetailsHeader'
import SectionsList from '../SectionsList/SectionsList'
import Pagination from '../Pagination/Pagination'
import {selectData,getSpreadSheetData} from './SpreadSheetSlice'

function SpreadSheet(){
  let data: any; 
  data = useSelector(selectData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpreadSheetData())
  },[]); 
      return (
        <div className={styles.SpreadSheetContainer}>
            <DetailsHeader 
              company={data.company}
              orderNumber={data.orderNumber}
            ></DetailsHeader>
            <SectionsList
              sections={data.sections}
            ></SectionsList>
            <Pagination/>
        </div>

      )
    }

export default SpreadSheet;
