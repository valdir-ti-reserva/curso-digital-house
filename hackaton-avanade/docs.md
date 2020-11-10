//Insert dos Carros
INSERT INTO	carros (placa, modelo) values ('abc-1123', 'Fiat Uno');
INSERT INTO	carros (placa, modelo) values ('xyz-3376', 'Fiat Strada');
INSERT INTO	carros (placa, modelo) values ('ort-5544', 'Chevrolet Onyx');
INSERT INTO	carros (placa, modelo) values ('kdc-0095', 'Ford Ranger');
INSERT INTO	carros (placa, modelo) values ('acd-9855', 'Honda Civic');


//Insert Clientes
INSERT INTO	clientes (name, email, telefone, createdAt, updatedAt) values ('Cliente Teste', 'teste@mail.com', '4422-8885', NOW(), now());
INSERT INTO	clientes (name, email, telefone, createdAt, updatedAt) values ('Cliente Teste 2', 'teste2@mail.com', '4455-8885', NOW(), now());
INSERT INTO	clientes (name, email, telefone, createdAt, updatedAt) values ('Cliente Teste 3', 'teste3@mail.com', '7777-8885', NOW(), now());
INSERT INTO	clientes (name, email, telefone, createdAt, updatedAt) values ('Cliente Teste 4', 'teste4@mail.com', '8888-8885', NOW(), now());
INSERT INTO	clientes (name, email, telefone, createdAt, updatedAt) values ('Cliente Teste 5', 'teste5@mail.com', '9999-8885', NOW(), now());

//Insert Motoristas
insert into motoristas (idCarro, name, email, telefone, createdAt, updatedAt) values (1, 'Motorista 1', 'driver@mail', '0000-8888', now(),now());
insert into motoristas (idCarro, name, email, telefone, createdAt, updatedAt) values (2, 'Motorista 2', 'driver2@mail', '0000-4422', now(),now());
insert into motoristas (idCarro, name, email, telefone, createdAt, updatedAt) values (3, 'Motorista 3', 'driver3@mail', '0000-4433', now(),now());
insert into motoristas (idCarro, name, email, telefone, createdAt, updatedAt) values (4, 'Motorista 4', 'driver4@mail', '0000-3334', now(),now());
insert into motoristas (idCarro, name, email, telefone, createdAt, updatedAt) values (5, 'Motorista 5', 'driver5@mail', '0000-6775', now(),now());

//Insert Corridas
