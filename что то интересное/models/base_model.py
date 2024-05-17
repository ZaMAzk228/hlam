from peewee import *
from database_instance import database


class BaseModel(Model):
    class Meta:
        database = database
