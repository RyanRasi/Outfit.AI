FROM mcr.microsoft.com/mssql/server:2019-latest

USER root

COPY setup.sql setup.sql
COPY setup_database.sh setup_database.sh
COPY entrypoint.sh entrypoint.sh

RUN chmod +x ./setup.sql ./setup_database.sh ./entrypoint.sh

CMD /bin/bash ./entrypoint.sh