import { Observable } from 'rxjs';
import { idSet, WithdrawProc, QueryCursor } from '../types';
export declare const BankTeller_fn: {
    checkDefault(owners: idSet, ctx: any): Observable<any>;
    checkProceed(owners: idSet, ctx: any): Observable<any>;
    withdrawTask(proc: WithdrawProc, page: QueryCursor, ctx: any): Observable<any>;
    withdrawOp(ids: idSet, dest: WithdrawProc, noteJ: string, ctx: any): Observable<any>;
};
