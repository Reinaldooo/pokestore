const initialState = {
  products: [],
  loading: false,
};

const productsReducer = (state = initialState, action) => {
  const { type } = action;
  //
  switch (type) {
    default:
      return state;
  }
};

export default productsReducer;
