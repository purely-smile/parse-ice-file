import { Observable } from 'rxjs';
import { QueryCursor, idSet } from '../types';
export declare const Pool_fn: {
    query(cond: string, page: QueryCursor, ctx: any): Observable<any>;
    frozens(frozenset: idSet, ctx: any): Observable<any>;
};
