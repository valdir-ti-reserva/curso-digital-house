DROP TABLE IF EXISTS operacao;
DROP TABLE IF EXISTS cliente; 
DROP TABLE IF EXISTS carro; 

create table cliente(
id int auto_increment,
nome varchar(255),
cpf varchar (11) default null,
cnpj varchar (14) default null,
endereco varchar(255),
primary key(id)
);

create table carro(
id int auto_increment,
modelo varchar(255),
marca varchar(255),
ano datetime,
preco float,
preco_aluguel float,
primary key(id)
);

create table operacao(
id int auto_increment,
acao enum('aluguel','venda'),
data_retirada datetime,
data_devolucao datetime,
hora datetime,
id_carro int,
id_cliente int,
primary key(id),
foreign key(id_carro) references carro (id),
foreign key(id_cliente) references cliente(id)
);


insert into cliente (nome, cpf, cnpj, endereco) values('Jonatan','21472873343', null, 'Avenida América');
insert into cliente (nome, cpf, cnpj, endereco) values('Valdir','21472876343', null, 'rua 1');
insert into cliente (nome, cpf, cnpj, endereco) values('Davi','21472873353', null, 'rua 2');
insert into cliente (nome, cpf, cnpj, endereco) values('Marcelo','21472873243',null, 'rua 3');

select * from cliente;
