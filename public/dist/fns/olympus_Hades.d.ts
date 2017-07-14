import { Observable } from 'rxjs';
import { Long } from '../types';
export declare const Hades_fn: {
    dropRoom(room: Long, ctx: any): Observable<any>;
    dropSpace(space: Long, ctx: any): Observable<any>;
    dropSettle(settle: Long, ctx: any): Observable<any>;
};
