import { Observable } from 'rxjs';
import { Long, Clause, idSet, QueryCursor } from '../types';
export declare const Corp_fn: {
    create(accountId: Long, detail: Clause, ctx: any): Observable<any>;
    clauses(clauseIds: idSet, ctx: any): Observable<any>;
    query(cond: string, ctx: any): Observable<any>;
    goGerard(clause: Long, account: Long, gerard: Long, cut: number, ctx: any): Observable<any>;
    listWine(identity: number, cond: string, page: QueryCursor, ctx: any): Observable<any>;
    wines(wines: idSet, ctx: any): Observable<any>;
    enquiry(rooms: idSet, ctx: any): Observable<any>;
};
