import { Observable } from 'rxjs';
import { Long } from '../types';
export declare const Task_fn: {
    areas(ctx: any): Observable<any>;
    settleStat(cond: string, ctx: any): Observable<any>;
    active(devCode: string, preCode: string, settleId: Long, ctx: any): Observable<any>;
    deactive(settleId: Long, reason: string, ctx: any): Observable<any>;
};
