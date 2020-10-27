CREATE DATABASE IF NOT EXISTS `shop-car`;
USE `shop-car`;

DROP TABLE IF EXISTS `operacao`; 
DROP TABLE IF EXISTS `cliente`; 
DROP TABLE IF EXISTS `carro`; 

CREATE TABLE IF NOT EXISTS cliente(
  id INT AUTO_INCREMENT,
  nome VARCHAR(255),
  cpf VARCHAR (11),
  cnpj VARCHAR (14),
  endereco VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS carro(
  id INT AUTO_INCREMENT,
  modelo VARCHAR(255),
  marca VARCHAR(255),
  ano year(4),
  preco DECIMAL(10,2),
  preco_aluguel DECIMAL(10,2),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS operacao(
  id INT AUTO_INCREMENT,
  acao enum('aluguel','venda'),
  data_retirada DATETIME,
  data_devolucao DATETIME,
  id_carro INT,
  id_cliente INT,
  PRIMARY KEY(id),
  FOREIGN KEY(id_carro) REFERENCES carro (id),
  FOREIGN KEY(id_cliente) REFERENCES cliente(id)
);

USE `shop-car`;
INSERT INTO cliente (nome,cpf,cnpj,endereco) VALUES('Valdir','21472876343',null,'rua 1');
INSERT INTO cliente (nome,cpf,cnpj,endereco) VALUES('Davi','21472873353',null,'rua 2');
INSERT INTO cliente (nome,cpf,cnpj,endereco) VALUES('Marcelo','21472873243',null,'rua 3');
INSERT INTO cliente (nome,cpf,cnpj,endereco) VALUES('Jonatan','21472873343',null,'Avenida America');
INSERT INTO cliente (nome,cpf,cnpj,endereco) VALUES('Maria','21472873342',null,'rua 4');
SELECT * FROM cliente;

USE `shop-car`;
INSERT INTO carro (modelo,marca,ano,preco,preco_aluguel) VALUES('kadet','chevrolet',2001,39.49,4);
INSERT INTO carro (modelo,marca,ano,preco,preco_aluguel) VALUES('monza','chevrolet',2002,29.39,5);
INSERT INTO carro (modelo,marca,ano,preco,preco_aluguel) VALUES('corsa','chevrolet',2004,19.29,5);
INSERT INTO carro (modelo,marca,ano,preco,preco_aluguel) VALUES('celta','chevrolet',2006,99.19,5);
INSERT INTO carro (modelo,marca,ano,preco,preco_aluguel) VALUES('palio','fiat',1990,19.9,5);
SELECT * FROM carro;

USE `shop-car`;
INSERT INTO operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) VALUES('aluguel','2020-09-20 10:08:20',null,1,2);
INSERT INTO operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) VALUES('aluguel','2020-10-20 10:08:20',null,2,3);
INSERT INTO operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) VALUES('aluguel','2020-08-20 10:08:20','2020-08-30',3,1);
INSERT INTO operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) VALUES('aluguel','2020-07-20 10:08:20','2020-07-30',4,4);
INSERT INTO operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) VALUES('aluguel','2020-06-20 10:08:20','2020-07-20',5,5);
INSERT INTO operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) VALUES('venda','2020-07-22 10:08:20',null,5,5);
INSERT INTO operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) VALUES('venda','2020-08-20 10:08:20',null,4,4);
INSERT INTO operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) VALUES('venda','2020-09-20 10:08:20',null,3,1);
SELECT * FROM operacao;

SELECT COUNT(*) AS total_pessoas_ultimo_ano FROM operacao WHERE YEAR(data_retirada) = YEAR(DATE_SUB(CURDATE(), INTERVAL 1 YEAR)) AND acao='aluguel';
SELECT COUNT (*) AS total_pessoas_ultimo_mes FROM operacao WHERE MONTH(data_retirada) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH) AND acao = 'venda';

SELECT COUNT (*) AS total_pessoas FROM operacao WHERE 1=1 AND( acao = 'aluguel' or acao = 'venda') -- group by (id_carro);
SELECT MAX(y.quantidade_carro) quantidade, y.modelo FROM (SELECT COUNT(o.id) quantidade_carro,c.modelo FROM carro c INNER JOIN operacao o ON (c.id = o.id_carro) GROUP BY c.modelo  ORDER BY quantidade_carro DESC) y


# TESTE

SELECT COUNT(o.id) AS qtde, c.model
    FROM carro c
    JOIN operacao o ON c.id = o.id_carro
        GROUP BY c.model
        ORDER BY qtde DESC 
        LIMIT 1;
