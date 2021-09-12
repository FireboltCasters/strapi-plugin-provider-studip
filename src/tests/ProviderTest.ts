import StudipProvider from '../StudipProvider';
import {FakeBackend, UrlHelper} from 'studip-api';

const fakeUser = FakeBackend.getRawExampleUser();
const username = fakeUser.username;
const password = 'User1234';
const domain = 'http://localhost';

const access_token = {
  username: username,
  password: password,
};

test('Provider Test', async () => {
  FakeBackend.IS_ACTIVE = true;

  const callback = async (err: any, user: any) => {
    expect(err).toBeFalsy();
    expect(user).toBeTruthy();
    expect(user.username).toBe(username);
    expect(user.email).toBe(fakeUser.email);
  };

  await StudipProvider.handleAuth(domain, access_token, callback);
});

test('Provider Test wrong credentials', async () => {
  const domain = UrlHelper.STUDIP_DOMAIN_UNI_OSNABRUECK;

  const callback = async (err: any, user: any) => {
    expect(err).toBeTruthy();
    expect(user).toBeFalsy();
  };

  await StudipProvider.handleAuth(domain, access_token, callback);
});

test('Provider Test wrong credentials', async () => {
  FakeBackend.IS_ACTIVE = true;

  const callback = async (err: any, user: any) => {
    expect(err).toBeTruthy();
    expect(user).toBeFalsy();
  };

  const wrong_access_token = {
    username: null,
    password: null,
  };

  await StudipProvider.handleAuth(domain, wrong_access_token, callback);
});
