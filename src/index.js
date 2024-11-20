const client = require('./elasticsearchClient');

// Index a sample document
async function indexDocument() {
  try {
    const response = await client.index({
      index: 'test-index', // Name of the index
      document: {
        title: 'Hello World',
        content: 'This is an Elasticsearch document.',
        date: new Date(),
      },
    });
    console.log('Document indexed:', response);
  } catch (error) {
    console.error('Error indexing document:', error);
  }
}

// Search for documents
async function searchDocuments() {
  try {
    const response = await client.search({
      index: 'test-index',
      query: {
        match: { title: 'Hello' }, // Match documents with "Hello" in the title
      },
    });
    console.log('Search results:', response.hits.hits);
  } catch (error) {
    console.error('Error searching documents:', error);
  }
}

// Main function
(async () => {
  await indexDocument();
  await searchDocuments();
})();
