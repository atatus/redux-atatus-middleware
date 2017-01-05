// redux-atatus-middleware
declare var atatus: any;

export default function createMiddleware () {
    return store => next => action => {
      try {
        return next(action); // dispatch
      } catch (err) {
        atatus.notify(err, { // send to crash reporting tool
          extra: {
            action,
          }
        });
        throw err; // re-throw error
      }
    }
}