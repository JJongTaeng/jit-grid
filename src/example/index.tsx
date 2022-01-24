import React from 'react';
import ReactDOM from 'react-dom';
import Row from '../Row';
import Column from "@/Column";


const Index = () => {
  return (
    <div>
      <Row>
        <Column xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div style={{border: "1px solid red"}}>hello</div>
        </Column>
        <Column xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div style={{border: "1px solid red"}}>hello</div>
        </Column>
        <Column xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div style={{border: "1px solid red"}}>hello</div>
        </Column>
        <Column xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <div style={{border: "1px solid red"}}>hello</div>
        </Column>
      </Row>
    </div>
  );
};

ReactDOM.render(<Index/>, document.getElementById('root'));

export default Index;