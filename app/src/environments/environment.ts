// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapboxkey: 'pk.eyJ1IjoibWljaGVsbGVpc2liYWNoIiwiYSI6ImNrdHZ1OGdhNjBud2cydXA4Mm83ZzRoeHkifQ.i590vDxjGEaBDzQI2PppQA',
  geolocation: { 'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
  'icon': 'theatre-15'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-77.038659, 38.931567]
  }
  }
  ] }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
