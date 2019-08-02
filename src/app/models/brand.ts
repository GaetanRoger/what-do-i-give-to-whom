import { ObjectID } from './object-id';

export interface Brand extends ObjectID {
  name: string;
  images: {
    logo: string;
    symbol: string;
  };
}
