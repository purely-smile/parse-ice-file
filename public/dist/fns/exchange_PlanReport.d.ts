import { Observable } from 'rxjs';
import { Long, idSet, SyncDate, QueryCursor } from '../types';
export declare const PlanReport_fn: {
    costSum(planIds: idSet, from: SyncDate, to: SyncDate, ctx: any): Observable<any>;
    reports(planIds: idSet, ctx: any): Observable<any>;
    listStaff(planId: Long, cond: string, page: QueryCursor, ctx: any): Observable<any>;
    fndPlan(staff: idSet, ctx: any): Observable<any>;
};
