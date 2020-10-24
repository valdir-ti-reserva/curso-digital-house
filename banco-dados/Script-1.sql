USE `qrcode`;

DROP TABLE IF EXISTS `operacao`; 
DROP TABLE IF EXISTS `cliente`; 
DROP TABLE IF EXISTS `carro`; 

create table cliente(
  id int AUTO_INCREMENT,
  nome varchar(255),
  cpf varchar (11),
  cnpj varchar (14),
  endereco varchar(255),
  primary key(id)
);


create table carro(
  id int AUTO_INCREMENT,
  modelo varchar(255),
  marca varchar(255),
  ano year(4),
  preco decimal(10,2),
  preco_aluguel decimal(10,2),
  primary key(id)
);


create table operacao(
  id int AUTO_INCREMENT,
  acao enum('aluguel','venda'),
  data_retirada datetime,
  data_devolucao datetime,
  id_carro int,
  id_cliente int,
  primary key(id),
  foreign key(id_carro) references carro (id),
  foreign key(id_cliente) references cliente(id)
);

USE `qrcode`;
insert into cliente (nome,cpf,cnpj,endereco) values('Valdir','21472876343',null,'rua 1');
insert into cliente (nome,cpf,cnpj,endereco) values('Davi','21472873353',null,'rua 2');
insert into cliente (nome,cpf,cnpj,endereco) values('Marcelo','21472873243',null,'rua 3');
insert into cliente (nome,cpf,cnpj,endereco) values('Jonatan','21472873343',null,'Avenida América');
insert into cliente (nome,cpf,cnpj,endereco) values('Maria','21472873342',null,'rua 4');
select * from cliente;

USE `qrcode`;
insert into carro (modelo,marca,ano,preco,preco_aluguel) values('kadet','chevrolet',2001,39.49,4);
insert into carro (modelo,marca,ano,preco,preco_aluguel) values('monza','chevrolet',2002,29.39,5);
insert into carro (modelo,marca,ano,preco,preco_aluguel) values('corsa','chevrolet',2004,19.29,5);
insert into carro (modelo,marca,ano,preco,preco_aluguel) values('celta','chevrolet',2006,99.19,5);
insert into carro (modelo,marca,ano,preco,preco_aluguel) values('palio','fiat',1990,19.9,5);
select * from carro;

USE `qrcode`;
insert into operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) values('aluguel','2020-09-20 10:08:20',null,1,2);
insert into operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) values('aluguel','2020-10-20 10:08:20',null,2,3);
insert into operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) values('aluguel','2020-08-20 10:08:20','2020-08-30',3,1);
insert into operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) values('aluguel','2020-07-20 10:08:20','2020-07-30',4,4);
insert into operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) values('aluguel','2020-06-20 10:08:20','2020-07-20',5,5);
insert into operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) values('venda','2020-07-22 10:08:20',null,5,5);
insert into operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) values('venda','2020-08-20 10:08:20',null,4,4);
insert into operacao (acao,data_retirada,data_devolucao,id_carro,id_cliente) values('venda','2020-09-20 10:08:20',null,3,1);


select count (*) as total_pessoas from operacao where acao = 'aluguel' and data_retirada between '2020-01-01 00:00:00' and '2020-12-31 23:59:59';

select count (*) as total_pessoas from operacao where acao = 'venda' AND MONTH(data_retirada) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH);

select count (*) as total_pessoas from operacao where 1=1 and( acao = 'aluguel' or acao = 'venda') -- group by (id_carro);

SELECT MAX(y.quantidade_carro) quantidade, y.modelo FROM (SELECT COUNT(o.id) quantidade_carro,c.modelo from carro c inner join operacao o on (c.id = o.id_carro) GROUP BY c.modelo  ORDER BY quantidade_carro DESC) y










