import { Observable } from 'rxjs';
import { Long, idSet, GoodOf, QueryCursor } from '../types';
export declare const Order_fn: {
    place(items: idSet, src: GoodOf, ext: string, ctx: any): Observable<any>;
    orderQuery(cond: string, cursor: QueryCursor, ctx: any): Observable<any>;
    orderGet(orders: idSet, ctx: any): Observable<any>;
    cancel(orderId: Long, ctx: any): Observable<any>;
};
