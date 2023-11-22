const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/test', (_, res) => {
    // 안전한 데이터 처리 예제
    const responseData = { message: 'Hello, secure world!', requestData };

    // JSON 응답
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
