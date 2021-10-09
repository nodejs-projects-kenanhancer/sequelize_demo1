
# MySQL

```shell
$ mysql -h 127.0.0.1 -P 3306 -u root -p root
$ mysql -h 127.0.0.1 -P 3306 -u test_user -p -e "SHOW DATABASES;"
$ mysql -h 127.0.0.1 -P 3306 -u test_user -p -e "SELECT * FROM test.test_table;"
$ mysql -h 127.0.0.1 -P 3306 -u root -p test_db < school.sql
```

# Postgres

Run Postgres Docker Container
```shell
$ docker run -d --rm \
    --name pg-docker \
    -p 5432:5432 -e POSTGRES_USER=test \
    -e POSTGRES_USER=test \
    -e POSTGRES_PASSWORD=test \
    postgres
```

Run Postgres Docker Container with a mapped volume to host machine
```shell
$ docker run -d --rm \
    --name pg-docker \
    -p 5432:5432 \
    -e POSTGRES_USER=test \
    -e POSTGRES_PASSWORD=test \
    -v $PWD/docker/postgres/data:/var/lib/postgresql/data:rw \
    postgres
```

```shell
$ psql -h localhost -U postgres

$ psql -h localhost -U postgres -d postgres


$ docker exec -it pg-docker psql -U postgres

# or we can also run psql in the docker container
$ docker exec -it pg-docker psql -U postgres -c "CREATE DATABASE testdb;"
$ docker exec -it pg-docker psql -U postgres -f /sql-scripts/test_script.sql

# For example, if we have a large dump file to load, we must avoid copy-pasting. 
# We can run the import command directly from the host instead with the docker exec command
$ docker exec 65d9163eece2 psql -U postgres < dump.sql

# Inspecting our container to see which volume is used by our database
$ docker inspect -f "{{ .Mounts }}" 11a4455raaa0


```