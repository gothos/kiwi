const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const should = chai.should();


chai.use(chaiHttp);


describe('Converter', () => {
  describe('GET converter', () => {
      it('it should convert number string to T9 array', (done) => {
        chai.request(server)
            .get('/convert')
            .query({ value: '23' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(9);
                res.body.should.be.eql([ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]);
              done();
            });
      });
  });
});