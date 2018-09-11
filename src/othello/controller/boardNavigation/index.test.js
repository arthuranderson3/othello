import { top, topLeft, topRight } from './index';
import { right, left } from './index';
import { bottom, bottomRight, bottomLeft } from './index';

describe('boardNavigation Test Suite', () => {
  it('top(8)=0', () => {
    expect(top(8)).toBe(0);
  });
  it('top(63)=55', () => {
    expect(top(63)).toBe(55);
  });

  it('top(0).undefined', () => {
    expect(top(0)).toBeUndefined();
  });
  it('top(65).undefined', () => {
    expect(top(65)).toBeUndefined();
  });

  it('topLeft(9)=0', () => {
    expect(topLeft(9)).toBe(0);
  });
  it('topLeft(10)=1', () => {
    expect(topLeft(10)).toBe(1);
  });

  it('topLeft(0).undefined', () => {
    expect(topLeft(0)).toBeUndefined();
  });
  it('topLeft(7).undefined', () => {
    expect(topLeft(7)).toBeUndefined();
  });
  it('topRight(9)=2', () => {
    expect(topRight(9)).toBe(2);
  });
  it('topRight(10)=3', () => {
    expect(topRight(10)).toBe(3);
  });

  it('topRight(0).undefined', () => {
    expect(topRight(0)).toBeUndefined();
  });
  it('topRight(6).undefined', () => {
    expect(topRight(6)).toBeUndefined();
  });

  it('left(9)=8', () => {
    expect(left(9)).toBe(8);
  });
  it('left(10)=9', () => {
    expect(left(10)).toBe(9);
  });

  it('left(0).undefined', () => {
    expect(left(0)).toBeUndefined();
  });
  it('left(8).undefined', () => {
    expect(left(8)).toBeUndefined();
  });

  it('right(9)=10', () => {
    expect(right(9)).toBe(10);
  });
  it('right(10)=11', () => {
    expect(right(10)).toBe(11);
  });

  it('right(7).undefined', () => {
    expect(right(7)).toBeUndefined();
  });
  it('right(63).undefined', () => {
    expect(right(63)).toBeUndefined();
  });

  it('bottom(0)=8', () => {
    expect(bottom(0)).toBe(8);
  });
  it('bottom(1)=9', () => {
    expect(bottom(1)).toBe(9);
  });

  it('bottom(-1).undefined', () => {
    expect(bottom(-1)).toBeUndefined();
  });
  it('bottom(58).undefined', () => {
    expect(bottom(58)).toBeUndefined();
  });

  it('bottomRight(0)=9', () => {
    expect(bottomRight(0)).toBe(9);
  });
  it('bottomRight(1)=10', () => {
    expect(bottomRight(1)).toBe(10);
  });

  it('bottomRight(7).undefined', () => {
    expect(bottomRight(7)).toBeUndefined();
  });
  it('bottomRight(63).undefined', () => {
    expect(bottomRight(63)).toBeUndefined();
  });

  it('bottomLeft(1)=8', () => {
    expect(bottomLeft(1)).toBe(8);
  });
  it('bottomLeft(2)=9', () => {
    expect(bottomLeft(2)).toBe(9);
  });

  it('bottomLeft(0).undefined', () => {
    expect(bottomLeft(0)).toBeUndefined();
  });
  it('bottomLeft(62).undefined', () => {
    expect(bottomLeft(62)).toBeUndefined();
  });
});
