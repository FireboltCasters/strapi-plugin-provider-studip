import StudipGrantConfig from '../StudipGrantConfig';

const fakeStapi = {
  config: {
    server: {
      url: 'http://localhost',
    },
  },
};
const provider = 'myuos';
const enabled = true;
const icon = 'book';

test('Config Test', async () => {
  let config = StudipGrantConfig.getGrantConfig(
    enabled,
    fakeStapi,
    provider,
    icon
  );

  expect(config).toBeTruthy();
  const providerConfig = config[provider];
  expect(providerConfig).toBeTruthy();
  expect(providerConfig.enabled).toBe(enabled);
  expect(providerConfig.icon).toBe(icon);
  expect(providerConfig.callback).toBeTruthy();
});

test('Config Test missing provider', async () => {
  // @ts-ignore
  let config = StudipGrantConfig.getGrantConfig(enabled, fakeStapi, null, icon);

  expect(config).toBeTruthy();
  const providerConfig = config[StudipGrantConfig.DEFAULT_PROVIDER_NAME];
  expect(providerConfig).toBeTruthy();
});

test('Config Test default icon', async () => {
  // @ts-ignore
  let config = StudipGrantConfig.getGrantConfig(
    enabled,
    fakeStapi,
    provider,
    null
  );

  expect(config).toBeTruthy();
  const providerConfig = config[provider];
  expect(providerConfig).toBeTruthy();
  expect(providerConfig.icon).toBe(StudipGrantConfig.DEFAULT_ICON);
});
