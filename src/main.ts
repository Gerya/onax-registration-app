import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log('Bootstrap success'))
    .catch(error => console.log(error));
};

if (!!window['cordova']) {
  document.addEventListener('deviceready', bootstrap);
  try {
    //(<any>cordova).plugins.screenorientation.setOrientation('portrait');
    (<any>screen).orientation.lock('landscape');
  }
  catch (err) {
    console.error('Orientation error: ' + err.message);
  }
} else {
  bootstrap();
}
