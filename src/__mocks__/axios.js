import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/api/data').reply(200, {
  data: [
    {
      "id": 1,
      "type": "image",
      "src": "https://via.placeholder.com/800x600.png?text=Sample+Image+1",
      "duration": 5
    },
    {
      "id": 2,
      "type": "video",
      "src": "https://www.w3schools.com/html/mov_bbb.mp4",
      "duration": 10
    },
    {
      "id": 3,
      "type": "image",
      "src": "https://via.placeholder.com/800x600.png?text=Sample+Image+2",
      "duration": 4
    }
  ],
});

export default mock;