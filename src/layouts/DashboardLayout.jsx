import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, PlusOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen">
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="text-white text-xl text-center py-4 font-bold">
          MyApp
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
          <Menu.Item key="dashboard" icon={<HomeOutlined />} onClick={() => navigate('/dashboard')}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="add" icon={<PlusOutlined />} onClick={() => navigate('/dashboard')}>
            Add New
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white shadow-md" />
        <Content className="m-4">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
