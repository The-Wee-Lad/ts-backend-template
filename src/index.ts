import { connectToDb } from './db/index.js';
import { app } from './app.js';
import { config } from './configAndConstants.js';

connectToDb().then((resolve) => {
  app.listen(config.PORT, () => {
    console.log('Listening in ', config.NODE_ENV);
  });
});
