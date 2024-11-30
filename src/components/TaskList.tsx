import React from 'react';
import { format } from 'date-fns';
import { CheckCircle, Clock, Edit, Trash2, XCircle } from 'lucide-react';
import { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
  onStatusChange: (id: number, status: 'pending' | 'completed') => void;
}

export function TaskList({ tasks, onDelete, onEdit, onStatusChange }: TaskListProps) {
  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(id);
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
              <p className="mt-1 text-gray-600">{task.description}</p>
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {format(new Date(task.dueDate), 'PPp')}
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    task.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {task.status}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => onStatusChange(task.id!, task.status === 'completed' ? 'pending' : 'completed')}
                className={`p-1 rounded-full ${
                  task.status === 'completed'
                    ? 'text-green-600 hover:text-green-700'
                    : 'text-gray-400 hover:text-gray-500'
                }`}
              >
                {task.status === 'completed' ? <CheckCircle size={20} /> : <XCircle size={20} />}
              </button>
              <button
                onClick={() => onEdit(task)}
                className="p-1 text-blue-600 hover:text-blue-700 rounded-full"
              >
                <Edit size={20} />
              </button>
              <button
                onClick={() => handleDelete(task.id!)}
                className="p-1 text-red-600 hover:text-red-700 rounded-full"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}