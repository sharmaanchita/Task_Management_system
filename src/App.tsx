import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskFilter } from './components/TaskFilter';
import { taskService } from './services/taskService';
import { Task } from './types/task';
import { ClipboardList } from 'lucide-react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      const loadedTasks = filter === 'all'
        ? await taskService.getAllTasks()
        : await taskService.getTasksByStatus(filter);
      setTasks(loadedTasks);
    } catch (error) {
      toast.error('Failed to load tasks');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [filter]);

  const handleCreateTask = async (task: Omit<Task, 'id'>) => {
    try {
      await taskService.createTask(task);
      toast.success('Task created successfully');
      loadTasks();
    } catch (error) {
      toast.error('Failed to create task');
    }
  };

  const handleUpdateTask = async (task: Task) => {
    try {
      await taskService.updateTask(task.id!, task);
      setEditingTask(null);
      toast.success('Task updated successfully');
      loadTasks();
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await taskService.deleteTask(id);
      toast.success('Task deleted successfully');
      loadTasks();
    } catch (error) {
      toast.error('Failed to delete task');
    }
  };

  const handleStatusChange = async (id: number, status: 'pending' | 'completed') => {
    try {
      await taskService.updateTask(id, { status });
      toast.success('Task status updated');
      loadTasks();
    } catch (error) {
      toast.error('Failed to update task status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <ClipboardList className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Task Management System</h1>
          </div>
          <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {editingTask ? 'Edit Task' : 'Create New Task'}
          </h2>
          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
            initialData={editingTask || undefined}
            onCancel={editingTask ? () => setEditingTask(null) : undefined}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">
            {filter === 'all' ? 'All Tasks' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks`}
          </h2>
          {isLoading ? (
            <div className="text-center py-4">Loading tasks...</div>
          ) : (
            <TaskList
              tasks={tasks}
              onDelete={handleDeleteTask}
              onEdit={setEditingTask}
              onStatusChange={handleStatusChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;