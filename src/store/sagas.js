import { put, takeLatest, all, call } from 'redux-saga/effects';

function fetchProducts() {
  return fetch("http://localhost:3501/pokestore?limit=25&page=6")
    .then((data) => data.json())
    .then((data) => data.results)
}

function searchProducts(payload) {
  return fetch("http://localhost:3501/pokestore/search", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({query: payload})
  })
    .then((data) => data.json())
}

function* callFetchProducts() {
  try {
    const products = yield call(fetchProducts)
    yield put({ type: 'PRODUCTS_FETCH_SUCCESS', payload: products })
  }
  catch(error) {
    yield put({ type: 'PRODUCTS_FETCH_ERROR', payload: error })
  }
}

function* callSearchProducts(args) {
  try {
    const products = yield call(searchProducts, args.payload)
    yield put({ type: 'PRODUCTS_FETCH_SUCCESS', payload: products })
  }
  catch(error) {
    yield put({ type: 'PRODUCTS_FETCH_ERROR', payload: error })
  }
}

export function* watchProductsFetchCall() {
  yield takeLatest('PRODUCTS_FETCH', callFetchProducts)
}

export function* watchProductsSearchCall() {
  yield takeLatest('SEARCHING_PRODUCTS', callSearchProducts)
}

export default function* rootSaga() {
  yield all([
    watchProductsFetchCall(),
    watchProductsSearchCall()
  ])
}