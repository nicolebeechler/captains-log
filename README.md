# Captain's Log App

An app that records message logs from the captain. 

| Restful Routes |  |  |  |  |  |
| ---- | ---- | ---- | ---- | ---- | ---- |
|  |  |  |  |  |  |
| # | Action | URL | HTTP Verb | jsx view filename | mongoose method |
| 1 | Index | /logs/ | GET | Index.jsx | Log.find() |
| 2 | Show | /logs/ | GET | Show.jsx | Log.findOne ot Log.findById |
| 3 | New | /logs/new | GET | New.jsx | none |
| 4 | Create | /logs/ | POST | none | Log.create(req.body) |
| 5 | Edit | /logs/:id/edit | GET | Edit.jsx | Log.findOne ot Log.findById |
| 6 | Update | /logs/:id | PATCH/PUT | none | Log.findOneAndUpdate ot Log.findByIdAndUpdate |
| 7 | Destroy | /logs/:id | DELETE | none | Log.findOneAndDelete ot Log.findByIdAndDelete |

## Technologies Used:

* JavaScript
* Express / Node
* Mongo / Mongoose
