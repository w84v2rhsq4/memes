export type memeIdType = string;

export interface MemeItemInterface {
  id: memeIdType;
  name: string;
  url: string;
  height: number;
  width: number;
}

export interface MemesInterface {
  data?: MemeItemInterface[];
  lovedIds: Set<memeIdType>;
}

export interface StoreInterface {
  memes: MemesInterface;
}
