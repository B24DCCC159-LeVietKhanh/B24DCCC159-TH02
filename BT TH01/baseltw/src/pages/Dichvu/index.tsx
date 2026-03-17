import { useState } from 'react'
import { Table, Button, Modal, Form, Input, InputNumber } from 'antd'

export default () => {

  const [data,setData] = useState<any[]>([])
  const [visible,setVisible] = useState(false)
  const [form] = Form.useForm()

  const columns = [
    {title:'Tên dịch vụ',dataIndex:'ten'},
    {title:'Giá',dataIndex:'gia'},
    {title:'Thời gian (phút)',dataIndex:'thoigian'}
  ]

  const handleAdd = ()=>{
    form.validateFields().then(values=>{
      setData([...data,values])
      setVisible(false)
      form.resetFields()
    })
  }

  return(

    <div>

      <Button type="primary" onClick={()=>setVisible(true)}>
        Thêm dịch vụ
      </Button>

      <Table columns={columns} dataSource={data} rowKey="ten"/>

      <Modal
        visible={visible}
        onOk={handleAdd}
        onCancel={()=>setVisible(false)}
      >

        <Form form={form} layout="vertical">

          <Form.Item name="ten" label="Tên dịch vụ" rules={[{required:true}]}>
            <Input/>
          </Form.Item>

          <Form.Item name="gia" label="Giá">
            <InputNumber style={{width:'100%'}}/>
          </Form.Item>

          <Form.Item name="thoigian" label="Thời gian thực hiện">
            <InputNumber style={{width:'100%'}}/>
          </Form.Item>

        </Form>

      </Modal>

    </div>

  )
}
