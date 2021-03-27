import { FormatStepPipe } from './format-step.pipe';

describe('FormatStepPipe', () => {
  let pipe: FormatStepPipe;

  beforeEach(() => {
    pipe = new FormatStepPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should add a zero to a single length character', () => {
      expect(pipe.transform('4')).toBe('04');
  });
  it('should return the value if the strind length is more than one', () => {
      expect(pipe.transform('04')).toBe('04');
  });
});
