# Generated by Django 4.1.7 on 2023-03-07 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='colors',
            name='cpath',
            field=models.CharField(default='', max_length=200),
        ),
    ]
