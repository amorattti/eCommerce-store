# eCommerce store page
### [Live Site](https://ecommercy-shop.herokuapp.com/) Heroku delay server ~5s (free package)

![Restaurant Landing Page](https://i.ibb.co/z4CjPpL/Screenshot-2022-02-20-at-03-19-39-Screenshot-2022-02-20-at-03-16-56-React-App-png-PNG-Image-1440-151.png)

## Deployment

```bash
  npm run install (client / server)
  npm run build (client)
  npm run dev
```

<br>
<br>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### Client:

`REACT_APP_API_URL=http://localhost:5000/api`  || heroku `REACT_APP_API_URL=/api`

#### Server:

`MONGO_URI`

`CLIENT_URL`

`BRAINTREE_MARCHANT_ID`

`BRAINTREE_PUBLIC_KEY`

`BRAINTREE_PRIVATE_KEY`

<br>
<br>

## Test Credit Card Numbers

#### [source](https://support.checkfront.com/hc/en-us/articles/115004847353-Payment-Providers-Braintree-Direct)

Back to top

You can use the following fictitious credit card numbers when testing your checkout:

    Visa: 4111 1111 1111 1111
    Mastercard: 5555 5555 5555 4444
    Amex: 3714 496353 9843

You can use any CVC code.

For expiry dates, use a valid month and a day within the next 180 years. 22/2222 does not work!

Amounts between $0.01 - $1999.99 simulate a successful authorization.

Finally, always remember to take your account out of test mode when you are finished!



