## 事件类型
可以使用React的对应的事件
```tsx
import React from 'react';
const App = () => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
		console.log(e);
  };

  return (
      <input value={value} onChange={handleInputChange} />
  );
};
```
也可以在函数上加类型:
```tsx
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {    
		console.log(e);
  };
```


如果没有合适的类型,可以使用最通用的`SyntheticEvent`
```tsx
  const handleInputChange = (e: SynthetixEvent) => {    
		console.log(e);
  };
```