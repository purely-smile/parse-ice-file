import { Observable } from 'rxjs';
import { Long, QueryCursor, idSet } from '../types';
export declare const Income_fn: {
    query(condJ: string, page: QueryCursor, ctx: any): Observable<any>;
    incomes(ids: idSet, ctx: any): Observable<any>;
    listProcess(incomeId: Long, ctx: any): Observable<any>;
};
