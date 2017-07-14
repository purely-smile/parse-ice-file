import { Observable } from 'rxjs';
import { idSet, QueryCursor } from '../types';
export declare const Counter_fn: {
    get(ctx: any): Observable<any>;
    cards(cards: idSet, ctx: any): Observable<any>;
    proceed(ctx: any): Observable<any>;
    checkWithdraw(condJ: string, page: QueryCursor, ctx: any): Observable<any>;
    withdraws(ids: idSet, ctx: any): Observable<any>;
};
