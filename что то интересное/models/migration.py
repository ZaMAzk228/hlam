import sys

from peewee import *
from project import Project
from user import User
from kvantum import Kvantum

database = SqliteDatabase("dev_database.db")
models_list = [User, Kvantum, Project]
database.create_tables(models_list)
