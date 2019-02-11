export type memeIdType = string;

export interface MemeItemInterface {
  id: memeIdType;
  name: string;
  url: string;
  height: number;
  width: number;
}

export type lovedIdsType = Set<memeIdType>;
export interface MemesInterface {
  data?: MemeItemInterface[];
  lovedIds: lovedIdsType;
}

export interface StoreInterface {
  memes: MemesInterface;
}
