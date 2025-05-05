import { connectToDb } from './db/index';
import { app } from './app';
import { config } from './configAndConstants';

connectToDb().then((resolve) => {
  app.listen(config.PORT, () => {
    console.log('Listening in ', config.NODE_ENV);
  });
});
