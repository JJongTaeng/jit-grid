import React from 'react';
import ReactDOM from 'react-dom';
import { Row } from '../../dist/index';

const Index = () => {
  return (
    <div>
      <Row>
        <div>hello</div>
      </Row>
    </div>
  );
};

ReactDOM.render(<Index/>, document.getElementById('root'));

export default Index;