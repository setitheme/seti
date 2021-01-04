module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'rule-empty-line-after': [
      'always-multi-line',
      {
        ignore: ['after-comment'],
      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        ignore: ['after-comment'],
      },
    ],
  },
};
