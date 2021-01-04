module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'rule-empty-line-after': [
      'always-multi-line',
      {
        ignore: ['after-comment'],
      },
    ],
  },
};
