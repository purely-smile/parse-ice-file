import { Observable } from 'rxjs';
import { Long, idSet, PayMethodSet, strSet } from '../types';
export declare const Pay_fn: {
    getDeal(pays: idSet, ctx: any): Observable<any>;
    checkOut(deal: Long, methods: PayMethodSet, ctx: any): Observable<any>;
    verify(deal: Long, ctx: any): Observable<any>;
    pays(pays: idSet, ctx: any): Observable<any>;
    pullExt(pays: idSet, keys: strSet, ctx: any): Observable<any>;
    queryPPCharges(chargeIds: strSet, ctx: any): Observable<any>;
};
