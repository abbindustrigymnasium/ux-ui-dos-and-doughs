import sqlite3

import schemas, pwhashing

from fastapi import FastAPI, Depends
from pydantic import BaseModel

app = FastAPI()

def get_db():
    db = sqlite3.connect('dev.db', check_same_thread=False)
    try:
        yield db
    finally:
        db.close()

@app.on_event("startup")
async def startup():
    conn = sqlite3.connect('dev.db', check_same_thread=False)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL
        );
    ''')
    conn.commit()
    conn.close()

@app.on_event("shutdown")
async def shutdown():
    pass


@app.post("/users/")
async def register(user: schemas.Registration, db: sqlite3.Connection = Depends(get_db)):
    try:
        cursor = db.cursor()
        cursor.execute("INSERT INTO users (email,password_hash) VALUES (?,?)", (user.email, pwhashing.hash_password(user.password)))
        db.commit()
    except Exception as e:
        return {"error": "some error occurred, {}".format(e)}
    return {"error": ""}

@app.post("/login/")
async def authenticate(user: schemas.Registration, db: sqlite3.Connection = Depends(get_db)):
    try:
        cursor = db.cursor()
        cursor.execute('SELECT password_hash FROM users WHERE email = ?', (user.email,))
        password_hash = cursor.fetchone()
        if pwhashing.verify_password(user.password, password_hash[0]):
            return {"message": "correct password"}
        else:
            return {"message": "incorrect password"}
    except Exception as e:
        return {"error": "some error occurred, {}".format(e)}
    return {"error": ""}