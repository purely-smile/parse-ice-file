import fs = require('fs');
import path = require('path');
const merge = require('merge');
import {
  ice2obj,
  get_file_path_list,
  get_enum_obj,
  get_struct_obj,
  saveFile,
  getHeaderImport,
  get_sequence_obj,
  get_dictionary_obj,
  ice_fn_2_ts,
  saveStructFiles,
  saveIceFuns
} from './lib';

interface ts {
  [id : number] : string
}

saveIceFuns();

const data_dir_path = path.resolve(__dirname, './data');

const file_list = get_file_path_list(data_dir_path);

let total_obj : any = {};
let total_enum = [];
let total_struct = [];
let total_sequence = [];
let total_dictionary = [];
let ts_types = [];
let ts_file_path_arr = [];
let ice_path_obj = {};
let ice_path_stuct_obj = {};

file_list.forEach(file_path => {
  let ice_obj = ice2obj(file_path);
  let struct_obj = get_struct_obj(file_path);
  ice_path_obj[file_path] = ice_obj.module_name;
  ice_path_stuct_obj[file_path] = struct_obj &&struct_obj.struct_names;
  total_obj = merge.recursive(total_obj, ice_obj.ice_obj)
  total_enum.push(...get_enum_obj(file_path));
  struct_obj && total_struct.push(...struct_obj.struceList)
  total_sequence.push(...get_sequence_obj(file_path));
  total_dictionary.push(...get_dictionary_obj(file_path));
});

saveStructFiles(ice_path_obj,ice_path_stuct_obj);

Object.keys(total_obj)
  .filter(module_name=>module_name !== 'NrtApi')
  .forEach(module_name=>{
    let module_info = total_obj[module_name];
    let {dir_name} = module_info;
    Object.keys(module_info)
      .filter(key=>key !== 'dir_name')
      .map(interface_name=>{
        let fns = module_info[interface_name];
        let fn_str = ice_fn_2_ts(dir_name,module_name,interface_name,fns);
        let file_name = module_name+'_'+ interface_name;
        ts_file_path_arr.push(file_name);
        saveFile('./fns/'+file_name+'.ts',fn_str);
      })
  })
saveFile('./fns/index.ts',ts_file_path_arr.map(path=>`export * from './${path}'`).join('\r'));

// fs.writeFileSync('./1.json', JSON.stringify(total_obj));

const types_strs = [`export interface Long{
  high:number,
  low:number
}`].concat(ts_types,total_enum, total_struct,
total_sequence, total_dictionary).map((val:any) => val.body || val).join('\r');

saveFile('types.ts', types_strs);