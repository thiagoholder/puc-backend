const soap = require('soap');

const wsdlUrl = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

const proxy = {
  host: '127.0.0.1',
  port: 8080,
};

const functionName = 'CountryName';
const args = {
  sCountryISOCode: 'BR'
};


soap.createClient(wsdlUrl, { wsdl_options: { proxy }}, (err, client) =>{
  if(err){
    console.error('Erro ao criar client SOAP:', err);
    return;
  }

  client[functionName](args, (err, result) => {
    if(err){
      console.error('Erro ao chamar função SOAP', err);
      return;
    }

    console.log('Resultado da função SOAP:', result);

  });

});