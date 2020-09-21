# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE_: This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mitra_nami/lotide`

**Require it:**

`const _ = require('mitra_nami/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of the array
* `tail(array)`: returns the array without the first element
* `middle(array)`: returns the middle of the array
* `map(array, callback)`: returns elements of an array based on the callback function
* `without(source, itemsToRemove)`: returns a subset of a given array,removing unwanted elements
* `takeUntil(array, callback)`: returns an array whose elements are from the array until the callback returns a truthy value
* `eqArrays(array1, array2)`: returns true if the arrays are equal otherwise false
* `countLetters(string)`: returns an object with letters as keys an their counts as values
* `findKey(obj, callback)`: returns the first key of the obj for which the callback returns a truthy value
* `letterPositions(string)`: returns an obj whose keys are letters and values are arrays of indicies
* `eqObjects(obj1, obj2)`: returns true if obj1 and obj2 are equal otherwise false
* `flatten(array)`: returns the un-nested array
* 