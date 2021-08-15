let END_POINT = 'edAspire.com';
let HOST = 'https://edAspire.com';
if (process.env.NODE_ENV === 'development') {
  END_POINT = 'localhost:5500';
  HOST = 'http://localhost:5500';
}

export { END_POINT, HOST };
