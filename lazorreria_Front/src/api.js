let apiUrl = 'http://localhost:8000'

if (process.env.NODE_ENV === 'production'){
    apiUrl = import.meta.env.VITA_APP_BACK_URL
}