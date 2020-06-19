import { put, takeLatest, all, call } from 'redux-saga/effects'
//
import { createSlug, removerAcentos } from "../services/utils"

function fetchProducts() {
  return fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
    .then((data) => data.json())
    .then((data) => {
      // Create some unique id for the products since a real API
      // would have it
      data.forEach((product) => {
        product["id"] = createSlug(product.name) + "-" + product.code_color;
        product["normalizedName"] = removerAcentos(product.name);
      });
      return data;
    });
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

export function* watchProductsFetchCall() {
  yield takeLatest('PRODUCTS_FETCH', callFetchProducts)
}

export default function* rootSaga() {
  yield all([
    watchProductsFetchCall()
  ])
}