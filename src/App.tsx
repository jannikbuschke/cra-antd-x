import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Formik } from "formik"
import { Input, SubmitButton, Form } from "formik-antd"
import { notification } from "antd"
import { AntDesignOutlined } from "@ant-design/icons"
import { TestModule } from "glow-module"
import "antd/dist/antd.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div style={{ background: "white", padding: "20px" }}>
        <Formik
          initialValues={{ field1: "hello world" }}
          onSubmit={(values, f) => {
            notification.info({ message: values.field1 })
            f.setSubmitting(false)
          }}
        >
          <Form>
            <Input name="field1" />
            <SubmitButton
              style={{ marginTop: 10 }}
              icon={<AntDesignOutlined />}
            >
              Submit
            </SubmitButton>
          </Form>
        </Formik>
      </div>
      <TestModule />
    </div>
  )
}

export default App
