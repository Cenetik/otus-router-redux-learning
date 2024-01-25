import { connect, useDispatch } from "react-redux";
import { MyProps } from "../../StateManagement/ButtonReducer";
import { useSelector } from "react-redux";

const Page1 = (props: MyProps) => {
    const dispatch = useDispatch();
    const css = {
        padding: '10px',
        border: '5px solid green'
    };  

    const btnClick = () => {

        console.log('click');
        console.log('props.btnName = '+props.btnName);
        if (props.btnName === "Первый") {
            console.log("it is Первый");
            dispatch({ type: '[BTN_EV] CHANGE_NAME', payload: "Второй" });
        }
        else {
            console.log("it is Второй");
            dispatch({ type: '[BTN_EV] CHANGE_NAME', payload: "Первый" });
        }
    };

    const divClick = () => {
        console.log('div click');

        dispatch({ type: '[DV_EV] CHANGE_NAME', payload: "Текст после клика" });
    }

    return  <div>
        <div style={css}>Это страница 1</div>
        <div style={css} onClick={divClick}>текст тут - {props.dvName} - текст тут</div>
        <button onClick={btnClick}>{props.btnName}</button>

        
    </div>
};

const mapReduxStateToProps = (globalReduxState: any): MyProps => {
    console.log('globalredux',globalReduxState);
        return {
            btnName: globalReduxState.namesStore.btnName,        
            dvName: globalReduxState.namesStore.dvName     
        };
    }

export default connect(mapReduxStateToProps)(Page1);