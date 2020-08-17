
export function getData(){
    return fakeDataFromServer;
}


export function setDataApi(data: any){
    //SHOULD SEND ASYNC API CALL
    fakeDataFromServer = data;
}


// {name: '', value: '', isLong: false, isLocked: false, isEditble: false, color: null}
var fakeDataFromServer = {
    orderNumber : '12341234',
    company : 'CIM Steel & Kenitics',
    sections: [
        {
            sectionName: 'General Information',
            data: [
                {name: 'Division Code', value: '2344432', isLong: false, isLocked: false, isEditble: false},
                {name: 'Specification CSI Code', value: '2344324', isLong: false, isLocked: false, isEditble: false},
                {name: 'Subcontract Description', value: 'subcontractors inc. is a good company', isLong: false, isLocked: false, isEditble: false},
                {name: 'Subcontract Nickname', value: 'subcontractors inc', isLong: false, isLocked: false, isEditble: false},
                {name: 'Age', value: 90, isLong: false, isLocked: false, isEditble: false, color: 'red'},
                {name: 'Aouthor', value: 'John Doe', isLong: false, isLocked: false, isEditble: false},
                {name: 'Description', value: 'Fixed Building, skylight changes, design assist', isLong: true, isLocked: false, isEditble: false},
            ]
        },
        {
            sectionName: 'Details',
            data: [
                {name: 'Categories', value: 'Construction', isLong: false, isLocked: false, isEditble: false},
                {name: 'Status', value: 'Approved', isLong: false, isLocked: false, isEditble: false, color: 'green'},
                {name: 'Status Changed', value: '10.10.2020', isLong: false, isLocked: false, isEditble: false},
                {name: 'Reason', value: 'Fixed building', isLong: false, isLocked: false, isEditble: false},
                {name: 'Modified', value: '10.10.2020 10:00', isLong: false, isLocked: false, isEditble: false},
            ]
        },
        {
            sectionName: 'Schedule Impact',
            data: [
                {name: 'Schedule Impact', value: 'Yes', isLong: false, isLocked: false, isEditble: false},
                {name: 'Number Of Days', value: 2, isLong: false, isLocked: false, isEditble: true, inputType: 'number'},
                {name: 'Cost Of Impact', value: '100000$', isLong: false, isLocked: false, isEditble: true, inputType: 'cost'},
            ]
        },
        {
            sectionName: 'Submitted Costs',
            data: [
                {name: 'Submitted Costs', value: '1000$', isLong: false, isLocked: false, isEditble: true, inputType: 'cost'},
                {name: 'Date Submitted', value: '10.10.20', isLong: false, isLocked: false, isEditble: false},
                {name: 'Insurance', value: '100000$', isLong: false, isLocked: false, isEditble: false},
                {name: 'Bond', value: '100000$', isLong: false, isLocked: false, isEditble: false},
                {name: 'GC %', value: '6.00', isLong: false, isLocked: true, isEditble: false},
                {name: 'GC Amount', value: '100000$', isLong: false, isLocked: true, isEditble: false},
                {name: 'Total Subbmitted Cost', value: '100000$', isLong: false, isLocked: false, isEditble: false},
            ]
        },
        {
            sectionName: 'Revised Costs',
            data: [
                {name: 'Revised Costs', value: '1000$', isLong: false, isLocked: false, isEditble: false},
                {name: 'Date Revised', value: '10.10.20', isLong: false, isLocked: false, isEditble: false},
                {name: 'Insurance', value: '100000$', isLong: false, isLocked: false, isEditble: false},
                {name: 'Bond', value: '100000$', isLong: false, isLocked: false, isEditble: false},
                {name: 'GC %', value: '6.00', isLong: false, isLocked: true, isEditble: false},
                {name: 'GC Amount', value: '100000$', isLong: false, isLocked: true, isEditble: false},
                {name: 'Total Revised Cost', value: '100000$', isLong: false, isLocked: false, isEditble: false},
            ]
        },
        {
            sectionName: 'Approved Costs',
            data: [
                {name: 'Approved Costs', value: '1000$', isLong: false, isLocked: false, isEditble: false},
                {name: 'Date Approved', value: '10.10.20', isLong: false, isLocked: false, isEditble: false},
                {name: 'Insurance', value: '100000$', isLong: false, isLocked: false, isEditble: false},
                {name: 'Bond', value: '100000$', isLong: false, isLocked: false, isEditble: false},
                {name: 'GC %', value: '6.00', isLong: false, isLocked: true, isEditble: false},
                {name: 'GC Amount', value: '100000$', isLong: false, isLocked: true, isEditble: false},
                {name: 'Total Approved Cost', value: '100000$', isLong: false, isLocked: false, isEditble: false},
            ]
        },
    ],
}