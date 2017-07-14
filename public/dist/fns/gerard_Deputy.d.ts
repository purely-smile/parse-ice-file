import { Observable } from 'rxjs';
import { Long, idSet } from '../types';
export declare const Deputy_fn: {
    create(accountId: Long, location: number, name: string, info: string, ctx: any): Observable<any>;
    get(accountId: Long, ctx: any): Observable<any>;
    query(cond: string, ctx: any): Observable<any>;
    deputies(deputyIds: idSet, ctx: any): Observable<any>;
};
