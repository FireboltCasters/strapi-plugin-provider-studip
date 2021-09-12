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
  expect(config.enabled).toBe(enabled);
  expect(config.icon).toBe(icon);
  expect(config.callback).toBeTruthy();
});

test('Config Test missing provider', async () => {
  // @ts-ignore
  let config = StudipGrantConfig.getGrantConfig(enabled, fakeStapi, null, icon);

  expect(config).toBeTruthy();
});

test('Config Test default icon', async () => {
  let config = StudipGrantConfig.getGrantConfig(
    enabled,
    fakeStapi,
    provider,
    // @ts-ignore
    null
  );

  expect(config).toBeTruthy();
  expect(config.icon).toBe(StudipGrantConfig.DEFAULT_ICON);
});
