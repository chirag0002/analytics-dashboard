const Insight = require('./db');

const resolvers = {
    Query: {
        getInsights: async () => {
            try {
                const insights = await Insight.find();
                return insights;
            } catch (err) {
                console.log(err);
            }
        }
    }
}

module.exports = resolvers;