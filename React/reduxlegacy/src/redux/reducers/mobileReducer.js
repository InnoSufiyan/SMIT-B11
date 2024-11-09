const mobileInitial = {
  brands: [],
  sales: 0,
  purchase: 0,
  customers: [],
};

export function mobileReducer(state = mobileInitial, action) {
  switch (action.type) {
    case "addBrands":
      return state;

    case "addSales":
      return state;

    case "addPurchases":
      return state;

    case "addCustomers":
      return state;

    default:
      return state;
  }
}
