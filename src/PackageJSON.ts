/**
 * This type represents a `package.json` file, the configuration file for npm packages.
 * The official documentation describing all possible properties of `package.json`
 * can be found at the following link:
 * https://docs.npmjs.com/cli/v10/configuring-npm/package-json
 */
export type PackageJSON = {
  private: boolean;
  name: string;
  version: string;
  description: string;
  author: string;
};
