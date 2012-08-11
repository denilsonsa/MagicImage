from autostereogram import make_stereogram
from google.appengine.ext import db
from google.appengine.ext.webapp import template
from models import Stereo
import os
import webapp2


class MainPage(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), 'templates/index.html')
        self.response.out.write(template.render(path, {}))


class Stereogram(webapp2.RequestHandler):
    def post(self):
        input_image = self.request.get("image")
        try:
            out = make_stereogram(input_image, 'pattern.png')
            output_image = out.getvalue()
            stereo = Stereo()
            stereo.image = db.Blob(output_image)
            stereo.put()
            image_id = stereo.key()
            template_values = {
                'image_id': image_id,
            }
            path = os.path.join(os.path.dirname(__file__), 'templates/index.html')
            self.response.out.write(template.render(path, template_values))
        except:
            self.error(501)

class GetImage(webapp2.RequestHandler):
    def get(self):
        stereo = db.get(self.request.get("img_id"))
        if stereo.image:
            self.response.headers['Content-Type'] = "image/png"
            self.response.out.write(stereo.image)
        else:
            self.error(404)


app = webapp2.WSGIApplication([('/', MainPage),('/stereogram', Stereogram),('/img', GetImage)], debug=True)

