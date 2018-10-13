import randomInt from './randomInt';

describe('randomInt test suite', () => {
  it('randomInt#success', () => {
    const result = randomInt(0, 10);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('randomInt#success 1000 times', () => {
    let count = 0;
    let randCounterDistribution = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    while (count < 1000) {
      const result = randomInt(0, 10);
      randCounterDistribution[result] = randCounterDistribution[result] + 1;
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(10);
      count++;
    }
    console.log(randCounterDistribution);
  });
});
