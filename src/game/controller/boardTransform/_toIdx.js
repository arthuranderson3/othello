import _ from 'lodash';

export function toIdx ( obj ) {
    if( !_.isUndefined(obj) && !_.isUndefined(obj.row) && !_.isUndefined(obj.col) ) { 
        return obj.row * 8 + obj.col;
    }
    return undefined;
}