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
  license: License;
  /**
   * Specifies the name and contact information of the package's author.
   */
  author: Author;
  /**
   * Lists additional individuals or organizations
   * who contributed to the package.
   */
  contributors: Contributors;
  /**
   * Specifies ways to financially support the package or its maintainers.
   */
  funding: Funding;
  /**
   * The URL to the project homepage.
   */
  homepage: string;
  /**
   * Provides the URL or details of the package's source code repository.
   */
  repository: Repository;
};

type TypeAndUrl = {
  type: string;
  url: string;
};

export type License = string | TypeAndUrl | TypeAndUrl[];

export type Author =
  | string
  | {
      name: string;
      email: string;
      url: string;
    };

export type Contributors = Author[];

export type Funding = string | TypeAndUrl | TypeAndUrl[];

export type Repository = string | TypeAndUrl & { directory: string };
