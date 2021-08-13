import React, {useEffect} from "react";
import {Button, Form, Input, InputNumber} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/redux/rootReducer";
import bookAction from "src/redux/books/book.action";

const BookForm = () => {
  const dispatch = useDispatch();
  const { formReset, loading } = useSelector(
    (state: RootState) => state.bookReducer
  );
  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    dispatch(bookAction.addBookRequest(value));
  };
  useEffect(() => {
    if (formReset) {
      form.resetFields();
    }
  }, [formReset]);
  return (
    <>
      <Form form={form} onFinish={onFinish} layout="vertical" requiredMark>
        <Form.Item
          rules={[{ required: true, message: "Please Input Book Name." }]}
          label="Book Name"
          name="bookName"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Author Name"
          name="authorName"
          rules={[{ required: true, message: "Author Name is Required." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Price is Required." }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Write some word." }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit">
            Add Book
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default BookForm;
