# noipun-backend
it's noipun backend services. powered by altrazen
## Description

#### User Model API Documentation

## Base URL

The base URL for all API requests is:

`http://localhost:8000/users` 

## Ends point:

### Password Change:

`http://localhost:8000/users/change-password` 

### `POST /change-password`

### Example:

### `Header Authorization = Token drdd2653754644654644`

### Body: Password must be set 8 character

```json
{
    "old_password":"old password",
    "new_password":"abc@1234",
    "confirm_password":"abc@1234"
}
```

### Invalid Token Response: Status 400

```json
{
    "detail": "Invalid token."
}
```

### Old Password Invalid Response:  Status 400

```json
{
    "old_password": [
        "Incorrect old password."
    ]
}
```

### Success Response: Status 200 ok

```json
{
    "detail": "Password changed successfully."
}
```