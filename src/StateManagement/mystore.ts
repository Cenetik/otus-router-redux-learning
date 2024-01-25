import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './ButtonReducer';
import btnss from './slicebuttonchange';

const mystore = configureStore({
    reducer: {
        // Регистрируем два редюсера
        // Под порядковый номер
        namesStore: buttonReducer,
        btn: btnss
    },

});
export default mystore;