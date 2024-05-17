from peewee import *
from base_model import BaseModel


class Kvantum(BaseModel):
    id = PrimaryKeyField()
    title = CharField()