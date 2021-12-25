import React from "react";
import { Button, Input, Form } from "antd-mobile";

export default (): JSX.Element => {
	const [form] = Form.useForm();
  const onFinish = (value: any) => {
		console.log(value);
  };

  return (
    <div className="demo">
      <Form layout="horizontal" form={form} onFinish={onFinish}>
				<Form.Item
					name="username"
					label="用户名"
					rules={[{ required: true, message: "用户名不能为空" }]}
				>
					<Input placeholder="请请输入用户名" />
				</Form.Item>
				<Form.Item
					name="password"
					label="密码"
					rules={[{ required: true, message: "密码不能为空" }]}
				>
					<Input placeholder="请请输入密码" type="password" />
				</Form.Item>
				<Button block type="submit" color="primary">
					登录
				</Button>
			</Form>
    </div>
  );
};
