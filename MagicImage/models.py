from google.appengine.ext import db

class Stereo(db.Model):
    image = db.BlobProperty()
    date = db.DateTimeProperty(auto_now_add=True)