export function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      // Log actions
      console.log(`[LOG]: ${action.type} ${new Date().toString()}`);
      // call next middleware in the pipeline
      next(action);
      // check the modified state
      console.log(store.getState());
    };
  };
}
