import pyrebase

config = {
  "apiKey": "AIzaSyDShXJC9ntPjuNARw3DchIkw4rp6CPmbyA",
  "authDomain": "clothing-store-76c58.firebaseapp.com",
  "databaseURL": "https://clothing-store-76c58-default-rtdb.firebaseio.com/",
  "storageBucket": "gs://clothing-store-76c58.appspot.com"
}

firebase = pyrebase.initialize_app(config)

print(firebase)