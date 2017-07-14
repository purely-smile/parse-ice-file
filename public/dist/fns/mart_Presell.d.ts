import { Observable } from 'rxjs';
import { idSet, PluTyp, SyncDate } from '../types';
export declare const Presell_fn: {
    checkStock(rooms: idSet, typ: PluTyp, from: SyncDate, to: SyncDate, ctx: any): Observable<any>;
    checkPrice(rooms: idSet, typ: PluTyp, ctx: any): Observable<any>;
};
