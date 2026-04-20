import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, setEditingTask, toggleTask }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-muted mt-3">Henüz görev eklenmedi.</p>;
  }

  return (
    <div className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onEdit={setEditingTask}
          onToggle={toggleTask}
        />
      ))}
    </div>
  );
};

export default TaskList;