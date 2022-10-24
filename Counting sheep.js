//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let sum = 0;
    arrayOfSheep.filter((item) => {
        if (item==true) {
          return  sum+1;
        } else{
            return false;
        }
    });
    return sum;
}