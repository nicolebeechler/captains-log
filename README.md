# Captain's Log App

An app that records message logs from the captain. 

## Restful Routes

| ---- | ---- | ---- | ---- | ---- | ---- |
| # | Action | URL | HTTP Verb | jsx view filename | mongoose method |
| 1 | Index | /logs/ | GET | Index.jsx | Log.find() |
| 2 | Show | /logs/ | GET | Show.jsx | Log.findOne ot Log.findById |
| 3 | New | /logs/new | GET | New.jsx | none |
| 4 | Create | /logs/ | POST | none | Log.create(req.body) |
| 5 | Edit | /logs/:id/edit | GET | Edit.jsx | Log.findOne ot Log.findById |
| 6 | Update | /logs/:id | PATCH/PUT | none | Log.findOneAndUpdate ot Log.findByIdAndUpdate |
| 7 | Destroy | /logs/:id | DELETE | none | Log.findOneAndDelete ot Log.findByIdAndDelete |

<a href="https://imgur.com/kRp0FdM"><img src="https://i.imgur.com/kRp0FdM.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/2kTntOL"><img src="https://i.imgur.com/2kTntOL.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/64DkuC9"><img src="https://i.imgur.com/64DkuC9.png" title="source: imgur.com" /></a>

## Technologies Used:

* JavaScript
* Express / Node
* Mongo / Mongoose
