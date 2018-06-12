// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL : 'http://train-api.pnpsw.com',
  firebase : {
    apiKey: "AIzaSyCXnf3xhZ3EHZU5Q6zKbqR6r2YItIDfJ-M",
    authDomain: "fir-web-b7852.firebaseapp.com",
    databaseURL: "https://fir-web-b7852.firebaseio.com",
    projectId: "fir-web-b7852",
    storageBucket: "fir-web-b7852.appspot.com",
    messagingSenderId: "161712578338"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
