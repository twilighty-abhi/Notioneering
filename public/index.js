const dotenv = require('dotenv').config()
const {Client} = require('@notionhq/client')

//initing the client
const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

const listDatabases = async () => {

    const { Client } = require('@notionhq/client');

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    (async () => {
        const response = await notion.search({
            filter: {
                property: 'object',
                value: 'database',
            },
        });
        console.log(response);
    })();
}

listDatabases()