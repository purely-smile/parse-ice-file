import { Observable } from 'rxjs';
import { Long, idSet, QueryCursor } from '../types';
export declare const Audit_fn: {
    insertGrp(rooms: idSet, grpId: Long, ctx: any): Observable<any>;
    createGroup(name: string, ctx: any): Observable<any>;
    listGrp(ctx: any): Observable<any>;
    listRooms(grpId: Long, ctx: any): Observable<any>;
    groups(grps: idSet, ctx: any): Observable<any>;
    check(ads: idSet, grpId: Long, ctx: any): Observable<any>;
    checkGrp(rooms: idSet, ctx: any): Observable<any>;
    waitList(cond: string, page: QueryCursor, ctx: any): Observable<any>;
    adperms(permIds: idSet, ctx: any): Observable<any>;
    handle(adId: idSet, grpId: Long, pass: boolean, opinion: string, ctx: any): Observable<any>;
};
