#!/bin/bash
# make them executable 
# chmod +x export_db.sh
# chmod +x import_db.sh

# mysql -u your_username -p your_database_name < dump_file.sql

mysql -u alpha -p kaamsewa < dump_file.sql
