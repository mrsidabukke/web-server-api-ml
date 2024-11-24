const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
    projectId: 'submissionmlgc-alexsandro', 
    keyFilename: './submissionmlgc-alexsandro-9151249baa23.json',
  });
  
async function getAllData() {
 
    const predictCollection = db.collection('predictions');
    
    const allData = await predictCollection.get();
    return allData;
}

module.exports = getAllData;