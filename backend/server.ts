import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' })

import { app } from './app';


app.listen(process.env.PORT, () => {
  console.log( " Server running on ${process.env.PORT}...")
});