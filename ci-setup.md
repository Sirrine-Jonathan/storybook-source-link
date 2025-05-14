# CI Setup Instructions

To fix the build failure, you need to:

1. Update the GitHub Actions workflow to enable Corepack:

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v3  # Update from v1 to v3
  with:
    node-version: '20.x'

- name: Enable Corepack
  run: corepack enable

- name: Install dependencies
  uses: borales/actions-yarn@v4
  with:
    cmd: install
```

This is needed because:
- The project uses yarn@4.0.1 as specified in package.json's "packageManager" field
- The current CI environment has an older version of yarn (1.22.22)
- Corepack (included with Node.js) needs to be enabled to manage the correct yarn version

The build failure is not related to Storybook 8 compatibility - the code changes for that are correct:
- Updated all Storybook dependencies to ^8.0.0
- Changed TOOLEXTRA to TOOL in manager.ts
- Added compatibleWithStorybook field in package.json