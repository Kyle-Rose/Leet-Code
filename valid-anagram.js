/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    sortedS = s.split("").sort();
    sortedT = t.split("").sort();
    if (sortedS.length === sortedT.length){
        return sortedS.every((value, index) => value === sortedT
        [index]);
    }
    return false;
};