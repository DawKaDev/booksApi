const formatFullname = require('../formatFullname.js');
const { expect } = require('chai');

describe('formatFullname', () => {
  it('should return an error if "fullName" is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" is not a string', () => {
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(function(){})).to.equal('Error');
  });

  it('should return an error if "fullName" is not correct format', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe Junior')).to.equal('Error');
  });

  it('should return correct "fullName"', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  })
});