from google.appengine.ext import db
from datetime import datetime, timedelta
import webapp2
from models import Stereo

class CleanOldImages(webapp2.RequestHandler):
    def get(self):
        q = db.GqlQuery("SELECT __key__ FROM Stereo WHERE date < :date", date=(datetime.now() - timedelta(days=1)))
        db.delete(q.fetch(None))
        self.response.out.write("Old Images cleaned.")


app = webapp2.WSGIApplication([('/task/clean', CleanOldImages),], debug=True)
