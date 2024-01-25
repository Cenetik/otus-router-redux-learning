import { useDispatch } from "react-redux";
import { buttonNameCh } from "../../StateManagement/slicebuttonchange";

interface Propss 
{
    name: string;
}

const Page3 = (props: Propss) => {
    const dispatch = useDispatch();    

    const css = {
        padding: '10px',
        border: '5px solid red'
    };  

    const btnClick = (e: any) => {
        // при помощи dispatch сигнализируем redux
        // что нужно расчитать state
        dispatch({
            type: buttonNameCh,
            payload:'props' //, 'Изменённый текст кнопки',
        });
    };

    return  <div>
        <div style={css}>Это страница 3</div>
        <button onClick={btnClick}>{props.name}</button>        
    </div>
};

export default Page3;