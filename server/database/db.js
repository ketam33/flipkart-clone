import mongoose from 'mongoose';

const Connection = async (username, password) => {
//mongodb://ketan:<password>@ac-nrsqbbb-shard-00-00.2zweqcy.mongodb.net:27017,ac-nrsqbbb-shard-00-01.2zweqcy.mongodb.net:27017,ac-nrsqbbb-shard-00-02.2zweqcy.mongodb.net:27017/?ssl=true&replicaSet=atlas-pv6jd7-shard-0&authSource=admin&retryWrites=true&w=majority

//mongodb://${username}:${password}@ac-nrsqbbb-shard-00-00.2zweqcy.mongodb.net:27017,ac-nrsqbbb-shard-00-01.2zweqcy.mongodb.net:27017,ac-nrsqbbb-shard-00-02.2zweqcy.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-pv6jd7-shard-0&authSource=admin&retryWrites=true&w=majority


    const URL = `mongodb://${username}:${password}@ac-nrsqbbb-shard-00-00.2zweqcy.mongodb.net:27017,ac-nrsqbbb-shard-00-01.2zweqcy.mongodb.net:27017,ac-nrsqbbb-shard-00-02.2zweqcy.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-pv6jd7-shard-0&authSource=admin&retryWrites=true&w=majority `;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;