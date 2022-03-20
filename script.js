fetch('https://STORE_URL_HERE/password', {
  method: 'POST',
  body: JSON.stringify({
      form_type: 'storefront_password',
      utf8: '✓',
      password: 'PASSWORD_HERE'}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
.then(console.log)
