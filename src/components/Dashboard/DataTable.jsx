import { Table, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, updateData } from '@/redux/slices/dataSlice';
import { useEffect, useState } from 'react';

export default function DataTable() {
  const { data } = useSelector(state => state.data);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'College', dataIndex: 'college' },
    { title: 'Address', dataIndex: 'address' },
    {
      title: 'Actions',
      render: (_, record) => <Button onClick={() => {/* Open edit modal */}}>Edit</Button>,
    },
  ];

  return (
    <>
      <div className="flex justify-end mb-4">
        <Input.Search
          placeholder="Search name"
          onChange={e => setSearchTerm(e.target.value)}
          style={{ width: 300 }}
        />
      </div>
      <Table columns={columns} dataSource={filteredData} rowKey="id" />
    </>
  );
}
