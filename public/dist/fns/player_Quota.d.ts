import { Observable } from 'rxjs';
import { Long, PluBody, idSet, QueryCursor } from '../types';
export declare const Quota_fn: {
    arrange(body: PluBody, rooms: idSet, ctx: any): Observable<any>;
    check(condJ: string, page: QueryCursor, ctx: any): Observable<any>;
    quotas(quota: idSet, ctx: any): Observable<any>;
    overLook(quotas: idSet, ctx: any): Observable<any>;
    arrangeMate(quotas: idSet, mate: Long, ctx: any): Observable<any>;
    pickMate(quotas: idSet, ctx: any): Observable<any>;
};
