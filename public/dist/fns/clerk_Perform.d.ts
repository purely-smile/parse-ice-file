import { Observable } from 'rxjs';
import { Long, idSet, QueryCursor } from '../types';
export declare const Perform_fn: {
    querySum(spaces: idSet, cond: string, ctx: any): Observable<any>;
    queryDetail(roomId: Long, cond: string, page: QueryCursor, ctx: any): Observable<any>;
};
