import { AuthorProperty } from './AuthorProperty';
import { BugsProperty } from './BugsProperty';
import { Dictionary } from './Dictionary';
import { FundingProperty } from './FundingProperty';
import { LicenseProperty } from './LicenseProperty';
import { RepositoryProperty } from './RepositoryProperty';

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
   * Specifies the name of the product, often used
   * in the app's packaging or installation process.
   */
  productName: string;
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
   * Specifies an array of terms that help identify and
   * categorize the package for search purposes.
   */
  keywords: string[];
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
  contributors: AuthorProperty[];
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
   * Specifies which files or modules are exposed when
   * the package is imported or required.
   */
  exports: string | Dictionary<string>;
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
  bin: string | Dictionary<string>;
  /**
   * Lists the files or directories to include when publishing the package.
   */
  files: string[];
  /**
   * Defines custom scripts that can be run using
   * npm commands (e.g., build, test).
   */
  scripts: Dictionary<string>;
  /**
   * Lists the packages required for the package
   * to function properly in production.
   */
  dependencies: Dictionary<string>;
  /**
   * Lists the packages that are required by the package
   * but should be provided by the consuming project.
   */
  peerDependencies: Dictionary<string>;
  /**
   * Provides additional metadata for peer dependencies,
   * such as optional or specific configuration.
   */
  peerDependenciesMeta: Dictionary<any>;
  /**
   * Lists the packages that are not required for the package to function,
   * but will be installed if available.
   */
  optionalDependencies: Dictionary<string>;
  /**
   * Specifies the packages that should be bundled when the package is
   * published, ensuring they are included in the distribution.
   */
  bundleDependencies: boolean | string[];
  /**
   * Lists the packages required for development purposes,
   * such as testing or build tools.
   */
  devDependencies: Dictionary<string>;
  /**
   * Allows specifying package versions or configurations to
   * override dependencies or their versions in the package tree.
   */
  overrides: Dictionary<string | any>;
  /**
   * Defines configuration settings that can be used by
   * scripts or tools within the package.
   */
  config: Dictionary<string>;
};

export type Key = keyof PackageJSON;
