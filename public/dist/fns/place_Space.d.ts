import { Observable } from 'rxjs';
import { Long, QueryCursor, idSet, strSet } from '../types';
export declare const Space_fn: {
    create(name: string, govern: number, longitude: number, latitude: number, owner: Long, extJ: string, cover: string, ctx: any): Observable<any>;
    mySpace(page: QueryCursor, ctx: any): Observable<any>;
    pushExt(space: idSet, extJ: string, ctx: any): Observable<any>;
    pullExt(spaces: idSet, keys: strSet, ctx: any): Observable<any>;
};
