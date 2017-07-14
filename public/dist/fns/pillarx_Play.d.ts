import { Observable } from 'rxjs';
import { idSet } from '../types';
export declare const Play_fn: {
    checkDanmu(ctx: any): Observable<any>;
    danmus(ids: idSet, ctx: any): Observable<any>;
    topic(ads: idSet, ctx: any): Observable<any>;
};
