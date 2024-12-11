import sqlite3
from datetime import datetime as dt

import psycopg2
from config.config import database_keys


class Database:
    def __init__(self, db_file):
        self.connection = psycopg2.connect(dbname=database_keys[0], user=database_keys[1],
                                           password=database_keys[2], host=database_keys[3])
        self.cursor = self.connection.cursor()

    def add_user(self, user):
        with self.connection:
            self.cursor.execute('INSERT INTO public.users'
                                ' (telegram_id, name, phone, refferer_id, refferers) '
                                'VALUES (%s, %s, %s, %s, %s)',
                                (user["id"], user["name"], user["phone"], 0, 0))
            self.connection.commit()

    def is_user_exist(self, user_id):
        with self.connection:
            self.cursor.execute(f'SELECT * FROM public.users WHERE telegram_id = {user_id}')
            result = self.cursor.fetchall()
            return bool(len(result))
