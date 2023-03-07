from django.db import models

class Colors(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    image = models.ImageField(null=True, blank=True, upload_to="images/")

    def __str__(self):
        return self.name