export type RootStackParamList = {
  home: undefined;
  Lab031Result: { des: string; result: string } | undefined;
  "Lab03.2": { id: number; title: string } | undefined;
  "Lab03.1": { id: number; title: string } | undefined;
  Lab03: { id: number; title: string } | undefined;
  Lab04: { id: number; title: string } | undefined;
  Lab042: { id: number; title: string } | undefined;
  Course: { id: number; title: string } | undefined;
  Product: { id: number; title: string } | undefined;
  Lab05: { id: number; title: string } | undefined;
  Lab0421Result: { result: IRESULTEQUATION } | undefined;
  CourseDetail: {course:ICOURSE } | undefined;
  ProductDetail: {course:ICOURSE } | undefined;
  
};

export interface IRESULTEQUATION {
  x1?: number;
  x2?: number;
  mes?: string;
}

export interface ICOURSE {
  id:number,
  name: string;
  price: number;
  desc: string;
  image:string

}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}


