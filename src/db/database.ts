import { openDB } from 'idb';
import type { Task } from '../types/task';

const dbName = 'taskManagerDB';
const storeName = 'tasks';

export const db = await openDB(dbName, 1, {
  upgrade(db) {
    const store = db.createObjectStore(storeName, {
      keyPath: 'id',
      autoIncrement: true,
    });
    store.createIndex('status', 'status');
    store.createIndex('createdAt', 'createdAt');
  },
});