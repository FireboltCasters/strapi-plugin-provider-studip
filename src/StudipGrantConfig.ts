export default class StudipGrantConfig {
  static DEFAULT_PROVIDER_NAME = 'studip';
  static DEFAULT_ICON = 'envelope';

  static getGrantConfig(
    enabled: boolean,
    strapi: any,
    provider: string,
    icon: string
  ) {
    if (!provider) {
      provider = StudipGrantConfig.DEFAULT_PROVIDER_NAME;
    }

    return {
      [provider]: {
        enabled: enabled,
        icon: icon || StudipGrantConfig.DEFAULT_ICON,
        key: '',
        secret: '',
        callback: `${strapi.config.server.url}/auth/` + provider + `/callback`,
        scope: ['username', 'password'],
      },
    };
  }
}
