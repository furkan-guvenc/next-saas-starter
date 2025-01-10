import path from 'path';
import fs from 'fs/promises';

export async function readContent<T>(basePath: string, paths: string): Promise<T[]> {
  const dirPath = path.join(basePath, 'content', paths);
  return fs
    .readdir(dirPath)
    .then(files => Promise.all(files
      .map((filePath) => fs.readFile(path.join(dirPath, filePath), 'utf8')
        .then(content => JSON.parse(content) as T)
      ))
    );
}

export async function readSingleContent<T>(basePath: string, paths: string): Promise<T> {
  const filePath = path.join(basePath, 'content', paths);
  const content = await fs.readFile(filePath, 'utf8');
  return JSON.parse(content) as T;
}
