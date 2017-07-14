import { Observable } from 'rxjs';
import { Long, idSet, QueryCursor, PillarVer } from '../types';
export declare const Maintain_fn: {
    space(spaceId: Long, pushInfo: string, ctx: any): Observable<any>;
    alives(settles: idSet, ctx: any): Observable<any>;
    findSettle(cond: string, page: QueryCursor, ctx: any): Observable<any>;
    checkValid(settles: idSet, cond: string, ctx: any): Observable<any>;
    updateRom(rooms: idSet, nver: PillarVer, ctx: any): Observable<any>;
    alive(settleId: Long, cond: string, ctx: any): Observable<any>;
};
