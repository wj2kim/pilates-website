import React from 'react';

const ContentIntroBody = () => {
  const listStyle = 'text-align:center;white-space:pre-wrap';

  return (
    <div id="main-content-body">
      <h2>Main Content Body Title ( test )</h2>
      <ul>
        <li style={{ listStyle }}>list test 1</li>
        <li style={{ listStyle }}>list test 2</li>
        <li style={{ listStyle }}>list test 3</li>
        <li style={{ listStyle }}>list test 4</li>
      </ul>
    </div>
  );
};

export default ContentIntroBody;
