import tape from 'tape';
import { checkTriangle } from '../../src/js/validation/checkTriangle'

tape('checkTriangle input should not be a string', t => {
    var actual = checkTriangle('teststring', '1', '1');
    var expected = false;
    t.equal(actual.isValidTriangle, expected, 'checkTriangle input should be a number');
    t.end();
})

tape('checkTriangle input must be a positive number', t => {
    var actual = checkTriangle('-1', '1', '1');
    var expected = false;
    t.equal(actual.isValidTriangle, expected, 'checkTriangle input should be a positive number');
    t.end();
})

tape('checkTriangle input must not use a comma', t => {
    var actual = checkTriangle('3,5', '2', '2');
    var expected = false;
    t.equal(actual.isValidTriangle, expected, 'checkTriangle input should use dot, not comma');
    t.end();
})

tape('checkTriangle input can contain decimals', t => {
    var actual = checkTriangle('1.5', '1', '2');
    var expected = true;
    t.equal(actual.isValidTriangle, expected, 'checkTriangle input can contain decimals');
    t.end(); 
})

tape('checkTriangle should return "The triangle is Equilateral" when all sides are equal', t => {
    var actual = checkTriangle('1', '1', '1');
    var expected = 'The triangle is Equilateral';
    t.equal(actual.result, expected, 'checkTriangle input should return "The triangle is Equilateral" when all sides are equal');
    t.end(); 
})

tape('checkTriangle should return "The triangle is Isosceles" when 2 sides are equal but no the third', t => {
    var actual = checkTriangle('1', '1', '2');
    var expected = 'The triangle is Isosceles';
    t.equal(actual.result, expected, 'checkTriangle should return "The triangle is Isosceles" when 2 sides are equal but no the third');
    t.end(); 
})

tape('checkTriangle should return "The triangle is Scalene" when 2 sides are equal but no the third', t => {
    var actual = checkTriangle('1', '2', '3');
    var expected = 'The triangle is Scalene';
    t.equal(actual.result, expected, 'checkTriangle should return "The triangle is Scalene" when 2 sides are equal but no the third');
    t.end(); 
})
