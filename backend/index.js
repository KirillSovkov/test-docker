import express from 'express';
import cors from 'cors';

const PORT = 5000;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json([
        {
          "id":"1",
          "title":"Book Review: The Name of the Wind"
        },
        {
          "id":"2",
          "title":"Game Review: Pokemon Brillian Diamond"
        },
        {
          "id":"3",
          "title":"Show Review: Alice in Borderland"
        }
      ])
});

app.listen(PORT, () => {
    console.log(`listening for requests on port ${PORT}`);
});