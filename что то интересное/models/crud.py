from peewee import *
from kvantum import Kvantum

def get_kvantums():
    pass


def create_kvantum(title: str):
    Kvantum.create(title=title)


def delete_kvantum():
    pass


def update_kvantum():
    pass

create_kvantum("it")
