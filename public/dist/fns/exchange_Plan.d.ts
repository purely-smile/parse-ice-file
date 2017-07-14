import { Observable } from 'rxjs';
import { Long, PlanInfo, PlanCond, PlanCont, QueryCursor, idSet, PlanStat } from '../types';
export declare const Plan_fn: {
    publish(info: PlanInfo, ctx: any): Observable<any>;
    bindCond(planId: Long, cond: PlanCond, ctx: any): Observable<any>;
    bindRooms(planId: Long, rooms: any, ctx: any): Observable<any>;
    bindCont(planId: Long, cont: PlanCont, ctx: any): Observable<any>;
    planQuery(cond: string, page: QueryCursor, ctx: any): Observable<any>;
    plans(ids: idSet, ctx: any): Observable<any>;
    planConds(ids: idSet, ctx: any): Observable<any>;
    planConts(ids: idSet, ctx: any): Observable<any>;
    planRoom(planId: Long, ctx: any): Observable<any>;
    planOp(planId: Long, stat: PlanStat, ctx: any): Observable<any>;
};
