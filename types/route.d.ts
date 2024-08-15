export type RootStackParamList = {
  home: undefined;
  Lab031Result: { des: string; result: string } | undefined;
  "Lab03.2": { id: number; title: string } | undefined;
  "Lab03.1": { id: number; title: string } | undefined;
  Lab03: { id: number; title: string } | undefined;
  Lab04: { id: number; title: string } | undefined;
  Lab042: { id: number; title: string } | undefined;
  Lab0421Result: { result: IRESULTEQUATION } | undefined;
};

export interface IRESULTEQUATION {
  x1?: number;
  x2?: number;
  mes?: string;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
