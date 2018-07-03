import envDev from './development';
import envProd from './production';

let Env;

if (process.env.NODE_ENV == 'development') {
  Env = envDev;
} else if (process.env.NODE_ENV == 'production') {
  Env = envProd;
}

export default Env;
