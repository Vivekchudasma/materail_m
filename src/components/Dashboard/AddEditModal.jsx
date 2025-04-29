import { Modal, Form, Input } from 'antd';

const AddEditModal = ({ open, onCancel, onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
    });
  };

//   material:hfghfj
// material_abbreviation:gjhg
// manufacturing_process:hjkghjg
// manufacturing_process_abbr:hjhjg
// material_standard:hbhjb
// length:hjhbhj
// grade:ytyu
// end_finish:yuuygyug
// end_finish_abbreviation:guyguy
// nps:hbi
// schedule:esed
// additional_requirement:bjhbj
// additional_reg_abbreviation:vychvj
  return (
    <Modal
      title={initialValues ? 'Edit Record' : 'Add New Record'}
      open={open}
      onCancel={onCancel}
      onOk={handleOk}
      okText="Save"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues || {}}
      >
        <Form.Item name="material" label="Material" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="material_abbreviation" label="Material Abbreviation" rules={[{ required: true }]}>
          <Input type="text" />
        </Form.Item>
        <Form.Item name="manufacturing_process" label="Manufacturing Process" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="manufacturing_process_abbr" label="Manufacturing Process Abbreviation" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="material_standard" label="Material Standard" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="length" label="Length" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="grade" label="Grade" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="end_finish" label="End Finish" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="end_finish_abbreviation" label="end Finish Abbreviation" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="nps" label="NPS" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="schedule" label="Schedule" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="additional_requirement" label="Additional Req." rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="additional_reg_abbreviation" label="Additional Req. Abbreviation" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEditModal;
