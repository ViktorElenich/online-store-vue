import { CommitOptions, Payload } from 'vuex';

export interface IProducts {
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: Array<string>,
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  title: string
}
export interface State {
  products: IProducts[],
  isProductsLoading: boolean,
  categories: Array<string>
}
export interface Commit {
  (type: string, payload?: any, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}
