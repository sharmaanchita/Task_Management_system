import { db } from '../db/database';
import type { Task } from '../types/task';

export const taskService = {
  async getAllTasks(): Promise<Task[]> {
    return db.getAllFromIndex('tasks', 'createdAt');
  },

  async getTasksByStatus(status: string): Promise<Task[]> {
    return db.getAllFromIndex('tasks', 'status', status);
  },

  async createTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> {
    const timestamp = new Date().toISOString();
    const newTask = {
      ...task,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    const id = await db.add('tasks', newTask);
    return { ...newTask, id };
  },

  async updateTask(id: number, updates: Partial<Task>): Promise<void> {
    const task = await db.get('tasks', id);
    if (!task) throw new Error('Task not found');

    const updatedTask = {
      ...task,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    await db.put('tasks', updatedTask);
  },

  async deleteTask(id: number): Promise<void> {
    await db.delete('tasks', id);
  },
};