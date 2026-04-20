import React, { useState } from 'react';

const TaskForm = ({ addTask, updateTask, editingTask, setEditingTask }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    if (editingTask) {
      updateTask({ ...editingTask, ...task });
    } else {
      addTask({ ...task, id: Date.now(), completed: false, createdAt: new Date().toISOString() });
    }
    setTask({ title: '', description: '' });
    setEditingTask(null);
  };

  return (
    <div className={`card p-4 mb-4 shadow-sm border-${editingTask ? 'warning' : 'primary'}`}>
      <h4 className={`text-${editingTask ? 'warning' : 'primary'}`}>
        {editingTask ? 'Görevi Düzenle' : 'Yeni Görev Ekle'}
      </h4>
      <div className="mb-3 mt-3">
        <input
          className="form-control"
          placeholder="Başlık *"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Detaylar (isteğe bağlı)"
          rows={3}
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className={`btn btn-${editingTask ? 'warning' : 'primary'} w-100`}
      >
        {editingTask ? 'Değişiklikleri Kaydet' : 'Listeye Ekle'}
      </button>
      {editingTask && (
        <button
          type="button"
          className="btn btn-link btn-sm w-100 mt-2 text-secondary"
          onClick={() => setEditingTask(null)}
        >
          İptal Et
        </button>
      )}
    </div>
  );
};

export default TaskForm;