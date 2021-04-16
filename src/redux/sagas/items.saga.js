import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchAllItems(){

    try{
        const items = yield axios.get('/api/shelf');
        console.log('in fetchAllItems', items.data);
        yield put({type: 'FETCH_ITEMS', payload: items.data});
    } catch{
        console.log('error getting items');
    }
}

const items = (state=[], action) =>{
    switch (action.type){
        case 'SET_ITEMS':
            return action.payload;
        default:
            return state;
    }
}


function* itemSaga (){
    yield takeEvery('FETCH_ITEMS', fetchAllItems);
}

export default itemSaga;