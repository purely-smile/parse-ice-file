import { Observable } from 'rxjs';
import { QueryCursor, idSet, strSet, TagType } from '../types';
export declare const InfoQuery_fn: {
    spaceQuery(cond: string, page: QueryCursor, ctx: any): Observable<any>;
    spaces(spaces: idSet, ctx: any): Observable<any>;
    spaceExt(spaces: idSet, keys: strSet, ctx: any): Observable<any>;
    roomQuery(cond: string, page: QueryCursor, ctx: any): Observable<any>;
    rooms(rooms: idSet, ctx: any): Observable<any>;
    settleQuery(cond: string, page: QueryCursor, ctx: any): Observable<any>;
    settles(settles: idSet, ctx: any): Observable<any>;
    skuQuery(cond: string, page: QueryCursor, ctx: any): Observable<any>;
    skus(skus: idSet, ctx: any): Observable<any>;
    tags(ids: idSet, typ: TagType, ctx: any): Observable<any>;
    tagMod(ids: idSet, typ: TagType, tags: strSet, append: boolean, ctx: any): Observable<any>;
};
