import { Observable } from 'rxjs';
import { Long } from '../types';
export declare const Rset_fn: {
    create(name: string, ctx: any): Observable<any>;
    append(rsetId: Long, roomId: Long, ctx: any): Observable<any>;
    remove(rsetId: Long, roomId: Long, ctx: any): Observable<any>;
    query(cond: string, ctx: any): Observable<any>;
    listRes(rsetId: Long, ctx: any): Observable<any>;
};
