import { Observable } from 'rxjs';
import { idSet, QueryCursor } from '../types';
export declare const Deal_fn: {
    checkOut(orders: idSet, ctx: any): Observable<any>;
    charge(amo: number, ctx: any): Observable<any>;
    query(cond: string, page: QueryCursor, ctx: any): Observable<any>;
    deals(deals: idSet, ctx: any): Observable<any>;
};
