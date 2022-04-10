# Dashboard Backend :heavy_check_mark:

Dashboard backend made with TypeScript, Express, TypeORM and PostgreSQL

The frontend is being hosted at https://github.com/jphinning/DashboardNextjs

## Heroku and Vercel Deployment :computer:

The backend part is deployd in Heroku at https://dashboard-node-jphinning.herokuapp.com/

To see the app in action through the frontend see https://dashboard-nextjs-peach.vercel.app/

## Requirements :rocket:

```
node 17.3.0
docker &  docker-compose
```

## How to Run it :running:

Make sure the frontend is running if you want to see chart data

```bash
git clone git@github.com:jphinning/DashboardBackend.git
cd DashboardBackend
npm install

# Postgres container
docker-compose up -d

npm start
```

## Observations :electric_plug:

If you want to see the frontend go to this repo: https://github.com/jphinning/DashboardNextjs

## App in action :coffee:

![Alt Text](https://media.giphy.com/media/gkdz4ln9IUtfaiC9g6/giphy.gif)
