const baseConfig = require("@philian73/prettier-config");

/*
TODO: Зафиксить свой prettier-config, сделать baseConfig функцией с приемом пропсов в виде overrides и тд, возвращающий уже сам конфиг.
      Тогда не придётся городить костыль как ниже, в виде  ...(baseConfig.overrides ?? []),
*/
module.exports = {
  ...baseConfig,
  overrides: [
    ...(baseConfig.overrides ?? []),
    {
      files: "src/shared/lib/prisma/seed/**/*.{js,ts}",
      options: {
        quoteProps: "preserve",
      },
    },
  ],
};