const bikeInitial = {
  brands: [],
  sales: 0,
  purchases: 0,
  customers: [],
};

export function bikeReducer(state = bikeInitial, action) {
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
