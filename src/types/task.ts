export interface Task {
  id?: number;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'completed';
  createdAt?: string;
  updatedAt?: string;
}