# TRATAMENTO DO BANCO DE DADOS

# Rodar esses comandos via terminal

## Backup

# docker exec bancodados_mysql_1 /usr/bin/mysqldump -u root --password=root db > backup.sql

## Restore

# cat backup.sql | docker exec -i bancodados_mysql_1 /usr/bin/mysql -u root --password=root db
