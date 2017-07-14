import { Observable } from 'rxjs';
import { Long, PrePutSet, idSet, QueryCursor } from '../types';
export declare const CartPut_fn: {
    mod(item: Long, infoJ: string, ctx: any): Observable<any>;
    push(item: PrePutSet, ctx: any): Observable<any>;
    drop(items: idSet, ctx: any): Observable<any>;
    list(cursor: QueryCursor, ctx: any): Observable<any>;
    stockCheck(roomId: Long, condJ: string, withCart: boolean, ctx: any): Observable<any>;
    clear(ctx: any): Observable<any>;
};
