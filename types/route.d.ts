type RootStackParamList = {
  home: undefined;
  "Lab031Result": {  des: string,result:string  } | undefined;
  "Lab03.2": { id: number; title: string;  } | undefined;
  "Lab03.1": { id: number; title: string;  } | undefined;
  "Lab03": { id: number; title: string;  } | undefined;
};

declare global {
  namespace ReactNavigation {
      interface RootParamList extends RootStackParamList { }
  }
}