import { Button, Input, Table } from 'antd';
import { useEffect, useState,useCallback, useMemo } from 'react';
import { getData, postData, updateData } from '../services/apiService';
import AddEditModal from '../components/Dashboard/AddEditModal';
import axios from 'axios';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { MenuItem } from '@mui/material';
import { jsonData } from '../redux/materialData';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRecords = useCallback(async () => {
    setLoading(true);
    const jsonData = {
      data: [
        {
          id: "1",
          material: "hfghfj",
          material_abbreviation: "gjhg",
          manufacturing_process: "hjkghjg",
          manufacturing_process_abbr: "hjhjg",
          material_standard: "hbhjb",
          length: "hjhbhj",
          grade: "ytyu",
          end_finish: "yuuygyug",
          end_finish_abbreviation: "guyguy",
          nps: "hbi",
          schedule: "esed",
          additional_requirement: "bjhbj",
          additional_reg_abbreviation: "vychvj"
        },
        {
          id: "2",
          material: "sdfsdf",
          material_abbreviation: "sdfsdf",
          manufacturing_process: "sdfksdf",
          manufacturing_process_abbr: "sdf",
          material_standard: "sdfsdf",
          length: "dsfsd",
          grade: "sdfks",
          end_finish: "sdfsd",
          end_finish_abbreviation: "kdskjf",
          nps: "sdfsdfsdf",
          schedule: "sdfsdf",
          additional_requirement: "sdfsd",
          additional_reg_abbreviation: " sdfs"
        },
        {
          id: "3",
          material: "sdfsdf",
          material_abbreviation: "sdfsdf",
          manufacturing_process: "sdfksdf",
          manufacturing_process_abbr: "sdf",
          material_standard: "sdfsdf",
          length: "dsfsd",
          grade: "sdfks",
          end_finish: "sdfsd",
          end_finish_abbreviation: "kdskjf",
          nps: "sdfsdfsdf",
          schedule: "sdfsdf",
          additional_requirement: "sdfsd",
          additional_reg_abbreviation: " sdfs"
        }
      ],
      status: true,
      message: "successfully..."
    };
    try {
      const res = await getData('/get-material.php');
      if (res) {
        // console.log("🚀 Full API Response -->", res);

        setData(res?.data);
        setFilteredData(res?.data);
      } else {
        console.error("Unexpected API response:", res);
        setData([]);
        setFilteredData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setFilteredData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  useEffect(() => {
    console.log("Updated filteredData state:", filteredData);
  }, [filteredData]);
  
  // const handleSearch = (e) => {
  //   const value = e.target.value;
  //   setSearchText(value);

  //   if (!value.trim()) {
  //     setFilteredData(data);
  //     return;
  //   }

  //   const filtered = data.filter(item =>
  //     Object.values(item).some(field =>
  //       String(field).toLowerCase().includes(value.toLowerCase())
  //     )
  //   );
  //   setFilteredData(filtered);
  // };

  const handleAdd = () => {
    setEditingRecord(null);
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    setIsModalOpen(true);
  };

  const handleSubmit = async (values) => {
    try {
      if (editingRecord) {
        await updateData(`/edit-material/${editingRecord.id}`, values);
      } else {
        const formData = new FormData();
        for (const key in values) {
          if (values.hasOwnProperty(key)) {
            formData.append(key, values[key]);
          }
        }
        await postData('/create-material.php', formData);
      }
      setIsModalOpen(false);
      fetchRecords();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // const columns = [
  //   { title: 'ID', dataIndex: 'id', key: 'id' },
  //   { title: 'Material', dataIndex: 'material', key: 'material' },
  //   { title: 'Material Abbr.', dataIndex: 'material_abbreviation', key: 'material_abbreviation' },
  //   { title: 'Manufacturing Process', dataIndex: 'manufacturing_process', key: 'manufacturing_process' },
  //   { title: 'Manuf. Process Abbr.', dataIndex: 'manufacturing_process_abbr', key: 'manufacturing_process_abbr' },
  //   { title: 'Material Standard', dataIndex: 'material_standard', key: 'material_standard' },
  //   { title: 'Length', dataIndex: 'length', key: 'length' },
  //   { title: 'Grade', dataIndex: 'grade', key: 'grade' },
  //   { title: 'End Finish', dataIndex: 'end_finish', key: 'end_finish' },
  //   { title: 'End Finish Abbr.', dataIndex: 'end_finish_abbreviation', key: 'end_finish_abbreviation' },
  //   { title: 'NPS', dataIndex: 'nps', key: 'nps' },
  //   { title: 'Schedule', dataIndex: 'schedule', key: 'schedule' },
  //   { title: 'Additional Req.', dataIndex: 'additional_requirement', key: 'additional_requirement' },
  //   { title: 'Additional Req. Abbr.', dataIndex: 'additional_reg_abbreviation', key: 'additional_reg_abbreviation' },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: (_, record) => (
  //       <Button type="link" onClick={() => handleEdit(record)}>
  //         Edit
  //       </Button>
  //     ),
  //   },
  // ];

  const columns = useMemo(() => [
    { accessorKey: 'id', header: 'ID', size: 20 },
    { accessorKey: 'material', header: 'Material',},
    { accessorKey: 'material_abbreviation', header: 'Material Abbreviation', size: 250 },
    { accessorKey: 'manufacturing_process', header: 'Manufacturing Process', size: 250 },
    { accessorKey: 'manufacturing_process_abbr', header: 'Manufacturing Process Abbreviation', size: 300 },
    { accessorKey: 'material_standard', header: 'Material Standard' },
    { accessorKey: 'length', header: 'Length' },
    { accessorKey: 'grade', header: 'Grade' },
    { accessorKey: 'end_finish', header: 'End Finish' },
    { accessorKey: 'end_finish_abbreviation', header: 'End Finish Abbreviation',size: 250 },
    { accessorKey: 'nps', header: 'NPS' },
    { accessorKey: 'schedule', header: 'Schedule' },
    { accessorKey: 'additional_requirement', header: 'Additional Requirement',size: 250 },
    { accessorKey: 'additional_reg_abbreviation', header: 'Additional Reg Abbreviation',size: 300 },
  ], []);

  console.log("filteredData--------->", filteredData);
  let metData = jsonData?.data;
  const table = useMaterialReactTable({
    columns,
    data: metData,
    state: { isLoading: loading },
    enableColumnFilterModes: false, 
    initialState: { showColumnFilters: true },
    // filterFns: {
    //   customFilterFn: (row, id, filterValue) => {
    //     return row.getValue(id) === filterValue;
    //   },
    // },
    // localization: {
    //   filterCustomFilterFn: 'Custom Filter Fn',
    // },
  }); 

  return (
    <div className="p-4" style={{padding: 4}}>
      <div className="flex justify-between mb-4">
        {/* <Input
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
          className="w-1/3"
        /> */}
        <Button type="primary" onClick={handleAdd} style={{marginTop: 10}}>
          Add New
        </Button>
      </div>
      {/* <div style={{marginTop: 10, padding:4}}>
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          loading={loading}
          filterMultiple={true}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 'max-content' }}
        />
      </div> */}
      <div>
      <MaterialReactTable table={table}  enableStickyHeader={true} defaultColumn={{
        size: "auto",
      }}/>;
      </div>
      <AddEditModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialValues={editingRecord}
      />
    </div>
  );
};

export default Dashboard;
