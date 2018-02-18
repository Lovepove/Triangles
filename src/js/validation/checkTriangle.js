export {
    checkTriangle
}

function checkTriangle(side1, side2, side3) {
    let result = {
        sides: [side1, side2, side3],
        isValidTriangle: true,
        result: ''
    }

    let validation = validateTriangleInput(side1,side2,side3)

    if (!validation.isValidTriangle) {
        result.result = validation.errorString;
        result.isValidTriangle = false;
        return result;
    } else if (side1 === side2 && side2 === side3) {
        result.result = 'The triangle is Equilateral' 
        return result;
    } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        result.result = 'The triangle is Isosceles'
        return result;
    } else {
        result.result = 'The triangle is Scalene'
        return result;
    }
    result.result = 'unexpected error';
    return result;
}

function validateTriangleInput(side1, side2, side3) {
    let returnObject = {
        isValidTriangle: false,
        errorString: 'Ok'
    }
    if (isNaN(side1)) {
        if (side1.indexOf(',') >= 0) {
            returnObject.errorString = 'Side 1 cannot use comma, use dot instead'
        } else {
            returnObject.errorString = 'Side 1 needs to be a number';
        }
        returnObject.isValidTriangle = false;
        return returnObject;
    }
    if (Number(side1) < 0) {
        returnObject.errorString = 'Side 1 needs to be a number';
        return returnObject;
    }
    if (isNaN(side2)) {
        if (side2.indexOf(',') >= 0) {
            returnObject.errorString = 'Side 2 cannot use comma, use dot instead'
        } else {
            returnObject.errorString = 'Side 2 needs to be a number';
        }
        return returnObject;
    }
    if (Number(side2) < 0) {
        returnObject.errorString = 'Side 2 needs to be positive';
        return returnObject;
    }
    if (isNaN(side3)) {
        if (side3.indexOf(',') >= 0) {
            returnObject.errorString = 'Side 3 cannot use comma, use dot instead'
        } else {
            returnObject.errorString = 'Side 3 needs to be a number';
        }        return returnObject;
    }
    if (Number(side3) < 0) {
        returnObject.errorString = 'Side 3 needs to be positive';
        return returnObject;
    }
    returnObject.isValidTriangle = true;
    return returnObject;
}
