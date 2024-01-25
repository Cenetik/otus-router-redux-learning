export interface MyProps {
    btnName: string; 
    dvName: string;
}

const initialState: MyProps = {
    btnName: 'Начальное название btn',
    dvName: 'Начальное название div'
}

const buttonReducer = (state = initialState, action: any) => {
    console.log('dispatcher received');
    switch (action.type) {
        case'[BTN_EV] CHANGE_NAME':         
            console.log("is BTN_EV CHANGE_NAME");   
            return { ...state, btnName: action.payload };
        case'[DV_EV] CHANGE_NAME':         
            console.log("is DV_EV CHANGE_NAME");   
            return { ...state, dvName: action.payload };
        default:
            return state;
    }
};
export default buttonReducer;