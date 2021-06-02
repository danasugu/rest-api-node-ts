import http from 'http';

http.createServer((request, response) => {
	response.end('Hello,World!');
});
