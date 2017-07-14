import { Observable } from 'rxjs';
import { Long } from '../types';
export declare const Identify_fn: {
    preRegist(idJ: string, ctx: any): Observable<any>;
    regist(mobile: string, password: string, ctx: any): Observable<any>;
    login(idJ: string, password: string, ctx: any): Observable<any>;
    bind(plat: string, ctx: any): Observable<any>;
    logout(ctx: any): Observable<any>;
    query(mobile: string, ctx: any): Observable<any>;
    get(accountId: Long, ctx: any): Observable<any>;
};
