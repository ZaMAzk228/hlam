from peewee import *
from base_model import BaseModel


class User(BaseModel):
    id = PrimaryKeyField()
    first_name = CharField()
    second_name = CharField()