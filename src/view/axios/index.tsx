import React from "react";
import { Card, Button, Form, Input } from "antd";
import CodeBlock from "@/components/CodeBlock";
import { requestApi } from "@/api/index"

type FieldType = {
  url?: string;
  json?: string;
  token?: string;
};

function fixJSONString(str:string) {
  try {
    JSON.parse(str);
    return str; // 如果字符串已经是有效的 JSON，则不需要修复
  } catch (error) {
    // 修复无效的 JSON 字符串
    // 例如：将单引号替换为双引号
    return str
      .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ') // 修复键
      .replace(/'/g, '"'); // 修复单引号
  }
}

const axios: React.FC = () => {
  const [form] = Form.useForm();
  const [apiJson, setApiJson] = React.useState<string>('');

  const handleAxios = (method:string) => {
    const data = form.getFieldsValue();
    let params = null;

    try {
      params = JSON.parse(fixJSONString(data?.json))
    } catch (error) {}
    requestApi({
      url: data.url,
      method,
      token: data.token,
      params,
    }).then((res:any)=>{
      if (res.code) {
        setApiJson(JSON.stringify(res, null, 2))
      }
    })
  }

  return (
    <Card>
      <h2>Axios</h2>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        style={{ maxWidth: 600 }}
        initialValues={{
          url: '/code'
        }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="URL"
          name="url"
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="参数"
          name="json"
        >
          <Input.TextArea allowClear />
        </Form.Item>
        <Form.Item<FieldType>
          label="Token"
          name="token"
        >
          <Input.TextArea allowClear />
        </Form.Item>
      </Form>
      <Button onClick={()=>handleAxios('get')}>Get</Button>
      <Button onClick={()=>handleAxios('post')}>Post</Button>
      <div style={{height:'20px'}}></div>
      <CodeBlock language="json"  code={apiJson}/>
    </Card>
  );
}

export default axios;