import { put, takeLatest, all, call } from 'redux-saga/effects';

function fetchProducts() {
  return fetch("http://localhost:3501/pokestore?limit=25&page=1&reverse=true")
    .then((data) => data.json())
    .then((data) => data.results)
}

function* callFetchProducts() {
  try {
    const products = yield call(fetchProducts)
    console.log(products)
    yield put({ type: 'PRODUCTS_FETCH_SUCCESS', payload: products })
  }
  catch(error) {
    yield put({ type: 'PRODUCTS_FETCH_ERROR', payload: error })
  }
}

export function* watchProductsFetchCall() {
  yield takeLatest('PRODUCTS_FETCH', callFetchProducts)
}

export default function* rootSaga() {
  yield all([
    watchProductsFetchCall()
  ])
}