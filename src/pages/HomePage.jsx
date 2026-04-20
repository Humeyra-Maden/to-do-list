import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask    = (task)    => setTasks(prev => [...prev, task]);
  const deleteTask = (id)      => setTasks(prev => prev.filter(t => t.id !== id));
  const updateTask = (updated) => setTasks(prev => prev.map(t => t.id === updated.id ? updated : t));
  const toggleTask = (id)      => setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const total     = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending   = total - completed;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="display-6 text-center mb-4">TO-DO LİST PROJESİ</h2>

          <div className="row text-center mb-4 g-2">
            {[['Toplam', total, 'secondary'], ['Tamamlandı', completed, 'success'], ['Bekliyor', pending, 'primary']].map(([lbl, val, color]) => (
              <div key={lbl} className="col-4">
                <div className={`card border-${color}`}>
                  <div className="card-body py-2">
                    <h5 className={`text-${color} mb-0`}>{val}</h5>
                    <small className="text-muted">{lbl}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <TaskForm
            addTask={addTask}
            updateTask={updateTask}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            setEditingTask={setEditingTask}
            toggleTask={toggleTask}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;