#!/bin/bash
# make them executable 
# chmod +x export_db.sh
# chmod +x import_db.sh

# mysqldump -u your_username -p your_database_name > dump_file.sql

mysqldump -u alpha -p kaamsewa > dump_file.sql
