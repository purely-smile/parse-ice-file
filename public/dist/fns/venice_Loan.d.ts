import { Observable } from 'rxjs';
import { Long, QueryCursor, idSet } from '../types';
export declare const Loan_fn: {
    charge(deputy: Long, cash: number, noteJ: string, ctx: any): Observable<any>;
    confirmCharge(flowId: Long, ctx: any): Observable<any>;
    given(account: Long, cash: number, noteJ: string, ctx: any): Observable<any>;
    setLine(account: Long, line: number, ctx: any): Observable<any>;
    mine(ctx: any): Observable<any>;
    flowQuery(cond: string, page: QueryCursor, ctx: any): Observable<any>;
    flows(flows: idSet, ctx: any): Observable<any>;
};
