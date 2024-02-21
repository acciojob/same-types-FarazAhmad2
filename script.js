function isSameType(value1, value2) {
  //your js code here
	if (typeof value1 === typeof value2) {
    // If both values are NaN, return true
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
    // If neither value is NaN, return true
    if (!isNaN(value1) && !isNaN(value2)) {
        return true;
    }
    // If one value is NaN and the other is not, return false
    return false;
}
// If types are different, return false
return false;
};

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
