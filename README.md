This project is based on this small demo: https://github.com/gungorugur/graphql-bff/tree/master

## Description

Simple implementation of Backend For Frontend pattern using GraphQL

### Install dependencies

```
yarn install
```

### Start project in development mode

```
yarn start-dev
```

### Example Query 
Get customer details and customer list in a single query

```
query {
  customer(id:0) {id, firstName},
  customers {id, firstName},
}
```

### Example Response

```
{
    "data": {
        "customer": {
            "id": 0,
            "firstName": "Rui"
        },
        "customers": [
            {
                "id": 0,
                "firstName": "Rui"
            },
            {
                "id": 1,
                "firstName": "Pedro"
            },
            {
                "id": 2,
                "firstName": "Ricardo"
            },
            {
                "id": 3,
                "firstName": "Rodrigo"
            },
            {
                "id": 4,
                "firstName": "Thiago"
            },
            {
                "id": 5,
                "firstName": "Carla"
            }
        ]
    }
}
```                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                   
