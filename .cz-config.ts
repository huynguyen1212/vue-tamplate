module.exports = {
  types: [
    { value: ':sparkles: feat', name: 'β¨ feat:\tAdding a new feature' },
    { value: ':bug: fix', name: 'π fix:\tFixing a bug' },
    { value: ':construction: wip', name: 'π§ wip:\tWork in progress' },
    {
      value: ':lipstick: style',
      name: 'π style:\tAdd or update styles, ui or ux',
    },
    {
      value: ':hammer: refactor',
      name: 'π¨ refactor:\tCode change that neither fixes a bug nor adds a feature',
    },

    { value: ':memo: docs', name: 'π docs:\tAdd or update documentation' },
    {
      value: ':zap: perf',
      name: 'β‘οΈ perf:\tCode change that improves performance',
    },
    {
      value: ':white_check_mark: test',
      name: 'β test:\tAdding tests cases',
    },
    { value: ':rewind: revert', name: 'βͺοΈ revert:\tRevert to a commit' },
    {
      value: ':construction_worker: build',
      name: 'π· build:\tAdd or update regards to build process',
    },
    {
      value: ':racehorse: ci',
      name: 'π ci:\tAdd or update regards to CI process',
    },
  ],

  scopes: [
    { name: 'all platforms' },
    { name: 'desktop' },
    { name: 'mobile' },
    { name: 'packages' },
    { name: 'unit test' },
    { name: 'settings' },
    { name: 'code convention' },
  ],

  messages: {
    type: "***************** πΌπ§π Select the type of change that you're committing *****************:",
    scope: '\nπͺ Denote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'π Denote the SCOPE of this change:',
    subject: 'π Subject - Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'π Body - Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'π₯ List any BREAKING CHANGES (optional):\n',
    footer: 'π List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'π Are you sure you want to proceed with the commit above?',
  },

  scopeOverrides: {
    fix: [{ name: 'merge' }, { name: 'style' }, { name: 'test' }, { name: 'hotfix' }],
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: [],
  subjectLimit: 100,
}
