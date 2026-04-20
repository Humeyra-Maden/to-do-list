import React from 'react';

const TaskItem = ({ task, onDelete, onEdit, onToggle }) => {
  return (
    <div className={`list-group-item d-flex justify-content-between align-items-start mb-2 shadow-sm ${task.completed ? 'opacity-75' : ''}`}>
      <div className="d-flex align-items-start gap-2 me-auto">
        <input
          type="checkbox"
          className="form-check-input mt-1 flex-shrink-0"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <div>
          <div className={`fw-bold ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
            {task.title}
          </div>
          {task.description && (
            <small className="text-muted">{task.description}</small>
          )}
          <div className="mt-1">
            <span className={`badge ${task.completed ? 'bg-success' : 'bg-primary'}`}>
              {task.completed ? 'Tamamlandı' : 'Bekliyor'}
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex gap-2 flex-shrink-0">
        <button onClick={() => onEdit(task)} className="btn btn-sm btn-outline-warning">
          Düzenle
        </button>
        <button onClick={() => onDelete(task.id)} className="btn btn-sm btn-outline-danger">
          Sil
        </button>
      </div>
    </div>
  );
};

export default TaskItem;