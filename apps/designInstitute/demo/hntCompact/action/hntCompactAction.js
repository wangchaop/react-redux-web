import {message } from 'antd';
import {HNT_COMPACT_ACTION_TEST} from '../../../actions/ActionTypes.js';
//¸ü¸Ä×´Ì¬
export function changeState(data) {
    console.log('action=============>',data);
    return {
        type: "abc",
        data,
    };
}