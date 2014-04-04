Frontend test
=============

1. Clone repo
2. Change into repo directory
3. Install dependencies:

```
	npm install
```

4. Run the node server

```
	npm start
```

This will start the node expressjs server on http://localhost:3000.

All templates live in views directory.
Static assets are in public directory.

Endpoints
---------
There are two endpoints available for getting and posting comments.

```
	GET /api/donations/100/comments
	POST /api/donations/100/comments
```

The GET endpoint accepts a offset query parameter for returning comments past the offset.
The POST endpoint requires a text field to be sent, it will return the newly created comment.
