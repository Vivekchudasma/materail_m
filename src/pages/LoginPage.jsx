import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    // Static login check
    if (values.username === "admin" && values.password === "admin") {
      setLoading(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{ boxShadow: "10px 10px 10px 10px #cfcfcf", padding: "10px" }}
        >
          <div className="text-center mb-6">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 25 42"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* (You can paste your SVG paths here if you want full logo) */}
                <circle cx="20" cy="20" r="18" fill="#7367F0" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold">Welcome to IOCL! 👋</h4>
            <p className="text-gray-500">Please sign-in to your account</p>
          </div>

          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="Email or Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Enter your email or username"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-between">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="text-sm text-primary" href="/forgot-password">
                  Forgot password?
                </a>
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                className="bg-primary"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
}

// src/pages/Login.jsx
// import { Button, Input, Form, Divider } from "antd";
// import { GoogleOutlined } from "@ant-design/icons";
// import { useState } from "react";

// const Login = () => {
//   const [form] = Form.useForm();
//   const [error, setError] = useState("");

//   const handleLogin = (values) => {
//     const { email } = values;
//     // Simple email validation
//     const isValid = /\S+@\S+\.\S+/.test(email);
//     if (!isValid) {
//       setError("Invalid email address. Please check and enter a valid email.");
//     } else {
//       setError("");
//       console.log("Login success with:", email);
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Panel */}
//       <div className="w-1/2 bg-gradient-to-br from-green-200 via-purple-200 to-indigo-400 flex items-center justify-center">
//         <div className="bg-white/20 backdrop-blur-md p-10 rounded-full w-[400px] h-[400px] flex flex-col justify-center items-center text-center shadow-lg">
//           <h1 className="text-2xl font-bold text-indigo-700 mb-2">Otomeyt</h1>
//           <h2 className="text-xl font-bold text-purple-700 mb-2">
//             Take the Next Step <br /> in Your <span className="text-pink-500">Career</span>
//           </h2>
//           <p className="text-xs text-white">
//             Smart opportunities, powered by AI. Our platform understands your skills, scans your resume,
//             and connects you with the best job matches—for free.
//           </p>
//         </div>
//       </div>

//       {/* Right Panel */}
//       <div className="w-1/2 flex items-center justify-center">
//         <div className="w-[350px]">
//           <h2 className="text-xl font-semibold mb-4">Enter your email</h2>
//           <p className="text-sm text-gray-500 mb-6">
//             We couldn't detect an email in your CV. Please enter your email to continue.
//           </p>
//           <Form form={form} layout="vertical" onFinish={handleLogin}>
//             <Form.Item name="email" rules={[{ required: true }]}>
//               <Input
//                 placeholder="example@gmail.com"
//                 className="rounded-full py-2 px-4"
//               />
//             </Form.Item>
//             {error && (
//               <p className="text-red-500 text-xs mb-2">{error}</p>
//             )}
//             <Form.Item>
//               <Button
//                 htmlType="submit"
//                 className="bg-purple-600 text-white rounded-full w-full py-2 hover:bg-purple-700"
//               >
//                 Login
//               </Button>
//             </Form.Item>
//           </Form>
//           <Divider>or login with</Divider>
//           <Button
//             icon={<GoogleOutlined />}
//             className="w-full rounded-full border border-gray-300"
//           >
//             Login with Google
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
