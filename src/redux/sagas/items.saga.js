import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* itemSaga (){
    yield takeEvery('FETCH_ITEMS', fetchAllItems);
}

function* fetchAllItems(){
    console.log('in fetchAllItems:', action.payload);
    try{
        let items = yield axios.get('./routes/shelf.router');
        console.log('in fetchAllItems', items.data);
        yield put({type: 'FETCH_ITEMS', payload: items.payload});
    } catch{
        console.log('error getting items');
    }
}


export default itemSaga;