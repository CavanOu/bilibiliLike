/**
 * @ func 实现小于一万直接显示，大于一万保留两位小数
 * @ prames {num}
 * 
 */

export const NumberFormat = (number) => {
    if (number < 10000) {
        return number;
    } else {
        if (Math.round((number % 10000) / 1000) == 0) {
            return Math.round(number / 10000) + '万';
        } else {
            return (number / 10000).toFixed(1) + '万';
        }
    }
}


/**
 * @author Cavan
 * @func 根据 path 判断是否部分在数组中
 * @param {path string}
 * @return boolean 
 */
export const isPathPartlyExisted = (path) => {
    const arr = ['/', '/shouye'];
    // 任何情况下 结果数组的第二项都是arr里的匹配项 return true
    const pathRes = path.split('/');
    if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true;
    return false;
}
