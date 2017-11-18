var assert = require('chai').assert,
  request = require('supertest'),
  expect = require('chai').expect;

var url = 'https://jsonplaceholder.typicode.com';

describe('Verbo GET', function() {
  it('Exemplo de GET com o Header/json', function(done) {
    request(url)
      .get('/posts')
      .set('Content-Type', 'application/json')
      // .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('Verbo POST', function() {
  it('Exemplo de POST com o Header/json', function(done) {
    request(url)
      .post('/comments')
      .set('Content-Type', 'application/json')
      .send({
          "postId": "501",
          "id": "501",
          "name": "Pedro Ailals",
          "email": "Pedo2s.com",
          "body": "Aklsdu jdfhu dfj fdjfh fduuepçaalk fgji asdas"
      })
      // .expect('Content-Type', /json/)
      .expect(201);
  });
});
