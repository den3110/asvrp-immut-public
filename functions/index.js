const functions = require('firebase-functions'); exports.probe = functions.firestore.document('probe/{id}').onWrite(async()=>{});
