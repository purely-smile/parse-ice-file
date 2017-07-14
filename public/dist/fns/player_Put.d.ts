import { Observable } from 'rxjs';
import { idSet, PlaySet } from '../types';
export declare const Put_fn: {
    fillAd(quotas: idSet, ps: PlaySet, ctx: any): Observable<any>;
    listAd(quotas: idSet, ctx: any): Observable<any>;
};
