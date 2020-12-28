import { Text } from 'slate';

interface o {
  [key: string]: any
}

type Observable<T> = T extends o ? (T & PickObservableObject): T;

interface PickObservableObject {
  __ob__: any
}

export type FlatObservableArray<T> = T extends (infer U)[] ? Observable<U> : T;

export interface RenderLeafProps {
  children: any
  leaf: Text
  text: Text
  attributes: {
    'data-slate-leaf': true
  }
}