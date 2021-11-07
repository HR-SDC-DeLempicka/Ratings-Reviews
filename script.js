import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  vus: 300,
  duration: '30s',
};

export default function () {
  http.put('http://localhost:3000/reviews/meta');
  sleep(1);
}