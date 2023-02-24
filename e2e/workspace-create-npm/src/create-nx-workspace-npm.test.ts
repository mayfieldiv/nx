import {
  checkFilesExist,
  cleanupProject,
  newProject,
  readJson,
  removeFile,
  runCLI,
  uniq,
  updateJson,
} from '@nrwl/e2e/utils';

describe('create-nx-workspace --preset=npm', () => {
  let wsName;

  beforeAll(() => {
    wsName = newProject({ preset: 'npm' });
  });

  afterAll(() => cleanupProject());

  beforeEach(() => {
    removeFile('tsconfig.base.json');
    updateJson('package.json', (json) => {
      delete json.devDependencies['typescript'];
      return json;
    });
  });

  it('should add angular application', () => {
    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/angular:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  }, 1_000_000);

  it('should add angular library', () => {
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/angular:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  }, 1_000_000);

  it('should add workspace library', () => {
    const libName = uniq('lib');

    expect(() =>
      runCLI(`generate @nrwl/workspace:library ${libName} --no-interactive`)
    ).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add js library', () => {
    const libName = uniq('lib');

    expect(() =>
      runCLI(`generate @nrwl/js:library ${libName} --no-interactive`)
    ).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add web application', () => {
    const appName = uniq('my-app');

    expect(() =>
      runCLI(`generate @nrwl/web:app ${appName} --no-interactive`)
    ).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add react application', () => {
    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/react:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add react library', () => {
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/react:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add next application', () => {
    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/next:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add next library', () => {
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/next:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add react-native application', () => {
    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/react-native:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add react-native library', () => {
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/react-native:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add node application', () => {
    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/node:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add node library', () => {
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/node:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add nest application', () => {
    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/nest:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add nest library', () => {
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/nest:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add express application', () => {
    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/express:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });
});
