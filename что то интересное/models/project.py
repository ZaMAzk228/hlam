from peewee import *
from user import User
from kvantum import Kvantum
from base_model import BaseModel


class Project(BaseModel):
    id = PrimaryKeyField()
    title = CharField()
    problem = CharField()
    solution = CharField()
    kvantum_id = ForeignKeyField(Kvantum, backref="Project")
    author = ForeignKeyField(User, backref="Project")
    target = CharField()
    tasks = CharField()
    result = CharField()