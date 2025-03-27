<img src="https://repository-images.githubusercontent.com/903297410/ebad93f8-ebe6-4620-991a-2d9af5c510a6" alt="Cover" />

<p align="center">
  <a href="https://npmjs.com/package/prettypkg/" target="_blank">
    <img src="https://img.shields.io/npm/v/prettypkg.svg" />
  </a>

  <a href="https://github.com/rdarida/prettypkg" target="_blank">
    <img src="https://img.shields.io/badge/-repository-222222?style=flat&logo=github" alt="GitHub Repository" />
  </a>

  <a href="https://github.com/rdarida/prettypkg/actions/workflows/publish.yml" target="_blank" alt="GitHub Actions">
    <img src="https://github.com/rdarida/prettypkg/actions/workflows/publish.yml/badge.svg" alt="Publish" />
  </a>

  <a href="https://sonarcloud.io/dashboard?id=rdarida_prettypkg" target="_blank" alt="SonarCloud">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=rdarida_prettypkg&metric=coverage" alt="Coverage" />
  </a>

  <img src="https://img.shields.io/librariesio/release/npm/prettypkg" alt="Dependencies" />
</p>
<hr>

# prettypkg
A command-line utility to format package.json files consistently

## Usage
```
npx prettypgk@latest --write
```

## Consistent key order

**Input:**
```json
{
  "licence": "MIT",
  "keywords": ["package", "formatter", "prettier"],
  "description": "A command-line utility to format package.json files consistently",
  "name": "prettypkg"
}
```

**Output:**
```json
{
  "name": "prettypkg",
  "description": "A command-line utility to format package.json files consistently",
  "keywords": ["package", "formatter", "prettier"],
  "licence": "MIT"
}
```

<hr>

<details>
  <summary>
    <strong>Resources<strong>
  </summary>

- [Documentation](https://rdarida.github.io/prettypkg/)
</details>
<hr>

<p align="center">
  <a href="LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
  </a>
</p>
