const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'submissionmlgc-alexsandro', 
  keyFilename: './submissionmlgc-alexsandro-9151249baa23.json',
});

async function storeData(id, data) {
  const predictCollection = db.collection('predictions');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
