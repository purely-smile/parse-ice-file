/**
 * 是否数ice module 定义语句，如果不是返回false
 * @param str
 */
export declare function is_ice_module(str: string): string | false;
/**
 * 判断是否数interface语句
 * @param str
 */
export declare function is_ice_interface(str: string): string | false;
/**
 * 判断是否数 fn 语句
 * @param str
 */
export declare function is_ice_fn(str: string): false | {
    fn_name: string;
    fn_type: string;
    fn_arguments: {
        argu_name: string;
        type: string;
    }[];
};
