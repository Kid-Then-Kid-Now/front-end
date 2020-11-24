const APIURL = process.env.NODE_ENV === 'production'
    ? 'https://all-the-feels-back-end.herokuapp.com/'
    : 'http://localhost:5000/'

export default APIURL