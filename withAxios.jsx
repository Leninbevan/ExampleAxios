import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosExample = () => {
  const [data, setData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [putData, setPutData] = useState(null);
  const [patchData, setPatchData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  // GET request
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // POST request
  const handlePost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };

  // PUT request
  const handlePut = () => {
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
      .then(response => {
        setPutData(response.data);
      })
      .catch(error => {
        console.error('Error putting data:', error);
      });
  };

  // PATCH request
  const handlePatch = () => {
    axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
      title: 'foo',
    })
      .then(response => {
        setPatchData(response.data);
      })
      .catch(error => {
        console.error('Error patching data:', error);
      });
  };

  // DELETE request
  const handleDelete = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setDeleteData(response.data);
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div>
      <h1>Axios HTTP Methods Example</h1>
      <div>
        <h2>GET Request Data:</h2>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
      <div>
        <h2>POST Request Data:</h2>
        {postData && <pre>{JSON.stringify(postData, null, 2)}</pre>}
        <button onClick={handlePost}>Send POST Request</button>
      </div>
      <div>
        <h2>PUT Request Data:</h2>
        {putData && <pre>{JSON.stringify(putData, null, 2)}</pre>}
        <button onClick={handlePut}>Send PUT Request</button>
      </div>
      <div>
        <h2>PATCH Request Data:</h2>
        {patchData && <pre>{JSON.stringify(patchData, null, 2)}</pre>}
        <button onClick={handlePatch}>Send PATCH Request</button>
      </div>
      <div>
        <h2>DELETE Request Data:</h2>
        {deleteData && <pre>{JSON.stringify(deleteData, null, 2)}</pre>}
        <button onClick={handleDelete}>Send DELETE Request</button>
      </div>
    </div>
  );
};

export default AxiosExample;
