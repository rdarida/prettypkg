/**
 * This type represents a `package.json` file, the configuration file for npm packages.
 * The official documentation describing all possible properties of `package.json`
 * can be found at the following link:
 * https://docs.npmjs.com/cli/v10/configuring-npm/package-json
 */
export type PackageJSON = {
  /**
   * Indicates whether the package is private, preventing
   * it from being published to the npm registry.
   */
  private: boolean;
  /**
   * The unique identifier and name of the package.
   */
  name: string;
  /**
   * Specifies the package version following semantic
   * versioning (major.minor.patch).
   */
  version: string;
  /**
   * A brief summary of the package's purpose or functionality.
   */
  description: string;
  /**
   * Specifies the license under which the package is distributed.
   */
  license: LicenseProperty;
  /**
   * Specifies the name and contact information of the package's author.
   */
  author: AuthorProperty;
  /**
   * Lists additional individuals or organizations
   * who contributed to the package.
   */
  contributors: ContributorsProperty;
  /**
   * Specifies ways to financially support the package or its maintainers.
   */
  funding: FundingProperty;
  /**
   * The URL to the project homepage.
   */
  homepage: string;
  /**
   * Provides the URL or details of the package's source code repository.
   */
  repository: RepositoryProperty;
  /**
   * pecifies the URL or contact information for
   * reporting issues or bugs in the package.
   */
  bugs: BugsProperty;
  /**
   * Defines the entry point file for the package,
   * typically the main module or script.
   */
  main: string;
  /**
   * Specifies the entry point for an ES module version of the package.
   */
  module: string;
  /**
   * Points to the type definition file for the package,
   * providing TypeScript type information.
   */
  types: string;
  /**
   * Specifies the executable files or commands that the package provides.
   */
  bin: string | { [key: string]: string };
  /**
   * Lists the files or directories to include when publishing the package.
   */
  files: string[];
  /**
   * Defines custom scripts that can be run using npm commands (e.g., build, test).
   */
  scripts: { [key: string]: string };
};

type TypeAndUrl = {
  type: string;
  url: string;
};

type LicenseProperty = string | TypeAndUrl | TypeAndUrl[];

type AuthorProperty =
  | string
  | {
      name: string;
      email: string;
      url: string;
    };

type ContributorsProperty = AuthorProperty[];

type FundingProperty = string | TypeAndUrl | TypeAndUrl[];

type RepositoryProperty = string | (TypeAndUrl & { directory: string });

type BugsProperty =
  | string
  | {
      url: string;
      email: string;
    };
