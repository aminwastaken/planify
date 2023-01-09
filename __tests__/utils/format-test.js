// testing utils functions
import React from 'react';
import {getFormattedDate} from '../../utils/format';

describe('getFormattedDate', () => {
  it('should return the date in short format', () => {
    const date = new Date('2020-01-01');
    const formattedDate = getFormattedDate(date, 'short');
    expect(formattedDate).toBe('Jan 1');
  });

  it('should return the date in long format', () => {
    const date = new Date('2020-01-01');
    const formattedDate = getFormattedDate(date, 'long');
    expect(formattedDate).toBe('Wed, Jan 1, 2020');
  });
});
