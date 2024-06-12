   import React, { useState } from 'react';



  const Todo = () => {
    const [inputdata, setInputdata] = useState('');
    const [items, setItems] = useState([]);
    const [isEditItem, setIsEditItem] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const submitData = () => {
        if (isEditItem !== null) {
            const newItems = [...items];
            newItems[editIndex] = inputdata;
            setItems(newItems);
            setInputdata('');
            setIsEditItem(null);
            setEditIndex(null);
        } else {
           
            setItems([...items, inputdata]);
            setInputdata('');
        }
    }

    const editItem = (index) => {
        setInputdata(items[index]);
        setIsEditItem(items[index]);
        setEditIndex(index);
    }

    return (
        
      <div class="container mt-5 ">
      <h1 class="text-center mb-4">Todo List</h1>
      <div class="input-group mb-3">
          <input type="text" class="form-control" value={inputdata} onChange={(e) => setInputdata(e.target.value)}/>
          <div class="input-group-append mx-2">
              <button class="btn btn-primary" onClick={submitData}>Add</button>
          </div>
      </div>
      {
          items.map((item, index) => (
              <div className="d-flex justify-content-between align-items-center mb-2" key={index}>
                  <h3 className="mb-0">{item}</h3>
                  <button className="btn btn-warning btn-sm" onClick={() => editItem(index)}>Edit</button>
              </div>
          ))
      }
  </div>
    );
}

export default Todo;
