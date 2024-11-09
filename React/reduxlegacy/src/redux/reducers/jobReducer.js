const jobInitial = {
  category: [],
  filterations: [],
  jobs: [],
  users: [],
};

export function jobReducer(state = jobInitial, action) {
  switch (action.type) {
    case "addJobs":
      return { ...state, jobs: action.payload };

    case "addCategory":
      return state;

    case "addFilters":
      return state;

    case "addUsers":
      return state;

    default:
      return state;
  }
}

