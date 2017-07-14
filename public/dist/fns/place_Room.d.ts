import { Observable } from 'rxjs';
import { Long, idSet, strSet } from '../types';
export declare const Room_fn: {
    create(name: string, spaceId: Long, ctx: any): Observable<any>;
    pushExt(room: idSet, extJ: string, ctx: any): Observable<any>;
    pullExt(rooms: idSet, keys: strSet, ctx: any): Observable<any>;
};
