const typeDefs = `
    type Insight {
        end_year: String,
        intensity: Int,
        sector: String,
        topic: String,
        insight: String,
        url: String,
        region: String,
        start_year: String,
        impact: String,
        added: String,
        published: String,
        country: String,
        relevance: Int,
        pestle: String,
        source: String,
        title: String,
        likelihood: Int
    }
    type Query {
        getInsights: [Insight]
    }
`;

module.exports = typeDefs;