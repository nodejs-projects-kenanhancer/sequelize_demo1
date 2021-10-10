
# MySQL

[Docker MySQL](https://hub.docker.com/_/mysql)

Run MySQL Docker Container
```shell
$ docker run -d \
    --name mysql-docker \
    -p 3306:3306 \
    -e MYSQL_USER=test \
    -e MYSQL_PASSWORD=test \
    mysql
```

Run MySQL Docker Container with a mapped volume to host machine
```shell
$ docker run -d \
    --name mysql-docker \
    -p 3306:3306 \
    -e MYSQL_USER=test \
    -e MYSQL_PASSWORD=test \
    -v $PWD/docker/mysql/data:/var/lib/mysql:rw \
    mysql
```

```shell
$ mysql -h 127.0.0.1 -P 3306 -u root -p root
$ mysql -h 127.0.0.1 -P 3306 -u test_user -p -e "SHOW DATABASES;"
$ mysql -h 127.0.0.1 -P 3306 -u test_user -p -e "SELECT * FROM test.test_table;"
$ mysql -h 127.0.0.1 -P 3306 -u root -p test_db < school.sql
```

# MariaDB

[Docker MariaDB](https://hub.docker.com/_/mariadb)

Run MariaDB Docker Container
```shell
$ docker run -d \
    --name mariadb-docker \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=root \
    -e MYSQL_USER=test \
    -e MYSQL_PASSWORD=test \
    mariadb
```

or

```shell
$ docker run -d \
    --name mariadb-docker \
    -p 3306:3306 \
    -e MARIADB_ROOT_PASSWORD=root \
    -e MARIADB_USER=test \
    -e MARIADB_PASSWORD=test \
    mariadb
```

```shell
$ mysql -h 127.0.0.1 -P 3306 -u root -p root
$ mysql -h 127.0.0.1 -P 3306 -u test_user -p -e "SHOW DATABASES;"
$ mysql -h 127.0.0.1 -P 3306 -u test_user -p -e "SELECT * FROM test.test_table;"
$ mysql -h 127.0.0.1 -P 3306 -u root -p test_db < school.sql
```

# PostgreSQL

[Docker PostgreSQL](https://hub.docker.com/_/postgres)

Run Postgres Docker Container
```shell
$ docker run -d \
    --name pg-docker \
    -p 5432:5432 -e POSTGRES_USER=test \
    -e POSTGRES_USER=test \
    -e POSTGRES_PASSWORD=test \
    postgres
```

Run Postgres Docker Container with a mapped volume to host machine
```shell
$ docker run -d \
    --name pg-docker \
    -p 5432:5432 \
    -e POSTGRES_USER=test \
    -e POSTGRES_PASSWORD=test \
    -v $PWD/docker/postgres/data:/var/lib/postgresql/data:rw \
    postgres
```

```shell
$ psql -h localhost -U test

$ psql -h localhost -U test -d postgres


$ docker exec -it pg-docker psql -U test

# or we can also run psql in the docker container
$ docker exec -it pg-docker psql -U test -c "CREATE DATABASE testdb;"
$ docker exec -it pg-docker psql -U test -f /sql-scripts/test_script.sql

# For example, if we have a large dump file to load, we must avoid copy-pasting. 
# We can run the import command directly from the host instead with the docker exec command
$ docker exec 65d9163eece2 psql -U test < dump.sql

# Inspecting our container to see which volume is used by our database
$ docker inspect -f "{{ .Mounts }}" 11a4455raaa0


```

