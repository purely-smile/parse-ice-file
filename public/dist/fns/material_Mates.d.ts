import { Observable } from 'rxjs';
import { Long, MateType, idSet, QueryCursor, strSet } from '../types';
export declare const Mates_fn: {
    specQuery(type: MateType, ctx: any): Observable<any>;
    specs(ids: idSet, ctx: any): Observable<any>;
    create(typ: MateType, specId: idSet, name: string, cont: string, extJ: string, segs: number, ctx: any): Observable<any>;
    pushExt(mateId: Long, extJ: string, ctx: any): Observable<any>;
    mateQuery(condJ: string, page: QueryCursor, ctx: any): Observable<any>;
    dropMaterial(mateId: Long, ctx: any): Observable<any>;
    check(ids: idSet, ctx: any): Observable<any>;
    checkExt(ads: idSet, keys: strSet, ctx: any): Observable<any>;
    clusterAggr(clusterId: Long, ctx: any): Observable<any>;
    inUse(ids: idSet, lvl: number, ctx: any): Observable<any>;
    listUse(ids: idSet, ctx: any): Observable<any>;
};
