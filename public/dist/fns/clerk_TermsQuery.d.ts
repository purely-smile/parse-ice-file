import { Observable } from 'rxjs';
import { termType } from '../types';
export declare const TermsQuery_fn: {
    spaces(term: termType, ctx: any): Observable<any>;
    rooms(term: termType, ctx: any): Observable<any>;
};
