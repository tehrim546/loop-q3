"use strict";
//Use a loop to find the index of a specific element in an array. Iterate through the array and check for equality.
function findIndex(array, targetElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === targetElement) {
            return i; //return the index when the elementis found
        }
    }
    return -1; //return -1 if the element not found in the array
}
//example usage:
const myArray = [1, 2, 3, 4, 5];
const targetElement = 3;
const index = findIndex(myArray, targetElement);
if (index !== -1) {
    console.log(`Element${targetElement}found at index ${index}.`);
}
else {
    console.log(`Element ${targetElement} not found in the array.`);
}
