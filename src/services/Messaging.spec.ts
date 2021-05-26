import { Messaging } from './Messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // SUT -> System Under Test
    const sutMessaging = createSut();

    expect(sutMessaging.send('teste')).toBeUndefined();
  });

  it('should call log once with "Sent message: " and message', () => {
    const sutMessaging = createSut();
    const consoleSpy = jest.spyOn(console, 'log');

    const message = 'teste';
    sutMessaging.send(message);
    expect(consoleSpy).toHaveBeenCalledWith('Sent message: ', message);
  });

  it('should call log once', () => {
    const sutMessaging = createSut();
    const consoleSpy = jest.spyOn(console, 'log');

    sutMessaging.send('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
