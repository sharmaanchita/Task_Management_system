import React from 'react';

interface TaskFilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export function TaskFilter({ currentFilter, onFilterChange }: TaskFilterProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded-md ${
          currentFilter === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('pending')}
        className={`px-4 py-2 rounded-md ${
          currentFilter === 'pending'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Pending
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={`px-4 py-2 rounded-md ${
          currentFilter === 'completed'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Completed
      </button>
    </div>
  );
}