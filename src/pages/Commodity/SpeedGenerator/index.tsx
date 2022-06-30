import { Button, Drawer, Input, message } from 'antd';
import React, { useRef, useState } from 'react';


const TableList: React.FC = () => {
  const [testValue, setTestValue] = useState<string>('商品生成列表')

  return (
    <>
      <div>{testValue}</div>
    </>
  );
};

export default TableList;
