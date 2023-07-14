
//用于css中计算rem  因为我们用的是 1920的设计图 然后我们 除以 24 就得到的80px = 1rem
export const rem = (px) => {
    return px / 80 + 'rem';
};